import image from "@/../public/hero-bg.webp";
import Container from "@/components/shared/Container";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const TopProduct = () => {
  return (
    <Container>
      <Carousel className="mx-auto">
        <CarouselContent>
          {/* {recentEvents?.data?.map((event: TEvent) => (
                <CarouselItem
                  key={event?._id}
                  className="basis-1/1 md:basis-1/3 lg:basis-1/4"
                >
                  <div className="bg-[#F2F2F2] rounded-lg">
                    <img
                      src={event?.image}
                      alt=""
                      className="w-full h-[220px] rounded-t-lg"
                    />
                    <div className="p-4">
                      <p className="">{event?.title}</p>
                      <p className="text-[#475569] text-sm">by {event?.by}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))} */}
          <div>
            <Image src={image} alt="image" />
          </div>
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
