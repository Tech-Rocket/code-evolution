import { Metadata } from "next";

type Props = {
  params: Promise<{ productId: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const id = (await params).productId;
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Iphone ${id}`);
    });
  });
  return {
    title: `Product ${title}`,
  };
};
export default async function page({ params }: Props) {
  const productId = (await params).productId;
  return (
    <div className="text-xl font-semibold">
      <h1>Product {productId} Details</h1>
    </div>
  );
}
