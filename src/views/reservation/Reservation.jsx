import React from "react";
import { Link } from "react-router-dom";
import BigBanners from "../../components/bigBanner/BigBanner";
import RoomInfo from "../../components/roomInfo/RoomInfo";
// image
import banner from "../../assets/image/banner-reservation.jpg";

const data_banner = { img: banner, title: "RESERVATION" };

const Reservation = () => {
  var today = new Date();
  return (
    <div className="reservation">
      <BigBanners data={data_banner} />
      <div className="reservation__wrapper">
        <div className="reservation__wrapper__content">
          <div className="range__date">
            <input
              type="date"
              name="dateFrom"
              min={today.getDate() + today.getMonth() + today.getFullYear()}
            />
            <input
              type="date"
              name="dateTo"
              min={today.getDate() + today.getMonth() + today.getFullYear()}
            />
          </div>
          <div className="currency">
            <select name="money" id="currentcy__select">
              <option value="">Australian Dollars</option>
              <option value="">Brazilian Real</option>
              <option value="">British Pound</option>
              <option value="">Canadian Dollar</option>
              <option value="">Chinese Yuan</option>
              <option value="">Euro</option>
              <option value="">Hong Kong Dollar</option>
              <option value="">Indian Rupee</option>
              <option value="">Indonesian Rupiah</option>
              <option value="">Japanese Yen</option>
              <option value="">Korean Won</option>
              <option value="">Lao Kip</option>
              <option value="">Malaysian Ringgit</option>
              <option value="">Philippine Peso</option>
              <option value="">Singapore Dollar</option>
              <option value="">Russian Rouble</option>
              <option value="">Thai Baht</option>
              <option value="">U.S. Dollar</option>
              <option value="" selected>
                Vietnam Dong
              </option>
            </select>
          </div>
          <div className="room__available">
            <div className="room__available__list">
              <RoomInfo />
              <RoomInfo />
              <RoomInfo />
              <RoomInfo />
              <RoomInfo />
            </div>
            <div className="btn__reservate">
              <button className="btn">
                <Link to="/reservation/check">ĐẶT PHÒNG</Link>
              </button>
              <div className="reservation__info">
                <span className="room__booked">1 phòng</span>
                <span className="total">₫ 1.650.000</span>
                <span>cho 1 đêm</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
