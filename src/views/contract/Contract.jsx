import React from "react";
import BigBanner from "../../components/bigBanner/BigBanner";
import Input from "../../components/input/Input";
import Map from "../../components/map/Map";

const data_contract = {
  img: "http://diamondstarbentre.com/vnt_upload/weblink/slide_1.jpg",
  title: "LIÊN HỆ - GÓP Ý",
};

const data_input = [
  { lable: "Họ tên *", type: "text", num: "35" },
  {
    lable: "Email *",
    type: "email",
    num: "50",
  },
  {
    lable: "Điện thoại *",
    type: "number",
    num: "10",
  },
  {
    lable: "Tiêu đề",
    type: "text",
    num: "50",
  },
  {
    lable: "Nội dung liên lạc",
    type: "textarea",
    num: "1000",
  },
];

const Contract = () => {
  return (
    <div className="contract__container">
      <BigBanner data={data_contract} />
      <div className="contract__content">
        <div className="wrapper">
          <div className="contract__img">
            <img
              src="http://diamondstarbentre.com/vnt_upload/contact/07_2020/logo.svg"
              alt="logo"
            />
          </div>
          <div className="contract__info">
            <p>
              Địa chỉ: 140 Đường Hùng Vương, Phường An Hội, Thành phố Bến Tre,
              Tỉnh Bến Tre
            </p>
            <p>Điện thoại: 0275.374.8888</p>
            <p>Email: info@diamondstarbentre.com</p>
          </div>
          <div className="contract__btn">
            <button className="btn">
              <i class="fa-solid fa-location-dot"></i>
              Bản đồ
            </button>
          </div>
          <div className="contract__qcode">
            <img
              src="http://chart.apis.google.com/chart?chf=a,s,000000|bg,s,FFFFFF&chs=150x150&chld=M|1&cht=qr&chl=BEGIN%3AVCARD%0AVERSION%3A2.1%0AN%3A%0AORG%3ADIAMOND+STARS+B%E1%BA%BEN+TRE%0ATITLE%3A%0ATEL%3BWORK%3BVOICE%3A0275.374.8888%0ATEL%3BHOME%3BVOICE%3A%0AEMAIL%3BPREF%3BINTERNET%3Ainfo%40diamondstarbentre.com%0AURL%3A%0ANOTE%3A140+%C4%90%C6%B0%E1%BB%9Dng+H%C3%B9ng+V%C6%B0%C6%A1ng%2C+Ph%C6%B0%E1%BB%9Dng+An+H%E1%BB%99i%2C+Th%C3%A0nh+ph%E1%BB%91+B%E1%BA%BFn+Tre%2C+T%E1%BB%89nh+B%E1%BA%BFn+Tre%0AEND%3AVCARD&choe=UTF-8"
              alt="qcode"
            />
          </div>
        </div>
      </div>
      <div className="contract__form">
        <div className="wrapper">
          <form>
            <div className="form__text">
              <p>
                Nếu quý khách có thắc mắc, ý kiến phản hồi hay đóng góp vui lòng
                điền vào Form dưới đây và gửi cho chúng tôi. Xin chân thành cảm
                ơn.
              </p>
            </div>
            <div className="form__input">
              {data_input.map((item) => {
                return <Input data={item} />;
              })}
            </div>
            <div className="form__btn">
              <button className="btn">GỬI</button>
            </div>
          </form>
        </div>
      </div>
      <Map />
    </div>
  );
};

export default Contract;
