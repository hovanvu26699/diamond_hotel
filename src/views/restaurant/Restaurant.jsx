import React from "react";
import BigSlide from "../../components/bigSlide/BigSlide";
import CardItro from "../../components/cardItro/CardItro";
import Contract from "../../components/contract/Contract";
import MenuFlow from "../../components/menuFlow/MenuFlow";

const data_slide = [
  {
    caption: "nhà hàng",
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
const data_idFlow = [
  { id: "#resIntro", title: "Giới thiệu" },
  { id: "#resMenu", title: "Thực đơn" },
  { id: "#contract", title: "Liên hệ" },
];

const Restaurant = () => {
  return (
    <div className="restaurant">
      <BigSlide data={data_slide} />
      <MenuFlow data={data_idFlow} />
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
