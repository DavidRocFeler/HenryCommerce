import { HeartIcon } from "lucide-react";

const WishlistButton = () => (
  <button className="flex flex-row-reverse">
    Add to Wishlist
    <HeartIcon className="h-6 w-6 text-red-500 mr-[1rem] " />
  </button>
);

export default WishlistButton;
