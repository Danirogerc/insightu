import Link from "next/link";
export default function Home() {
  return (
    <main>
      <h1>Collect user feedback to make a better product</h1>
      <div>
        Create a feedback board in minutes to be able to prioritize what
        features users love
      </div>
      <Link href="/dashboard">Dashboard</Link>
    </main>
  );
}
