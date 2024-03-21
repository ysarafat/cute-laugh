import Link from "next/link";

const NotFound = () => {
  return (
    <div className="h-screen flex items-center justify-center px-4 ">
      <div className="lg:w-1/2 border  border-rose-200 shadow text-center p-8 rounded-lg bg-rose-500/5">
        <h1 className="text-7xl font-extrabold bg-gradient-to-r from-rose-500 to-purple-900 bg-clip-text text-transparent ">
          Oops!
        </h1>
        <h5 className="my-2 font-medium text-lg ">404 - PAGE NOT FOUND</h5>
        <p className="mb-8">
          The page you are looking form might have been removed had its name
          change or is temporarily unavailable
        </p>
        <Link
          href="/"
          className="uppercase bg-blue-500 text-white px-5 py-3 text-base font-medium rounded-md hover:bg-blue-600 transition-all"
        >
          Go To HomePage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
