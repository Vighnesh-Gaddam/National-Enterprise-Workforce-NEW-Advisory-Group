import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/Container";
import { listContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Insights",
  description: "Writing from NEW Advisory Group.",
};

export default function BlogIndexPage() {
  const posts = listContent("blog");

  return (
    <>
      <PageHeader eyebrow="Insights" title="Perspective on structure, growth, and durability." />
      <Container className="py-16 sm:py-20">
        {posts.length === 0 ? (
          <p className="text-[var(--color-muted)]">
            Nothing published yet — check back soon.
          </p>
        ) : (
          <ul>
            {posts.map((post) => (
              <li key={post.slug} className="border-t border-[var(--color-border)] py-8 first:border-t-0">
                <Link href={`/blog/${post.slug}`} className="group block">
                  <h2 className="font-serif text-2xl font-medium text-[var(--color-ink)] group-hover:text-[var(--color-accent)]">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm text-[var(--color-muted)]">{post.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </>
  );
}
