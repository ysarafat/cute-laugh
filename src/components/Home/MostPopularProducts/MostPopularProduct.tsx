import Container from "@/components/shared/Container";
import Card from "@/components/shared/Product/Card";
import { TProduct } from "@/types/product";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const MostPopularProduct = async () => {
  const res = await fetch(
    "https://cute-laugh-backend.vercel.app/api/products",
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const { data: products } = await res.json();
  return (
    <Container className="my-16">
      <div className="flex justify-between items-center">
        <h1 className=" text-2xl md:text-4xl font-bold ">Trending Products</h1>
        <Link href="/products">
          <button className="btn ">
            See All Products <IoIosArrowForward size={20} />
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-10">
        {products?.slice(0, 8).map((product: TProduct) => (
          <Card key={product._id} product={product} />
        ))}
      </div>
    </Container>
  );
};

export default MostPopularProduct;
