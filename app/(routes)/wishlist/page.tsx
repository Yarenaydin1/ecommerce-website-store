"use client";

import { useEffect, useState } from 'react';

import useWishlist from '@/hooks/use-Wishlist'; // Wishlist hook
import Container from '@/app/components/ui/container';
import WishlistItem from './components/wishlist-item'; // Wishlist item component

const WishListPage = () => {
  const wishlist = useWishlist(); // Wishlist hook

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-black">Wishlist</h1>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-7">
              {wishlist.items.length === 0 && <p className="text-neutral-500">No items added to wishlist.</p>}
              <ul>
                {wishlist.items.map((item) => (
                  <WishlistItem key={item.id} data={item} />
                ))}
              </ul>
            </div>
            {/* Additional summary or actions related to the wishlist can be added here */}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WishListPage;
