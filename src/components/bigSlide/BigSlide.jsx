import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";

const BigSlide = (props) => {
  const data = props.data;
  return (
    <div className="BigSlide">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation, Pagination]}
        className="mySwiper"
      >
        {data.map((item) => {
          return (
            <SwiperSlide>
              <div className="box__img">
                <img src={item.img} alt="restaurant" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="title">
        <h2>{data[0].caption}</h2>
      </div>
    </div>
  );
};

export default BigSlide;
