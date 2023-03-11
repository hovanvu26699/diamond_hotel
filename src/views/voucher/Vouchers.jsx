import React from "react";
import BigBanner from "../../components/bigBanner/BigBanner";
import CardVoucher from "../../components/cardVoucher/CardVoucher";
const data_banner = {
  img: "http://diamondstarbentre.com/vnt_upload/service/07_2020/slide_1.jpg",
  title: "ƯU ĐÃI",
};
const data_voucher = [
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

const Vouchers = () => {
  return (
    <div className="vouch__container">
      <BigBanner data={data_banner} />
      <div className="voucher__list">
        {data_voucher.map((item, index) => {
          return <CardVoucher data={item} />;
        })}
      </div>
    </div>
  );
};

export default Vouchers;
