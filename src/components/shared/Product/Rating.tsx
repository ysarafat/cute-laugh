import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
const ProductRating = ({ rating }: { rating: string }) => {
  return (
    <div className="flex items-center gap-x-2">
      <Rating style={{ maxWidth: 120 }} value={Number(rating)} readOnly />
      <span className="text-lg font-semibold">{rating}</span>
    </div>
  );
};

export default ProductRating;
