"use client";
import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();
  const handleClick = () => {
    console.log("button clicked..");
    router.push("/");
  };
  return (
    <>
      <h1>Order Product</h1>

      <button
        onClick={handleClick}
        className="bg-black text-white py-2 px-6 rounded-md"
      >
        Place Order
      </button>
    </>
  );
}
