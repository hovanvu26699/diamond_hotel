import React from "react";
import TitleHome from "../titleHome/TitleHome";
import CardRoom from "../cardRoom/CardRoom";

import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
const room = [
  {
    img: "http://diamondstarbentre.com/vnt_upload/product/03_2021/P2.jpg",
    type: "presidential suite",
    meter: "180 m2",
    people: "2 Người Lớn",
    bed: "Giường Đôi",
  },
  {
    img: "http://diamondstarbentre.com/vnt_upload/product/07_2020/SUPERIOR.jpg",
    type: "cozy superior",
    meter: "35 - 36 m2",
    people: "2 Người Lớn",
    bed: "Giường Đôi/Giường Đơn",
  },
  {
    img: "http://diamondstarbentre.com/vnt_upload/product/07_2020/phong_deluxe.jpg",
    type: "signature deluxe",
    meter: "42 - 47 m2",
    people: "2 Người Lớn",
    bed: "Giường Đôi/Giường Đơn",
  },
  {
    img: "http://diamondstarbentre.com/vnt_upload/product/07_2020/Suite.jpg",
    type: "prime suite",
    meter: "65 m2",
    people: "2 Người Lớn",
    bed: "2 Giường Đơn",
  },
  {
    img: "http://diamondstarbentre.com/vnt_upload/product/03_2021/IMG_20201026_104000.jpg",
    type: "elite suite",
    meter: "90 - 94 m2",
    people: "2 Người Lớn",
    bed: "Giường Đôi",
  },
];
const RoomSlide = () => {
  return (
    <div className="slide">
      <TitleHome
        title="phòng khách sạn"
        caption="Hãy tận hưởng kỹ nghỉ thoải mái tại những căn phòng sang trọng của chúng tôi!"
      />

      <Swiper
        slidesPerView={3}
        spaceBetween={90}
        loop={true}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {room.map(function (item, idx) {
          return (
            <SwiperSlide>
              <CardRoom data={item} />
            </SwiperSlide>
          );
        })}
        ;
      </Swiper>
      <div className="slide__btn">
        <button className="btn-no-bg">XEM TẤT CẢ</button>
      </div>
    </div>
  );
};

export default RoomSlide;
