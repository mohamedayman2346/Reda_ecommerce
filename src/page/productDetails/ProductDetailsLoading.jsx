import React from "react";

export default function ProductDetailsLoading() {
  return (
    <div>
      <div className="product-details py-12.5 px-0">
        {/* Product Details  */}
        <div className="container grid grid-cols-1  md:grid-cols-2 gap-10 items-center">
          {/* images slider */}
          <div className="imgs-item skeleton h-120  w-[40%] m-auto">
            <div className="big-image">

            </div>

            <div className="sm-image flex justify-between items-center cursor-pointer">

            </div>
          
          </div>

          {/* product info */}
          <div className="details-item pt-25 h-150 w-[58%] m-auto">
            <h5 className="mb-8 h-7 rounded skeleton "></h5>
            <h5 className="mb-8 h-7 rounded skeleton "></h5>
            <h5 className="mb-8 h-7 rounded skeleton "></h5>
            <h5 className="mb-8 h-7 rounded skeleton "></h5>
            <h5 className="mb-8 h-7 rounded skeleton "></h5>
            <h5 className="mb-8 h-7 rounded skeleton "></h5>
          </div>
        </div>
      </div>
    </div>
  );
}
