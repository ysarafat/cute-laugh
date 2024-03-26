import { TProduct } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
type TCard = {
  product: TProduct;
  sales?: boolean;
};
const HeroProductCard = ({ product }: TCard) => {
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
          className="rounded-lg w-full h-[150px]"
        />
      </div>

      <div>
        <h3 className="truncate text-center text-lg font-semibold mt-2">
          {product.title}
        </h3>
        <div className="flex items-center justify-between mt-3">
          <span className="text-xl font-bold text-blue-500 ">
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

export default HeroProductCard;
