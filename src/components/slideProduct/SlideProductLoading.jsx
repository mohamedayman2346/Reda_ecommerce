import React from "react";

export default function SlideProductLoading() {
  return (
    <div>
      <div className="slide-products py-12.5 slide">
        <div className="container">
          <div className="top-slide h-26 mb-5  pt-4 pe-5 pb-5">
            <h2 className="mb-2.5 w-65 h-8.5 rounded skeleton"></h2>
            <p className="h-6 w-85 rounded skeleton"></p>
          </div>

          <div className="products-loading flex gap-5 overflow-x-auto pb-2.5 ">
            <div className="product  overflow-hidden relative w-62.5 bg-white py-6 px-4 border border-border rounded transition duration-300 hover:border-main">
                {/* Product Image */}
                <div className="img-product skeleton relative h-45 px-5  flex items-center justify-center mb-7">
                </div>
               <div className="content skeleton h-7.5 mb-2.5"></div>
               <div className="content skeleton h-7.5 mb-2.5"></div>
                
            </div>
            <div className="product  overflow-hidden relative w-62.5 bg-white py-6 px-4 border border-border rounded transition duration-300 hover:border-main">
                {/* Product Image */}
                <div className="img-product skeleton relative h-45 px-5  flex items-center justify-center mb-7">
                </div>
               <div className="content skeleton h-7.5 mb-2.5"></div>
               <div className="content skeleton h-7.5 mb-2.5"></div>
                
            </div>
            <div className="product  overflow-hidden relative w-62.5 bg-white py-6 px-4 border border-border rounded transition duration-300 hover:border-main">
                {/* Product Image */}
                <div className="img-product skeleton relative h-45 px-5  flex items-center justify-center mb-7">
                </div>
               <div className="content skeleton h-7.5 mb-2.5"></div>
               <div className="content skeleton h-7.5 mb-2.5"></div>
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
