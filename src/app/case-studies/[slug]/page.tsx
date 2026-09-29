import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Container } from "@/components/ui/Container";
import { getContent, listContent } from "@/lib/content";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return listContent("case-studies").map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getContent("case-studies", slug);
  if (!study) return {};
  return { title: study.meta.title, description: study.meta.description };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getContent("case-studies", slug);
  if (!study) notFound();

  return (
    <Container narrow className="py-16 sm:py-24">
      <Link
        href="/case-studies"
        className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-muted)] hover:text-[var(--color-accent)]"
      >
        <ArrowLeft size={15} /> All Case Studies
      </Link>
      <h1 className="font-serif text-4xl font-medium text-[var(--color-ink)]">
        {study.meta.title}
      </h1>
      <div className="prose prose-neutral mt-10 max-w-none">
        <MDXRemote source={study.content} />
      </div>
    </Container>
  );
}
