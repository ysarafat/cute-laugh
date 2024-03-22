import Container from "@/components/shared/Container";
import HeroProductCard from "@/components/shared/Product/HeroProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TProduct } from "@/types/product";

const TopProduct = async () => {
  const res = await fetch("http://localhost:5000/api/flash-sale");
  const { data: products } = await res.json();
  return (
    <Container className="mb-28">
      <Carousel className="mx-auto">
        <CarouselContent>
          {products?.map((product: TProduct) => (
            <CarouselItem
              key={product?._id}
              className="basis-1/1 md:basis-1/3 lg:basis-1/5 w-[244px]"
            >
              <HeroProductCard
                product={product}
                key={product._id}
              ></HeroProductCard>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden lg:block">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </Container>
  );
};

export default TopProduct;
