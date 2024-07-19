"use client"
import { Product } from "@/types";

import Image from "next/image";
import IconButton from "./icon-button";
import { Expand, ShoppingCart, Heart } from "lucide-react"; // Kalp ikonu için
import Currency from "./currency";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";
import useWishlist from "@/hooks/use-Wishlist"; // Wishlist hook'unu içe aktar

interface ProductCardProps {
    data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
    const cart = useCart();
    const previewModal = usePreviewModal();

    const router = useRouter();
    const { items: wishlistItems, addItem: addToWishlist } = useWishlist(); // Wishlist hook'unu kullan

    const handleClick = () => {
        router.push(`/product/${data?.id}`);
    }

    const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();
        previewModal.onOpen(data);
    }

    const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();
        cart.addItem(data);
    }

    const onAddToWishlist: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();
        addToWishlist(data); // Ürünü Wishlist'e ekle
    }

    return (
        <div onClick={handleClick} className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
            {/*images, actions*/}
            <div className="aspect-square rounded-xl bg-gray-100 relative">
                <Image
                    src={data?.images?.[0]?.url}
                    fill
                    alt="Image"
                    className="aspect-square object-cover rounded-md"
                />
                <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
                    <div className="flex gap-x-6 justify-center">
                        <IconButton
                            onClick={onPreview}
                            icon={<Expand size={20} className="text-gray-600" />}
                        />
                        <IconButton
                            onClick={onAddToCart}
                            icon={<ShoppingCart size={20} className="text-gray-600" />}
                        />
                       <IconButton
                            onClick={onAddToWishlist}
                            icon={<Heart size={20}
                            className="text-gray-600 hover:text-red-500 hover:fill-red-600 transition-colors"/>}
                        /> 
                    </div>
                </div>
            </div>
            {/*descr*/}
            <div>
                <p className="font-semibold text-lg">{data.name}</p>
                <p className="text-sm text-gray-500">{data.category?.name}</p>
            </div>
            {/* Price & Review */}
            <div className="flex items-center justify-between">
                <Currency value={data?.price} />
            </div>
        </div>
    );
}

export default ProductCard;
