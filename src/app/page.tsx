import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Welcome home!</h1>
      <div className="mt-4 flex gap-5">
        <Link href="/blog">Blog page</Link>
        <Link href="/products">Navigate to the products page</Link>
        <Link href="/articles/breaking-news-123?lang=en">Read in English</Link>
        <Link href="/articles/breaking-news-123?lang=fr">Read in French</Link>
      </div>
    </div>
  );
}
