import React from "react";
import TitleHome from "../titleHome/TitleHome";
import CardVoucher from "../cardVoucher/CardVoucher";

const voucher = [
  {
    img: "http://diamondstarbentre.com/vnt_upload/service/07_2020/uudai1.jpg",
    title: "Ưu đãi đặc biệt 24 giờ",
  },
  {
    img: "http://diamondstarbentre.com/vnt_upload/service/07_2020/uudai2.jpg",
    title: "Ưu đãi mùa lễ hội",
  },
  {
    img: "http://diamondstarbentre.com/vnt_upload/service/07_2020/uudai3.jpg",
    title: "Ưu đãi cho đám cưới và sự kiện",
  },
];
const Voucher = () => {
  return (
    <div className="voucher__container">
      <TitleHome
        title="ưu đãi đặc biệt"
        caption="Tận hưởng ưu đãi khách sạn siêu khủng với Diamond Stars Bến Tre, sẵn sàng cho kỳ nghỉ hoàn hảo!"
      />
      <div className="voucher__list">
        {voucher.map((item, index) => {
          return <CardVoucher data={item} />;
        })}
      </div>
    </div>
  );
};

export default Voucher;
