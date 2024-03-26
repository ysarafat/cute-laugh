import Container from "@/components/shared/Container";
import Card from "@/components/shared/Product/Card";
import { TProduct } from "@/types/product";

const Products = async ({
  searchParams,
}: {
  searchParams: { category: string };
}) => {
  console.log(searchParams);
  const res = await fetch(
    `https://cute-laugh-backend.vercel.app/api/products?category=${searchParams?.category}`,
    {
      cache: "no-store",
    }
  );
  const { data: products } = await res.json();
  return (
    <Container className="my-12">
      <div className="mb-12 ">
        <h1 className="text-4xl font-bold">All Products</h1>
        <p className="mt-2 mb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad debitis
          quas reprehenderit voluptas quibusdam eos corrupti temporibus sint
          deserunt non.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-10">
        {products?.map((product: TProduct) => (
          <Card key={product._id} product={product} sales={true} />
        ))}
      </div>
    </Container>
  );
};

export default Products;
