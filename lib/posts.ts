import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  description?: string;
  tags?: string[];
  readingTime: string;
};

export type Post = PostMeta & {
  content: string;
  html: string;
  headings: { id: string; text: string; depth: number }[];
};

const blogDir = path.join(process.cwd(), "content", "blog");

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function getHeadings(markdown: string) {
  const headings: { id: string; text: string; depth: number }[] = [];
  const regex = /^(##|###)\s+(.+)$/gm;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(markdown)) !== null) {
    const depth = match[1].length;
    const text = match[2].trim();
    headings.push({ id: slugify(text), text, depth });
  }
  return headings;
}

function addHeadingIds(htmlContent: string) {
  return htmlContent.replace(/<(h[23])>([^<]+)<\/h[23]>/g, (_match, tag, text) => {
    const id = slugify(text.trim());
    return `<${tag} id="${id}">${text}</${tag}>`;
  });
}

function computeReadingTime(content: string) {
  const words = content.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

export async function getAllPostsMeta(): Promise<PostMeta[]> {
  const files = await fs.readdir(blogDir);
  const posts: PostMeta[] = [];

  for (const file of files) {
    if (!file.endsWith(".mdx") && !file.endsWith(".md")) continue;
    const slug = file.replace(/\.(md|mdx)$/i, "");
    const raw = await fs.readFile(path.join(blogDir, file), "utf8");
    const { data, content } = matter(raw);
    posts.push({
      slug,
      title: data.title ?? slug,
      date: data.date ?? "",
      description: data.description,
      tags: data.tags,
      readingTime: computeReadingTime(content),
    });
  }

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const fullPath = path.join(blogDir, `${slug}.mdx`);
  try {
    const raw = await fs.readFile(fullPath, "utf8");
    const { data, content } = matter(raw);
    const processed = await remark().use(html).process(content);
    const htmlContent = addHeadingIds(processed.toString());
    const headings = getHeadings(content);
    return {
      slug,
      title: data.title ?? slug,
      date: data.date ?? "",
      description: data.description,
      tags: data.tags,
      readingTime: computeReadingTime(content),
      content,
      html: htmlContent,
      headings,
    };
  } catch {
    return null;
  }
}

export async function getPrevNext(slug: string): Promise<{ prev: PostMeta | null; next: PostMeta | null }> {
  const all = await getAllPostsMeta();
  const idx = all.findIndex((p) => p.slug === slug);
  return {
    prev: idx > 0 ? all[idx - 1] : null,
    next: idx >= 0 && idx < all.length - 1 ? all[idx + 1] : null,
  };
}
