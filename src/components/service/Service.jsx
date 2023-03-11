import React from "react";

import TitleHome from "../titleHome/TitleHome";
import CardService from "../cardService/CardService";

import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";

const service = [
  {
    img: "http://diamondstarbentre.com/vnt_upload/service/09_2020/Spa.jpg",
    title: "spa & massage",
  },
  {
    img: "http://diamondstarbentre.com/vnt_upload/service/08_2020/ho_boi_vo_cuc.jpg",
    title: "hồ bơi vô cực",
  },
  {
    img: "http://diamondstarbentre.com/vnt_upload/service/09_2020/000.jpg",
    title: "gym",
  },
  {
    img: "http://diamondstarbentre.com/vnt_upload/service/05_2021/viber_image_2021_05_28_14_20_40.jpg",
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
