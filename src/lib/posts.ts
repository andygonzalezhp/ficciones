import path from "path";
import fs from "fs/promises";

const POSTS_DIR = path.join(process.cwd(), "content");

export async function getPostSlugs() {
  const files = await fs.readdir(POSTS_DIR);
  return files.filter(f => f.endsWith(".mdx")).map(f => f.replace(/\.mdx$/, ""));
}

export async function getPostBySlug(slug: string) {
  // Import MDX as a module to access its exported metadata + component
  const mod = await import(`../../content/${slug}.mdx`);
  const { metadata, default: Component } = mod as {
    metadata?: { title?: string; date?: string; summary?: string; tags?: string[] };
    default: React.ComponentType;
  };
  return { slug, metadata: metadata ?? {}, Component };
}

export async function getAllPosts() {
  const slugs = await getPostSlugs();
  const posts = await Promise.all(slugs.map(getPostBySlug));
  return posts.sort(
    (a, b) =>
      new Date(b.metadata.date ?? 0).getTime() - new Date(a.metadata.date ?? 0).getTime()
  );
}
