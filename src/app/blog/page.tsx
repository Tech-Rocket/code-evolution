import Link from "next/link";
import { resolve } from "path";

export const metadata = {
  title: "Blog",
};

export default async function Blog() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("International loading");
    }, 2000);
  });
  return (
    <div>
      <h1>My Blog</h1>

      <Link href="/"> Back to the Home page</Link>
    </div>
  );
}
