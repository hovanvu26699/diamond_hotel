import React from "react";
import BigSlide from "../../components/bigSlide/BigSlide";
import CardItro from "../../components/cardItro/CardItro";
import Contract from "../../components/contract/Contract";
// image
// slide
import slide1 from "../../assets/image/res-slide-1.jpg";
import slide2 from "../../assets/image/res-slide-2.jpg";
import slide3 from "../../assets/image/res-slide-3.jpg";
// intro section
import imgIntro1 from "../../assets/image/res-intro-1.jpg";
import imgIntro2 from "../../assets/image/res-intro-2.jpg";
import imgIntro3 from "../../assets/image/res-intro-3.jpg";
import imgIntro4 from "../../assets/image/res-intro-4.jpg";
// menu section
import imgMenu1 from "../../assets/image/menu-1.jpg";
import imgMenu2 from "../../assets/image/menu-2.jpg";
import imgMenu3 from "../../assets/image/menu-3.jpg";
import imgMenu4 from "../../assets/image/menu-4.jpg";

const data_slide = [
  {
    caption: "nhà hàng",
    img: slide1,
  },
  {
    img: slide2,
  },
  {
    img: slide3,
  },
];
const data_intro = [
  {
    img: imgIntro1,
    type: "Dining Room      Amber & Topaz",
    num: "Sức chứa: 14 Khách",
  },
  {
    img: imgIntro2,
    type: "Maquise Lounge - VIP Lounge",
    num: "Sức chứa: 72 khách",
  },
  {
    img: imgIntro3,
    type: "Nhà hàng ADAMAS",
    num: "Sức chứa: 138 khách",
  },
  {
    img: imgIntro4,
    type: "Nhà hàng EMERALD",
    num: "Sức chứa: 180 khách",
  },
];
const data__menu = [
  {
    img: imgMenu1,
    type: "Bữa ăn sáng",
  },
  {
    img: imgMenu2,
    type: "cafe",
  },
  {
    img: imgMenu3,
    type: "Bữa tối",
  },
  {
    img: imgMenu4,
    type: "Phòng tiệc: Tiệc cưới, tiệc sinh nhật...",
  },
];

const Restaurant = () => {
  return (
    <div className="restaurant">
      <BigSlide data={data_slide} />
      <div className="restaurant__introduce" id="resIntro">
        <div className="wrapper">
          <h2>Giới thiệu</h2>
          <div className="introduce__content">
            <p>
              Khách sạn Diamond Stars Bến Tre tự hào là khách sạn 5 sao đầu tiên
              tại Thành phố Bến Tre. Đẳng cấp và sang trọng là tiêu chí hàng đầu
              chúng tôi hướng tới với nhiều nhà hàng: Nhà hàng Adamas, Nhà hàng
              Emerald, Phòng ăn riêng (Topaz & Amber), Maquise lounge…
            </p>
            <p>
              Với kinh nghiệm dày dặn, đầu bếp của chúng tôi tự tin mang đến cho
              thực khách những món ăn theo phong cách cổ điển hoặc đương đại của
              địa phương và thế giới.
            </p>
            <p>Nguồn nguyên liệu tự nhiên tại địa phương luôn tươi ngon.</p>
            <p>
              Chỉ cần chọn món mà bạn yêu thích, phần còn lại là của chúng tôi.
            </p>
          </div>
          <div className="introduce__album">
            {data_intro.map((item) => {
              return <CardItro data={item} />;
            })}
          </div>
        </div>
      </div>
      <div className="restaurant__menu" id="resMenu">
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

export default Restaurant;
