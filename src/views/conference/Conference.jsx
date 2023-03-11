import React from "react";
import BigSlide from "../../components/bigSlide/BigSlide";
import CardItro from "../../components/cardItro/CardItro";
import Contract from "../../components/contract/Contract";

const data_slide = [
  {
    caption: "hội nghị",
    img: "http://diamondstarbentre.com/vnt_upload/restaurant/11_2020/IMG_20201026_151437.jpg",
  },
  {
    img: "http://diamondstarbentre.com/vnt_upload/restaurant/11_2020/IMG_9484.jpg",
  },
  {
    img: "http://diamondstarbentre.com/vnt_upload/restaurant/11_2020/IMG_0380.jpg",
  },
];
const data_intro = [
  {
    img: "http://diamondstarbentre.com/vnt_upload/restaurant/11_2020/thumbs/(1000x670)__IMG_20201026_151655_1.jpg",
    type: "Dining Room      Amber & Topaz",
    num: "Sức chứa: 14 Khách",
  },
  {
    img: "http://diamondstarbentre.com/vnt_upload/restaurant/11_2020/thumbs/(1000x670)__IMG_0317.jpg",
    type: "Maquise Lounge - VIP Lounge",
    num: "Sức chứa: 72 khách",
  },
  {
    img: "http://diamondstarbentre.com/vnt_upload/restaurant/11_2020/thumbs/(1000x670)__IMG_9500.jpg",
    type: "Nhà hàng ADAMAS",
    num: "Sức chứa: 138 khách",
  },
  {
    img: "http://diamondstarbentre.com/vnt_upload/restaurant/11_2020/thumbs/(1000x670)__IMG_0418.jpg",
    type: "Nhà hàng EMERALD",
    num: "Sức chứa: 180 khách",
  },
];
const data__menu = [
  {
    img: "http://diamondstarbentre.com/vnt_upload/restaurant/07_2020/menu5.jpg",
    type: "Bữa ăn sáng",
  },
  {
    img: "http://diamondstarbentre.com/vnt_upload/restaurant/09_2020/yzvgqruf3umal4wpnrce.jpg",
    type: "cafe",
  },
  {
    img: "http://diamondstarbentre.com/vnt_upload/restaurant/07_2020/menu7.jpg",
    type: "Bữa tối",
  },
  {
    img: "http://diamondstarbentre.com/vnt_upload/restaurant/07_2020/menu8.jpg",
    type: "Phòng tiệc: Tiệc cưới, tiệc sinh nhật...",
  },
];

const Conference = () => {
  return (
    <div className="confer">
      <BigSlide data={data_slide} />
      <div className="restaurant__introduce">
        <div className="wrapper">
          <h2>Giới thiệu</h2>
          <div className="introduce__album">
            {data_intro.map((item) => {
              return <CardItro data={item} />;
            })}
          </div>
        </div>
      </div>
      <div className="restaurant__menu">
        <div className="menu__wrapper">
          <h2>Thực đơn</h2>
          <div className="menu__content">
            {data__menu.map((item) => {
              return <CardItro data={item} />;
            })}
          </div>
        </div>
      </div>
      <Contract />
    </div>
  );
};

export default Conference;
