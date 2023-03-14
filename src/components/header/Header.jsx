import React from "react";
import { NavLink, Link } from "react-router-dom";
// image
import logo from "../../assets/image/logo.svg";
import flatVN from "../../assets/image/flag-vn.webp";
import flatEN from "../../assets/image/flag-en.svg";

const Header = () => {
  function changeLang() {
    document.querySelector(".lang__sub").classList.toggle("active");
  }

  return (
    <div className="header__container">
      <div className="logo">
        <NavLink to="/">
          <img src={logo} alt="logo"></img>
        </NavLink>
      </div>
      <div className="menu">
        <div className="reservation">
          <button className="btn">
            <Link to="/reservation">RESERVATION</Link>
          </button>
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
                    <Link to="/">HÌNH ẢNH</Link>
                  </li>
                  <li>
                    <Link to="/">VIDEO</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <NavLink to="/contract">LIÊN HỆ</NavLink>
            </li>
            <li className="lang" onClick={changeLang}>
              <img src={flatVN} alt="VN"></img>
              <span>VN</span>
              <i class="fa-solid fa-angle-down"></i>
              <div className="lang__sub">
                <ul className="lang__list">
                  <li className="vie">
                    <img src={flatVN} alt="VN"></img>
                    <span>VN</span>
                  </li>
                  <li className="eng">
                    <img src={flatEN} alt="EN"></img>
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
