// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
// import the image
import hero1 from "../assets/img/banner_Hero1.jpg"
import hero2 from "../assets/img/banner_Hero2.jpg"
import hero3 from "../assets/img/banner_Hero3.jpg"

export default function Heroslider() {
  return (
    <>
      <div className="hero relative pt-40 mb-20">
        <div className="container">
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={true}
            loop={true}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="content">
                <h4>Introdacting the new</h4>
                <h3>Microsoft xbox</h3>
                <p>windows xp/10/7/8, ps4, tv Box</p>
                <Link to="/" className="btn">
                  Shop Now
                </Link>
              </div>
              <img
                src={hero3}
                alt="Slider hero_2"
              />
            </SwiperSlide>
            <SwiperSlide>
              <div className="content">
                <h4>Introdacting the new</h4>
                <h3>Microsoft xbox</h3>
                <p>windows xp/10/7/8, ps4, tv Box</p>
                <Link to="/" className="btn">
                  Shop Now
                </Link>
              </div>
              <img src={hero2} alt="Slider hero_1" />
            </SwiperSlide>
            <SwiperSlide>
              <div className="content">
                <h4>Introdacting the new</h4>
                <h3>Microsoft xbox</h3>
                <p>windows xp/10/7/8, ps4, tv Box</p>
                <Link to="/" className="btn">
                  Shop Now
                </Link>
              </div>
              <img src={hero1} alt="Slider hero_3" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
