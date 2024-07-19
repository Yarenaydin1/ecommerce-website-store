"use client"
import { Heart, ShoppingBag } from "lucide-react"; // Kullanıcı ikonları için
import Button from "./ui/button";
import { useEffect, useState } from "react";
import useCart from "@/hooks/use-cart";
import useWishlist from "@/hooks/use-Wishlist";
import { useRouter } from "next/navigation";
 

const NavbarActions = () => {
    const [isMounted, setIsMounted] = useState(false);
    const router = useRouter();
    const cart = useCart();
    const { items: wishlistItems } = useWishlist();
  

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <div className="ml-auto flex item-center gap-x-4 relative">
            <Button onClick={() => router.push("/wishlist")} className="flex items-center rounded-full bg-black px-4 py-2">
                <Heart size={20} color="white" />
                <span className="ml-2 text-sm font-medium text-white">{wishlistItems.length}</span>
            </Button> 

            <Button onClick={() => router.push("/cart")} className="flex items-center rounded-full bg-black px-4 py-2">
                <ShoppingBag size={20} color="white" />
                <span className="ml-2 text-sm font-medium text-white">{cart.items.length}</span>
            </Button>

           
          
           
            
        </div>
    );
}

export default NavbarActions;
