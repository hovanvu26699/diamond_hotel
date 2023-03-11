import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  function changeLang() {
    document.querySelector(".lang__sub").classList.toggle("active");
  }

  return (
    <div className="header__container">
      <div className="logo">
        <NavLink to="/">
          <img
            src="http://diamondstarbentre.com/vnt_upload/weblink/logo.svg"
            alt="logo"
          ></img>
        </NavLink>
      </div>
      <div className="menu">
        <div className="reservation">
          <button className="btn">RESERVATION</button>
        </div>
        <div className="menu__list">
          <ul>
            <li>
              <NavLink to="/intro">GIỚI THIỆU</NavLink>
            </li>
            <li>
              <NavLink to="/room">PHÒNG NGHỈ</NavLink>
            </li>
            <li>
              <NavLink to="/restaurant">NHÀ HÀNG</NavLink>
            </li>
            <li>
              <NavLink to="/conference">HỘI NGHỊ</NavLink>
            </li>
            <li>
              <NavLink to="/service">DỊCH VỤ KHÁC</NavLink>
            </li>
            <li>
              <NavLink to="/voucher">ƯU ĐÃI</NavLink>
            </li>
            <li className="libary">
              <NavLink to="/library">THƯ VIỆN</NavLink>
              <div className="libary__sub">
                <ul className="libary__list">
                  <li>
                    <a>HÌNH ẢNH</a>
                  </li>
                  <li>
                    <a>VIDEO</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <NavLink to="/contract">LIÊN HỆ</NavLink>
            </li>
            <li className="lang" onClick={changeLang}>
              <img
                src="http://diamondstarbentre.com/vnt_upload/lang/flag-vn.svg"
                alt="VN"
              ></img>
              <span>VN</span>
              <i class="fa-solid fa-angle-down"></i>
              <div className="lang__sub">
                <ul className="lang__list">
                  <li className="vie">
                    <img
                      src="http://diamondstarbentre.com/vnt_upload/lang/flag-vn.svg"
                      alt="VN"
                    ></img>
                    <span>VN</span>
                  </li>
                  <li className="eng">
                    <img
                      src="https://cdn11.bigcommerce.com/s-e2nupsxogj/images/stencil/500x659/products/1529/24884/z93r0kwtiafeveqjq86v__76953.1675809890.jpg?c=1"
                      alt="EN"
                    ></img>
                    <span>EN</span>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
