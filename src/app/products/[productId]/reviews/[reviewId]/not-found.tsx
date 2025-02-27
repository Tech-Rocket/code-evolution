"use client";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();
  const productId = pathname.split("/")[2];
  const reviewId = pathname.split("/")[3];
  return (
    <div>
      <h2 className="font-bold text-red-500">
        Review {reviewId} not found for product {productId}
      </h2>
    </div>
  );
}
