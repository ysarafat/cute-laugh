import Container from "@/components/shared/Container";
import Image from "next/image";

const page = () => {
  return (
    <Container className="my-12">
      <div className="flex flex-col md:flex-row gap-8  ">
        <div>
          <h1 className="text-3xl lg:text-4xl">
            Our dream is to deliver high quality baby clothes
          </h1>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eaque
            ut dolorum corrupti omnis! Saepe sunt nam reprehenderit minima eius
            quas necessitatibus repellat quo, officia maiores incidunt culpa
            quam exercitationem omnis tempora nemo voluptate dolorum, neque
            voluptatum magni eaque provident ad vero aperiam. Perferendis
            consequuntur culpa fugiat aperiam dolores alias?
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 mt-5 gap-4">
            <div className="border border-slate-200 rounded-lg bg-yellow-500/5">
              <div className="text-slate-500 p-4">
                <span className="block text-4xl font-bold text-black">
                  256+
                </span>
                Outlet
              </div>
            </div>
            <div className="border border-slate-200 rounded-lg bg-blue-500/5">
              <div className="text-slate-500 p-4">
                <span className="block text-4xl font-bold text-black">
                  5000
                </span>
                Happy Customer
              </div>
            </div>
            <div className="border border-slate-200 rounded-lg bg-green-500/5">
              <div className="text-slate-500 p-4">
                <span className="block text-4xl font-bold text-black">
                  6814+
                </span>
                Positive Reviews
              </div>
            </div>
          </div>
        </div>
        <Image
          src={
            "https://img.freepik.com/free-photo/front-view-cute-little-baby-accesories_23-2148415531.jpg?t=st=1711485564~exp=1711489164~hmac=8695e4a8c5d957f1035041f977e268ede6501f04aed666d2b5e7b3ffa90ae496&w=1380"
          }
          alt="about"
          width={500}
          height={500}
          className="rounded-md w-full"
        />
      </div>
    </Container>
  );
};

export default page;
