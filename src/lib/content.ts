import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface ContentMeta {
  title: string;
  description: string;
  date: string;
  slug: string;
  [key: string]: unknown;
}

function contentDir(kind: "blog" | "case-studies") {
  return path.join(process.cwd(), "src", "content", kind);
}

export function listContent(kind: "blog" | "case-studies"): ContentMeta[] {
  const dir = contentDir(kind);
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));

  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), "utf-8");
      const { data } = matter(raw);
      return data as ContentMeta;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getContent(kind: "blog" | "case-studies", slug: string) {
  const filePath = path.join(contentDir(kind), `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(raw);
  return { content, meta: data as ContentMeta };
}
