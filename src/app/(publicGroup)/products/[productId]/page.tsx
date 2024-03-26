import Container from "@/components/shared/Container";
import ProductRating from "@/components/shared/Product/Rating";
import { TProduct } from "@/types/product";
import Image from "next/image";
export const generateStaticParams = async () => {
  const res = await fetch("https://cute-laugh-backend.vercel.app/api/products");
  const { data: products } = await res.json();

  return products?.slice(0, 10).map((product: TProduct) => ({
    productId: product._id,
  }));
};
const page = async ({ params }: { params: { productId: string } }) => {
  const res = await fetch(
    `https://cute-laugh-backend.vercel.app/api/product/${params.productId}`,
    {
      cache: "no-store",
    }
  );

  const { data: product } = await res.json();

  return (
    <Container className="py-12">
      <div className="flex flex-col md:flex-row gap-16">
        <Image
          src={product?.image}
          alt={product?.title}
          width={400}
          height={400}
          className="w-[350px] h-[350px]"
        />
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold">{product.title}</h1>
          <h5 className="text-2xl font-extrabold text-blue-500">
            Price: ${product.price}
          </h5>
          <ProductRating rating={product.ratings} />

          <div>
            <p className="font-bold mb-1">Short Description:</p>
            <p>{product.description.slice(0, 680)}</p>
          </div>
        </div>
      </div>
      <div className="border-t mt-12">
        <div className="mt-6">
          <p className="font-bold mb-2">Description:</p>
          <p>{product.description}</p>
        </div>
      </div>
    </Container>
  );
};

export default page;
