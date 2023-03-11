import React from "react";
import BigBanner from "../../components/bigBanner/BigBanner";
import CardService from "../../components/cardService/CardService";
const data_banner = {
  img: "http://diamondstarbentre.com/vnt_upload/service/07_2020/slide.jpg",
  title: "DỊCH VỤ KHÁC",
};

const data_ser = [
  {
    img: "http://diamondstarbentre.com/vnt_upload/service/08_2020/ho_boi_vo_cuc.jpg",
    title: "hồ bơi vô cực",
  },
  {
    img: "http://diamondstarbentre.com/vnt_upload/service/05_2021/viber_image_2021_05_28_14_20_40.jpg",
    title: "tour",
  },
  {
    img: "http://diamondstarbentre.com/vnt_upload/service/09_2020/000.jpg",
    title: "gym",
  },
  {
    img: "http://diamondstarbentre.com/vnt_upload/service/09_2020/Spa.jpg",
    title: "spa & massage",
  },
];
const Services = () => {
  return (
    <div className="serv__container">
      <BigBanner data={data_banner} />
      <div className="serv__list">
        {data_ser.map((item) => {
          return <CardService data={item} />;
        })}
      </div>
    </div>
  );
};

export default Services;
