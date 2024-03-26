import { TProduct } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import { ImPower } from "react-icons/im";
import ProductRating from "./Rating";
type TCard = {
  product: TProduct;
  sales?: boolean;
};
const Card = ({ product, sales }: TCard) => {
  return (
    <div
      key={product?._id}
      className="bg-slate-50 p-4 rounded-lg border border-blue-300 relative"
    >
      <div>
        <Image
          src={product.image}
          alt={product.title}
          width={500}
          height={500}
          className="rounded-lg w-full h-[250px]"
        />
      </div>
      {sales && (
        <div className="bg-black  text-white text-center py-1 rounded-md absolute top-2 right-2">
          <div className="flex items-center gap-x-2 text-center px-4">
            <ImPower className="text-yellow-400" />
            <span>Flash Sales</span>
          </div>
        </div>
      )}
      <div>
        <h3 className="truncate text-center text-xl font-semibold mt-2">
          {product.title}
        </h3>
        <div className="flex flex-col items-center justify-between mt-5">
          <span className="text-lg font-bold ">{product.category}</span>
          <ProductRating rating={product.ratings} />
        </div>
        <div className="flex items-center justify-between mt-5">
          <span className="text-2xl font-bold text-blue-500 ">
            ${product.price}
          </span>
          <Link href={`/products/${product._id}`}>
            <button className="btn">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
