import Link from "next/link";

export const metadata = {
  title: "Blog",
};

export default function Blog() {
  return (
    <div>
      <h1>My Blog</h1>

      <Link href="/"> Back to the Home page</Link>
    </div>
  );
}
