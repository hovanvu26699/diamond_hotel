import React from "react";
import TitleHome from "../titleHome/TitleHome";
import CardRoom from "../cardRoom/CardRoom";
// swiper slide
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
// imgage
import presidentRoom from "../../assets/image/room-president.jpg";
import superiorRoom from "../../assets/image/room-superior.jpg";
import primeRoom from "../../assets/image/room-prime.jpg";
import eliteRoom from "../../assets/image/room-elite.jpg";
import deluxeRoom from "../../assets/image/room-deluxe.jpg";
const room = [
  {
    img: presidentRoom,
    type: "presidential suite",
    meter: "180 m2",
    people: "2 Người Lớn",
    bed: "Giường Đôi",
  },
  {
    img: superiorRoom,
    type: "cozy superior",
    meter: "35 - 36 m2",
    people: "2 Người Lớn",
    bed: "Giường Đôi/Giường Đơn",
  },
  {
    img: deluxeRoom,
    type: "signature deluxe",
    meter: "42 - 47 m2",
    people: "2 Người Lớn",
    bed: "Giường Đôi/Giường Đơn",
  },
  {
    img: primeRoom,
    type: "prime suite",
    meter: "65 m2",
    people: "2 Người Lớn",
    bed: "2 Giường Đơn",
  },
  {
    img: eliteRoom,
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
      </Swiper>
      <div className="slide__btn">
        <button className="btn-no-bg">XEM TẤT CẢ</button>
      </div>
    </div>
  );
};

export default RoomSlide;
