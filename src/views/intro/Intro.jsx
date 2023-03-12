import React from "react";

import BigBanner from "../../components/bigBanner/BigBanner";
import Welcome from "../../components/welcome/Welcome";
import Map from "../../components/map/Map";

import bannerIntro from "../../assets/image/baner-intro.jpg";
import introImg from "../../assets/image/intro.jpg";

const data_wel = {
  img: introImg,
  p1: "Tọa lạc tại đường Hùng Vương, thành phố Bến Tre, khách sạn Diamond Stars Bến Tre có kiến trúc hiện đại nằm đối diện với sông Bến Tre thanh bình và bên cạnh chợ Bến Tre dân dã hồn hậu.",
  p2: "Khách sạn là sự kết hợp hoàn hảo giữa không gian nghỉ dưỡng cao cấp, xen lẫn trong nét giản dị của xứ Dừa.",
  p3: "Diamond Stars Bến Tre luôn mong muốn rằng mỗi kỳ nghỉ của khách hàng sẽ luôn được trọn vẹn và đáng nhớ.",
};
const data_banner = {
  img: bannerIntro,
  title: "DIAMOND STARS BẾN TRE",
};
const Intro = () => {
  return (
    <div className="intro__container">
      <BigBanner data={data_banner} />
      <Welcome data={data_wel} />

      <div className="intro__content">
        <p>
          Diamond Stars Bến Tre là khách sạn cao tầng nhất tọa lạc tại Thành phố
          Bến Tre, khách sạn mang đến nhiều trải nghiệm theo tiêu chuẩn quốc tế.
          Với các dịch vụ đặc biệt, tiện nghi đẳng cấp và không gian sống được
          thiết kế đẹp mắt bên bờ sông thơ mộng.
        </p>
        <p>
          Nằm ngay trung tâm thành phố, Khách sạn Diamond Stars Bến Tre có 138
          phòng, tiện nghi đầy đủ như quầy bar & nhà hàng nhìn ra hồ bơi vô cực.
          Ngoài ra, Diamond Stars Bến Tre còn cung cấp không gian phòng hội nghị
          linh hoạt, hoặc sự kiện như cưới hỏi dành cho khách hàng, với tầm nhìn
          bao quát khắp Thành phố Bến Tre.
        </p>
      </div>
      <Map />
      <div className="intro__video">
        <iframe
          src="https://www.youtube.com/embed/9HcYVzVKyuY"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Intro;
