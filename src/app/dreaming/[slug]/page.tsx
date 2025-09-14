import { notFound } from "next/navigation";
import Back from "@/components/back";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { metadata } = await getPostBySlug(slug);
  return {
    title: metadata.title ? `${metadata.title} — ficciones` : "ficciones",
    description: metadata.summary,
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post?.Component) return notFound();

  const Article = post.Component;
  return (
    <article className="article">
      <Back href="/dreaming" />
      {post.metadata.title && <h1>{post.metadata.title}</h1>}
      {post.metadata.date && (
        <div className="text-sm opacity-70">
          {new Date(post.metadata.date).toLocaleDateString()}
        </div>
      )}
      <Article />
    </article>
  );
}
