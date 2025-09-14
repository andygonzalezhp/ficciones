export default function Home() {
  return (
    <div>
      <h1 className="text-[56px] sm:text-[72px] leading-none mb-6">ficciones.net</h1>

      <ul className="space-y-4 text-[40px] sm:text-[52px] leading-[1.05]">
        <li>
          <a href="/dreaming" className="hover:italic">dreaming</a>
        </li>
        <li>
          <a href="/impression" className="hover:italic">impression</a>
        </li>
      </ul>
    </div>
  );
}
