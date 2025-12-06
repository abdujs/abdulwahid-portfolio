import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Resume | Abdulwahid Munewer",
  description: "Full-Stack Developer resume for Abdulwahid Munewer.",
};

export default async function CvPage() {
  const cvPath = path.join(process.cwd(), "content", "cv", "my-resume.mdx");
  const fileContents = await fs.readFile(cvPath, "utf8");

  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  const name = data.name ?? "Resume";
  const title = data.title ?? "Full-Stack Developer";
  const location = data.location as string | undefined;
  const email = data.email as string | undefined;
  const phone = data.phone as string | undefined;
  const github = data.github as string | undefined;
  const summary = data.summary as string | undefined;
  const downloadUrl = (data.downloadUrl as string | undefined) ?? "https://flowcv.com/resume/u0sahg9n70";

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-12">
      <section className="rounded-3xl border border-border bg-card p-8 shadow-sm">
        <p className="text-sm uppercase tracking-[0.35em] text-primary">Resume</p>
        <h1 className="text-4xl font-bold sm:text-5xl">{name}</h1>
        <p className="text-lg text-muted-foreground">{title}</p>

        <div className="mt-4 flex flex-wrap gap-3 text-sm text-muted-foreground">
          {location ? <span>{location}</span> : null}
          {email ? (
            <Link
              href={`mailto:${email}`}
              className="rounded-full border border-transparent px-3 py-1 transition hover:text-primary focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {email}
            </Link>
          ) : null}
          {phone ? <span>{phone}</span> : null}
          {github ? (
            <Link
              href={github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-transparent px-3 py-1 transition hover:text-primary focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              GitHub
            </Link>
          ) : null}
        </div>

        {summary ? <p className="mt-4 text-base text-muted-foreground">{summary}</p> : null}

        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild>
            <Link href={downloadUrl} target="_blank" rel="noreferrer">
              Download PDF
            </Link>
          </Button>
          {github ? (
            <Button variant="outline" asChild>
              <Link href={github} target="_blank" rel="noreferrer">
                View GitHub
              </Link>
            </Button>
          ) : null}
        </div>
      </section>

      <article className="prose prose-neutral max-w-none dark:prose-invert">
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </article>
    </div>
  );
}
