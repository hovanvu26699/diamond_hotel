import React from "react";

import TitleHome from "../titleHome/TitleHome";
import CardService from "../cardService/CardService";
// swiper slide
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
// image
import servSpa from "../../assets/image/serv-4.jpg";
import servPool from "../../assets/image/serv-1.jpg";
import servGym from "../../assets/image/serv-3.jpg";
import servTour from "../../assets/image/serv-2.jpg";

const service = [
  {
    img: servSpa,
    title: "spa & massage",
  },
  {
    img: servPool,
    title: "hồ bơi vô cực",
  },
  {
    img: servGym,
    title: "gym",
  },
  {
    img: servTour,
    title: "tour",
  },
];
const Service = () => {
  return (
    <div className="service__container">
      <TitleHome
        title="dịch vụ - tiện ích"
        caption="Mang đến một trải nghiệm trọn vẹn nhất cho thực khách!"
      />

      <Swiper
        slidesPerView={2}
        spaceBetween={70}
        loop={true}
        centeredSlides={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {service.map(function (item, idx) {
          return (
            <SwiperSlide>
              <CardService data={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="slide__btn">
        <button className="btn-no-bg">XEM TẤT CẢ</button>
      </div>
    </div>
  );
};

export default Service;
