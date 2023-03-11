import React from "react";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__main">
        <ul>
          <li className="address">
            <h4>ĐỊA CHỈ</h4>
            <span>
              140 Hùng Vương, Phường <br /> An Hội, Thành phố Bến Tre, <br />
              Tỉnh Bến Tre
            </span>
          </li>
          <li className="phone">
            <h4>LIÊN HỆ</h4>
            <span className="phone__num">
              <a href="">0275.374.8888</a>
            </span>
            <span>
              <a href="">info@diamondstarbentre.com</a>
            </span>
          </li>
          <li className="email">
            <h4>ĐĂNG KÝ NHẬN TIN</h4>
            <input
              type="text"
              id="inp_email"
              placeholder="Email của bạn ..."
            ></input>
            <button className="btn">Gửi</button>
          </li>
          <li className="follow">
            <h4>THEO DÕI CHÚNG TÔI</h4>
            <ul className="follow__social">
              <li>
                <a href="">
                  <i class="fa-brands fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i class="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </li>
            </ul>
            <ul className="follow__app">
              <li>
                <a href="">
                  <img
                    src="http://diamondstarbentre.com/vnt_upload/weblink/imgFt.png"
                    alt="social"
                  ></img>
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    src="http://diamondstarbentre.com/vnt_upload/weblink/imgFt1.png"
                    alt="social"
                  ></img>
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    src="http://diamondstarbentre.com/vnt_upload/weblink/logo_agoda_6.png"
                    alt="social"
                  ></img>
                </a>
              </li>

              <li>
                <a href="">
                  <img
                    src="http://diamondstarbentre.com/vnt_upload/weblink/traveloka_logo.png"
                    alt="social"
                  ></img>
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    src="http://diamondstarbentre.com/vnt_upload/weblink/logo_expedia_1.png"
                    alt="social"
                  ></img>
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    src="http://diamondstarbentre.com/vnt_upload/weblink/logo_booking_6.png"
                    alt="social"
                  ></img>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
