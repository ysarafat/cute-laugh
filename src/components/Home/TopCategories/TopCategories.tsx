import Container from "@/components/shared/Container";
import Image from "next/image";

const TopCategories = async () => {
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
    <Container>
      <div className="text-center my-10">
        <h1 className="text-4xl font-bold">Top Categories</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque,
          corrupti.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {categories?.map((category: any) => (
          <div
            key={category._id}
            className="border border-blue-100 w-full  rounded-md"
          >
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
        ))}
      </div>
    </Container>
  );
};

export default TopCategories;
