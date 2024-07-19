import Image from "next/image";
import { toast } from "react-hot-toast";
import { ShoppingCart, X } from "lucide-react";

import { Product } from "@/types";
import IconButton from "@/app/components/ui/icon-button";
import Currency from "@/app/components/ui/currency";
import useWishlist from "@/hooks/use-Wishlist"; // Wishliste bağlantı için kullanacağımız yeni bir kancayı içe aktar
import Button from "@/app/components/ui/button";
import useCart from "@/hooks/use-cart"; // Sepete ürün eklemek için kullanacağımız yeni bir kancayı içe aktar

interface WishlistItemProps {
  data: Product;
}

const WishlistItem: React.FC<WishlistItemProps> = ({
  data
}) => {
  
  const wishlist = useWishlist(); // Wishliste erişmek için kullanılan kancayı al
  const cart = useCart(); // Sepete erişmek için kullanılan kancayı al

  const onRemove = () => {
    wishlist.removeItem(data.id); // Ürünü wish list'ten kaldırmak için kullanılan fonksiyonu çağır
  };
  
  const onAddToCart = () => {
    cart.addItem(data); // Ürünü sepete eklemek için kullanılan fonksiyonu çağır
    toast.success(`${data.name} added to cart.`); // Bildirim göster
  };

  return (
    <li className="flex py-6 border-b">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image
          fill
          src={data.images[0].url}
          alt=""
          className="object-cover object-center"
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute z-10 right-0 top-0">
          <IconButton onClick={onRemove} icon={<X size={15} />} />
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p className=" text-lg font-semibold text-black">
              {data.name}
            </p>
          </div>

          <div className="mt-1 flex text-sm">
            <p className="text-gray-500">{data.color.name}</p>
            <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">{data.size.name}</p>
          </div>
          <Currency value={data.price} />
          <div className="mt-10 flex items-center gap-x-3">
            <Button onClick={onAddToCart} className="flex items-center gap-x-2">
              Add To Cart
              <ShoppingCart/>
            </Button>
          </div>
        </div>
      </div>
    </li>
  );
}
 
export default WishlistItem;
