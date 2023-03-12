import React from "react";
import TitleHome from "../titleHome/TitleHome";
import CardVoucher from "../cardVoucher/CardVoucher";

// image
import offer1 from "../../assets/image/offer-1.jpg";
import offer2 from "../../assets/image/offer-2.jpg";
import offer3 from "../../assets/image/offer-3.jpg";

const voucher = [
  {
    img: offer1,
    title: "Ưu đãi đặc biệt 24 giờ",
  },
  {
    img: offer2,
    title: "Ưu đãi mùa lễ hội",
  },
  {
    img: offer3,
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
