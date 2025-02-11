export default async function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  const productId = (await params).productId;
  return (
    <div className="text-3xl font-medium m-4">
      <h1>Details about product {productId}</h1>
    </div>
  );
}
