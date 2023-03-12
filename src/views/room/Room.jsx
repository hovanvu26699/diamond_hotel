import React from "react";
import BigBanner from "../../components/bigBanner/BigBanner";
import BigCardRoom from "../../components/bigCardRoom/BigCardRoom";

// image
import banner from "../../assets/image/banner-room.jpg";
import presidentRoom from "../../assets/image/room-president.jpg";
import superiorRoom from "../../assets/image/room-superior.jpg";
import primeRoom from "../../assets/image/room-prime.jpg";
import eliteRoom from "../../assets/image/room-elite.jpg";
import deluxeRoom from "../../assets/image/room-deluxe.jpg";

const data_banner = {
  img: banner,
  title: "PHÒNG NGHỈ",
};

const data_room = [
  {
    img: presidentRoom,
    type: "presidential suite",
    meter: "180 m2",
    people: "2 Người Lớn",
    bed: "Giường Đôi",
  },
  {
    img: superiorRoom,
    type: "cozy superior",
    meter: "35 - 36 m2",
    people: "2 Người Lớn",
    bed: "Giường Đôi/Giường Đơn",
  },
  {
    img: deluxeRoom,
    type: "signature deluxe",
    meter: "42 - 47 m2",
    people: "2 Người Lớn",
    bed: "Giường Đôi/Giường Đơn",
  },
  {
    img: primeRoom,
    type: "prime suite",
    meter: "65 m2",
    people: "2 Người Lớn",
    bed: "2 Giường Đơn",
  },
  {
    img: eliteRoom,
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
