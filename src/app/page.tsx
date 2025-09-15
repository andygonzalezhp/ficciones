import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-[56px] sm:text-[72px] leading-none mb-6 select-text">
        ficciones.net
      </h1>

      <ul className="space-y-4 text-[40px] sm:text-[52px] leading-[1.05]">
        <li>
          <Link href="/dreaming" prefetch={false} className="hover:italic">
            dreaming
          </Link>
        </li>
        <li>
          <Link href="/impression" prefetch={false} className="hover:italic">
            impression
          </Link>
        </li>
        <li>
          <Link href="https://art-is-everywhere.com" prefetch={false} target="_blank" className="hover:italic">
            art is everywhere
          </Link>
        </li>
      </ul>
    </div>
  );
}
