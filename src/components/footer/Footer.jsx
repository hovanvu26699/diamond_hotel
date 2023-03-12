import React from "react";

import logoTrip from "../../assets/image/social-trip.png";
import logoDot from "../../assets/image/social-dot.png";
import logoAgoda from "../../assets/image/social-agoda.png";
import logoBook from "../../assets/image/social-book.png";
import logoTravel from "../../assets/image/social-travel.png";
import logoExp from "../../assets/image/social-exp.png";

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
                  <img src={logoTrip} alt="social"></img>
                </a>
              </li>
              <li>
                <a href="">
                  <img src={logoDot} alt="social"></img>
                </a>
              </li>
              <li>
                <a href="">
                  <img src={logoAgoda} alt="social"></img>
                </a>
              </li>

              <li>
                <a href="">
                  <img src={logoBook} alt="social"></img>
                </a>
              </li>
              <li>
                <a href="">
                  <img src={logoTravel} alt="social"></img>
                </a>
              </li>
              <li>
                <a href="">
                  <img src={logoExp} alt="social"></img>
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
