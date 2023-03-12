import React from "react";
import BigBanner from "../../components/bigBanner/BigBanner";
import Input from "../../components/input/Input";
import Map from "../../components/map/Map";
// image
import banner from "../../assets/image/banner-contract.jpg";
import qcode from "../../assets/image/contract-qcode.png";
import logo from "../../assets/image/logo.svg";

const data_contract = {
  img: banner,
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
            <img src={logo} alt="logo" />
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
              <a href="#map">
                <i class="fa-solid fa-location-dot"></i>
                Bản đồ
              </a>
            </button>
          </div>
          <div className="contract__qcode">
            <img src={qcode} alt="qcode" />
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
