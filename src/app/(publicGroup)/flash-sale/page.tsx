import Counter from "@/components/FlashSale/Counter";
import Container from "@/components/shared/Container";
import Card from "@/components/shared/Product/Card";
import { TProduct } from "@/types/product";

const FlashSale = async () => {
  const res = await fetch(
    "https://cute-laugh-backend.vercel.app/api/flash-sale",
    {
      cache: "no-store",
    }
  );
  const { data: products } = await res.json();
  return (
    <Container className="py-12">
      <div className="mb-12 ">
        <h1 className="text-4xl font-bold">Flash-sale</h1>
        <p className="mt-2 mb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad debitis
          quas reprehenderit voluptas quibusdam eos corrupti temporibus sint
          deserunt non.
        </p>
        <Counter />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-10">
        {products?.map((product: TProduct) => (
          <Card key={product._id} product={product} sales={true} />
        ))}
      </div>
    </Container>
  );
};

export default FlashSale;
