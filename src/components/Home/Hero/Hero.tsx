import image from "@/../public/hero-bg.webp";
import Image from "next/image";
import Link from "next/link";
import Container from "../../shared/Container";
import TopProduct from "./TopProduct";
const Hero = () => {
  return (
    <>
      <Container className="py-10 flex md:flex-row-reverse flex-col  justify-between items-center gap-4">
        <div className="text-end">
          <h1 className="font-bold text-5xl ">
            Crafting Comfort, Redefining Spaces.
          </h1>
          <p className="mt-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. A illo
            corrupti eveniet. Qui, laborum dolores. Repellat cumque consequuntur
            laudantium reiciendis?
          </p>
          <div className="mt-6 ">
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-5 rounded-md border border-blue-500 transition-all">
              Get Offer
            </button>
            <Link href="/flash-sale">
              <button className="bg-white hover:bg-blue-50 text-blue-500 py-2 px-5 rounded-md border border-blue-500 transition-all ml-4">
                Flash Sale
              </button>
            </Link>
          </div>
        </div>
        <div>
          <Image
            src={image}
            alt="banner"
            placeholder="blur"
            loading="lazy"
            className="rounded-lg"
          />
        </div>
      </Container>
      <TopProduct />
    </>
  );
};

export default Hero;
