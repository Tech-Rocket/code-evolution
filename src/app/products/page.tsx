import Link from "next/link";

export default function Products() {
  const productId = 100;
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-wide">My Products</h1>

      <ul className="mt-4">
        <li>
          <Link href="/products/1">Product 1</Link>
        </li>
        <li>
          <Link href="/products/2">Product 2</Link>
        </li>
        <li>
          <Link href="/products/3">Product 3</Link>
        </li>

        <li>
          <Link href={`/products/${productId}`}>Product {productId}</Link>
        </li>
      </ul>

      <Link href="/">Back to the Home page</Link>
    </div>
  );
}
