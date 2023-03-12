import React from "react";
import VideoIntro from "../../components/videoIntro/VideoIntro";
import Welcome from "../../components/welcome/Welcome";
import RoomSlide from "../../components/roomSlide/RoomSlide";
import Service from "../../components/service/Service";
import Voucher from "../../components/voucher/Voucher";
import Map from "../../components/map/Map";

import homeItroImg from "../../assets/image/home_intro.jpg";

const data__wel = {
  img: homeItroImg,
  p1: "Tọa lạc tại đường Hùng Vương, thành phố Bến Tre, Diamond Star có kiến trúc hiện đại nằm đối diện với sông Bến Tre thanh bình, và bên cạnh chợ Bến Tre dân dã hồn hậu. Khách sạn là sự kết hợp hoàn hảo giữa không gian nghỉ dưỡng cao cấp, xen lẫn trong...",
};
function home() {
  return (
    <div className="home__container">
      <VideoIntro />
      <Welcome data={data__wel} />
      <RoomSlide />
      <Service />
      <Voucher />
      <Map />
    </div>
  );
}

export default home;
