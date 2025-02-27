import { notFound, redirect } from "next/navigation";

type Props = {
  params: Promise<{ productId: string; reviewId: string }>;
};

export default async function ReviewId({ params }: Props) {
  const { productId, reviewId } = await params;

  if (parseInt(reviewId) > 1000) {
    // notFound();
    redirect("/products");
  }
  return (
    <div className="text-slate-800 text-xl font-semibold m-4">
      <h1>
        Review {reviewId} for product {productId}
      </h1>
    </div>
  );
}
