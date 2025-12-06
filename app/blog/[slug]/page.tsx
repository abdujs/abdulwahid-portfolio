import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPostsMeta, getPostBySlug, getPrevNext } from "@/lib/posts";

export async function generateStaticParams() {
  const posts = await getAllPostsMeta();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  if (!post) return notFound();

  const { prev, next } = await getPrevNext(params.slug);

  return (
    <article className="space-y-10">
      <header className="space-y-3">
        <p className="text-sm uppercase tracking-[0.35em] text-primary">Blog</p>
        <h1 className="text-4xl font-bold sm:text-5xl">{post.title}</h1>
        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
          <span>{new Date(post.date).toLocaleDateString()}</span>
          <span>•</span>
          <span>{post.readingTime}</span>
          {post.tags?.length ? (
            <div className="flex flex-wrap gap-2 text-xs uppercase tracking-wide text-primary">
              {post.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-primary/10 px-3 py-1">
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </header>

      {post.headings.length ? (
        <nav className="rounded-2xl border border-border bg-muted/30 p-4">
          <p className="text-sm font-semibold text-muted-foreground">On this page</p>
          <ul className="mt-3 space-y-2 text-sm">
            {post.headings.map((heading) => (
              <li key={heading.id} className={heading.depth === 2 ? "pl-0" : "pl-4"}>
                <a
                  href={`#${heading.id}`}
                  className="text-muted-foreground transition hover:text-primary focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}

      <div
        className="prose prose-neutral max-w-none dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />

      <footer className="flex flex-col gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        {prev ? (
          <Link
            href={`/blog/${prev.slug}`}
            className="group inline-flex items-center gap-2 rounded-full px-4 py-2 transition hover:text-primary focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <span className="text-lg">←</span>
            <span className="flex flex-col text-left">
              <span className="text-xs uppercase tracking-wide text-primary">Previous</span>
              <span className="font-semibold text-foreground group-hover:text-primary">{prev.title}</span>
            </span>
          </Link>
        ) : <span />}

        {next ? (
          <Link
            href={`/blog/${next.slug}`}
            className="group inline-flex items-center gap-2 rounded-full px-4 py-2 transition hover:text-primary focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <span className="flex flex-col text-right">
              <span className="text-xs uppercase tracking-wide text-primary">Next</span>
              <span className="font-semibold text-foreground group-hover:text-primary">{next.title}</span>
            </span>
            <span className="text-lg">→</span>
          </Link>
        ) : <span />}
      </footer>
    </article>
  );
}
