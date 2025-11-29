import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export default async function CvPage() {
  const cvPath = path.join(process.cwd(), 'content', 'cv', 'my-resume.mdx');
  const fileContents = await fs.readFile(cvPath, 'utf8');
  
  const { data, content } = matter(fileContents);
  
  const processedContent = await remark()
    .use(html)
    .process(content);
  const contentHtml = processedContent.toString();

  return (
    <article className="prose lg:prose-xl">
      <h1>{data.name}</h1>
      <h2>{data.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </article>
  );
}
