import React from "react";

//image
import roomImg from "../../assets/image/room-superior.jpg";

const RoomInfo = () => {
  return (
    <div className="roomInfo">
      <div className="room__desc">
        <div className="room__img">
          <img src={roomImg} alt="room" />
        </div>
        <div className="room__detail">
          <h3 className="room__name">Cozy Superior King</h3>
          <p>
            Các phòng ở tiêu chuẩn có diện tích khoảng 36m2 có trang bị Smart TV
            màn hình 49 inch, truy cập Wi-Fi miễn phí. Phòng tắm được thiết kế
            sang trọng với tone màu ấm. Phòng ở có khung cửa kính lớn hoặc có
            ban công giúp đón ánh sáng tự nhiên, kết hợp với các tiện nghi sẵn
            có để đem lại cho khách ở cảm giác ấm cúng như được ở tại nhà của
            mình.
          </p>
          <ul className="room__furniture">
            <li>
              <i class="fa-solid fa-circle"></i>
              Đồng hồ báo thức/radio
            </li>
            <li>
              <i class="fa-solid fa-circle"></i>Điều hòa
            </li>
            <li>
              <i class="fa-solid fa-circle"></i>Ban công
            </li>
            <li>
              <i class="fa-solid fa-circle"></i>Bồn tắm và vòi sen riêng biệt
            </li>
            <li>
              <i class="fa-solid fa-circle"></i>Dụng cụ pha cafe/trà
            </li>
            <li>
              <i class="fa-solid fa-circle"></i>Máy sấy tóc
            </li>
            <li>
              <i class="fa-solid fa-circle"></i>Nước nóng
            </li>
            <li>
              <i class="fa-solid fa-circle"></i>Két an toàn
            </li>
            <li>
              <i class="fa-solid fa-circle"></i>Truy cập Internet qua WiFi
            </li>
            <li>
              <i class="fa-solid fa-circle"></i>Ra trải giường, gối
            </li>
            <li>
              <i class="fa-solid fa-circle"></i>Quầy bar mini
            </li>
            <li>
              <i class="fa-solid fa-circle"></i>Truyền hình cáp/Vệ tinh
            </li>
            <li>
              <i class="fa-solid fa-circle"></i>Điện thoại
            </li>
            <li>
              <i class="fa-solid fa-circle"></i>Đồ phòng tắm
            </li>
            <li>
              <i class="fa-solid fa-circle"></i>Khăn tắm
            </li>
            <li>
              <i class="fa-solid fa-circle"></i>Phòng/tủ quần áo
            </li>
            <li>
              <i class="fa-solid fa-circle"></i>Bàn làm việc
            </li>
          </ul>
          <p className="room__bed">
            <span>Kích thước giường:</span> 1 giường king
            <span>Diện tích phòng:</span> 36 m2
          </p>
        </div>
      </div>
      <div className="room_combo">
        <div className="room__include">
          <h3>Premier Club_ With Breakfast</h3>
          <p>45% off - Special Offer </p>
          <p>Không hoàn trả phí khi hủy phòng </p>
          <p>Bữa sáng đã bao gồm </p>
        </div>
        <div className="room__people">
          <div className="icon">
            <i class="fa-solid fa-user"></i>
            <i class="fa-solid fa-user-plus"></i>
          </div>
          <p>2 người lớn</p>
          <p>Thêm người (6 - 11 tuổi)</p>
        </div>
        <div className="room__price">
          <div className="price">
            <span className="acount_available">1 phòng còn lại</span>
            <span className="price_a_room">₫ 1.650.000</span>/ đêm
          </div>
          <div className="date">
            <select name="" id="date-book">
              <option value="" selected>
                0 phòng
              </option>
              <option value="">1 phòng</option>
              <option value="">2 phòng</option>
              <option value="">3 phòng</option>
            </select>
            <div className="date__list">
              <span>Lịch</span>
              <i class="fa-regular fa-calendar-days"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomInfo;
