import Container from "@/components/shared/Container";
import Card from "@/components/shared/Product/Card";
import { TProduct } from "@/types/product";
import { IoIosArrowForward } from "react-icons/io";

const FlashSale = async () => {
  const res = await fetch("http://localhost:5000/api/flash-sale", {
    next: {
      revalidate: 30,
    },
  });
  const { data: products } = await res.json();

  return (
    <Container className="mb-16">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold ">Flash Sale</h1>
        <button className="btn">
          View All <IoIosArrowForward size={20} />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-10">
        {products?.slice(0, 4).map((product: TProduct) => (
          <Card key={product._id} product={product} sales={true} />
        ))}
      </div>
    </Container>
  );
};

export default FlashSale;
