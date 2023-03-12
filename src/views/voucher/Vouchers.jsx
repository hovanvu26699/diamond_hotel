import React from "react";
import BigBanner from "../../components/bigBanner/BigBanner";
import Voucher from "../../components/voucher/Voucher";
// image
import banner from "../../assets/image/banner-offer.jpg";

const data_banner = {
  img: banner,
  title: "ƯU ĐÃI",
};

const Vouchers = () => {
  return (
    <div className="vouch__container">
      <BigBanner data={data_banner} />
      <Voucher />
    </div>
  );
};

export default Vouchers;
