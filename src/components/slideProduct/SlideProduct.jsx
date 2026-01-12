import React, { useEffect, useRef, useState } from "react";
import Product from "./Product";
import "./slideProduct.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";

export default function SlideProduct({ title, data }) {

// to get number of product in the row
  const [slidesPerView, setSlidePerView] = useState(
    innerWidth > 1300
      ? 5
      : innerWidth > 900
      ? 4
      : innerWidth > 800
      ? 3
      : innerWidth > 600
      ? 2
      : 1
  );
  window.addEventListener("resize", function () {
    let numberOfProduct =
      innerWidth > 1300
        ? 5
        : innerWidth > 900
        ? 4
        : innerWidth > 800
        ? 3
        : innerWidth > 600
        ? 2
        : 1;
    setSlidePerView(numberOfProduct);
  });

  return (
    <div className="slide-products py-12.5 slide">
      <div className="container">
        <div className="top-slide  capitalize relative mb-5 border-b border-border pt-4 pe-5 pb-5">
          <h2 className="text-main! text-3xl mb-2.5">{title}</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque,
            fuga!
          </p>
        </div>

        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={30}
          pagination={false}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {data?.map((product) => (
            <SwiperSlide>
              <Product item={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
