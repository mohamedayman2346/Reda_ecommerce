import React, { useContext, useState } from "react";
import { CartContext } from "../../components/context/CartContext";
import SlideProductLoading from "../../components/slideProduct/SlideProductLoading";
import PageTransition from "../../components/PageTransition";
import Product from "../../components/slideProduct/Product";

export default function Favorits() {
  const { favorites } = useContext(CartContext);

  return (
    <PageTransition key={Favorits}>
      (
      <div className="pt-30 pb-10 category-products  ">
        <div className="container">
          <div className="top-slide  capitalize relative mb-5 border-b border-border pt-4 pe-5 pb-5">
            <h2 className="text-main! text-3xl mb-2.5">Your Favorites</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque,
              fuga!
            </p>
          </div>
          <div className="slide-products flex items-center flex-wrap gap-5 justify-center md:justify-start">
            {favorites.length === 0 ? (
              <div className="h-screen w-screen flex items-center justify-center">
                <p>You Don't have any Favorites Product</p>
              </div>
            ) : (
              favorites?.map((product, i) => <Product item={product} key={i} />)
            )}
          </div>
        </div>
      </div>
      )
    </PageTransition>
  );
}
