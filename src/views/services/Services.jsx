import React from "react";
import BigBanner from "../../components/bigBanner/BigBanner";
import CardService from "../../components/cardService/CardService";
// image
import banner from "../../assets/image/banner-serv.jpg";
import servSpa from "../../assets/image/serv-4.jpg";
import servPool from "../../assets/image/serv-1.jpg";
import servGym from "../../assets/image/serv-3.jpg";
import servTour from "../../assets/image/serv-2.jpg";

const data_banner = {
  img: banner,
  title: "DỊCH VỤ KHÁC",
};

const data_ser = [
  {
    img: servSpa,
    title: "spa & massage",
  },
  {
    img: servPool,
    title: "hồ bơi vô cực",
  },
  {
    img: servGym,
    title: "gym",
  },
  {
    img: servTour,
    title: "tour",
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
