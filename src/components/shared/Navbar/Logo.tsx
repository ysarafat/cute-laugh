import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <h1 className="text-3xl font-bold">
        Cute <span className="text-blue-500"> Laugh</span>
      </h1>
    </Link>
  );
};

export default Logo;
