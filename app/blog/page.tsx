import Link from "next/link";
import { getAllPostsMeta } from "@/lib/posts";

export default async function BlogPage() {
  const posts = await getAllPostsMeta();

  return (
    <section className="space-y-8">
      <div className="space-y-2">
        <p className="text-sm uppercase tracking-[0.35em] text-primary">Blog</p>
        <h1 className="text-3xl font-bold sm:text-4xl">Latest writing</h1>
        <p className="text-muted-foreground">
          Thoughts on building products, shipping, and keeping the stack tidy.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>{new Date(post.date).toLocaleDateString()}</span>
              <span>{post.readingTime}</span>
            </div>
            <h2 className="mt-3 text-2xl font-semibold transition group-hover:text-primary">
              {post.title}
            </h2>
            {post.description ? (
              <p className="mt-2 text-muted-foreground">{post.description}</p>
            ) : null}
            {post.tags?.length ? (
              <div className="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-wide text-primary">
                {post.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-primary/10 px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}
          </Link>
        ))}
      </div>
    </section>
  );
}
