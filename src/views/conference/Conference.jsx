import React from "react";
import BigSlide from "../../components/bigSlide/BigSlide";
import CardItro from "../../components/cardItro/CardItro";
import Contract from "../../components/contract/Contract";
// image
import slide1 from "../../assets/image/confer-slide-1.jpg";
import slide2 from "../../assets/image/confer-slide-2.jpg";
import slide3 from "../../assets/image/confer-slide-3.jpg";
import slide4 from "../../assets/image/confer-slide-4.jpg";
// intro image
import imgIntro1 from "../../assets/image/confer-intro-1.jpg";
import imgIntro2 from "../../assets/image/confer-intro-2.jpg";

const data_slide = [
  {
    caption: "hội nghị",
    img: slide1,
  },
  {
    img: slide2,
  },
  {
    img: slide3,
  },
  {
    img: slide4,
  },
];
const data_intro = [
  {
    img: imgIntro1,
    type: "princess ballroom",
    num: "Sức chứa: 600 Khách",
  },
  {
    img: imgIntro2,
    type: "blue oval 1 và 2",
    num: "Sức chứa: 600 khách",
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
