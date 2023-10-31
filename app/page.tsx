import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center gap-5 py-20">
      <h1>Post</h1>
      <ul className="flex flex-col gap-5">
        <li>
          <Link href="/post/1">* Test Post</Link>
        </li>
        <li>
          <Link href="/post/2">* Second Test Post</Link>
        </li>
      </ul>
    </main>
  );
}
