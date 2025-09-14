import Link from "next/link";
import Back from "@/components/back";
import { getAllPosts } from "@/lib/posts";

export const metadata = { title: "dreaming — ficciones" };

export default async function Dreaming() {
  const posts = await getAllPosts();

  return (
    <div className="max-w-3xl">
      <Back />
      <h1 className="text-5xl mb-4">dreaming</h1>
      <p className="opacity-80 mb-6">notas et fragmenta</p>

      <ul className="space-y-4">
        {posts.map(({ slug, metadata }) => (
          <li key={slug}>
            <Link href={`/dreaming/${slug}`} className="group block">
              <div className="text-xl font-semibold group-hover:italic">
                {metadata.title ?? slug}
              </div>
              {metadata.date && (
                <div className="text-sm opacity-70">
                  {new Date(metadata.date).toLocaleDateString()}
                </div>
              )}
              {metadata.summary && <div className="opacity-80">{metadata.summary}</div>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
