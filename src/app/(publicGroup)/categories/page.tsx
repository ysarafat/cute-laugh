import Container from "@/components/shared/Container";
import Image from "next/image";
import Link from "next/link";

const AllCategories = async () => {
  const res = await fetch(
    "https://cute-laugh-backend.vercel.app/api/categories",
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const { data: categories } = await res.json();

  return (
    <Container className="my-12">
      <div className="">
        <h1 className="text-4xl font-bold">All Categories</h1>
        <p className="mt-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque,
          corrupti.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
        {categories?.map((category: any) => (
          <Link
            href={`/products?category=${category.title} `}
            key={category._id}
          >
            <div className="border border-blue-100 w-full  rounded-md">
              <div className="relative">
                <Image
                  src={category.image}
                  alt={category.title}
                  width={500}
                  height={500}
                  className="w-full rounded-md"
                />
                <div className="absolute bg-white bottom-0 py-2 px-5 border border-blue-300 rounded-b-md  w-full text-center">
                  <h3 className="md:text-lg  uppercase font-semibold">
                    {category.title}
                  </h3>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default AllCategories;
