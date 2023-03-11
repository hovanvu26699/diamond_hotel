import React from "react";
import BigBanner from "../../components/bigBanner/BigBanner";
import BigCardRoom from "../../components/bigCardRoom/BigCardRoom";
import CardRoom from "../../components/cardRoom/CardRoom";

const data_banner = {
  img: "http://diamondstarbentre.com/vnt_upload/weblink/Untitled_1.jpg",
  title: "PHÒNG NGHỈ",
};

const data_room = [
  {
    img: "http://diamondstarbentre.com/vnt_upload/product/03_2021/P2.jpg",
    type: "presidential suite",
    meter: "180 m2",
    people: "2 Người Lớn",
    bed: "Giường Đôi",
  },
  {
    img: "http://diamondstarbentre.com/vnt_upload/product/07_2020/SUPERIOR.jpg",
    type: "cozy superior",
    meter: "35 - 36 m2",
    people: "2 Người Lớn",
    bed: "Giường Đôi/Giường Đơn",
  },
  {
    img: "http://diamondstarbentre.com/vnt_upload/product/07_2020/phong_deluxe.jpg",
    type: "signature deluxe",
    meter: "42 - 47 m2",
    people: "2 Người Lớn",
    bed: "Giường Đôi/Giường Đơn",
  },
  {
    img: "http://diamondstarbentre.com/vnt_upload/product/07_2020/Suite.jpg",
    type: "prime suite",
    meter: "65 m2",
    people: "2 Người Lớn",
    bed: "2 Giường Đơn",
  },
  {
    img: "http://diamondstarbentre.com/vnt_upload/product/03_2021/IMG_20201026_104000.jpg",
    type: "elite suite",
    meter: "90 - 94 m2",
    people: "2 Người Lớn",
    bed: "Giường Đôi",
  },
];

const Room = () => {
  return (
    <div className="room__container">
      <BigBanner data={data_banner} />
      <div className="room__list">
        {data_room.map((item) => {
          return <BigCardRoom data={item} />;
        })}
      </div>
    </div>
  );
};

export default Room;
