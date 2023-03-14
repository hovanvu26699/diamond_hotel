import React from "react";

// image
import logo from "../../assets/image/logo.svg";

const Bill = () => {
  return (
    <div className="bill">
      <div className="bill__container">
        <header className="logo">
          <div className="logo__img">
            <img src={logo} alt="logo" />
          </div>
        </header>
        <div className="bill__body">
          <h3>Diamond Stars Ben Tre Hotel</h3>
          <section className="check__date">
            <p className="checkIn">
              <span>Nhận phòng:</span> Thứ 6, Tháng 3 17, 2023 từ 14:00
            </p>
            <p className="checkOut">
              <span>Trả phòng:</span> Thứ 3, Tháng 3 21, 2023 cho đến 12:00
            </p>
          </section>
          <section className="detail__book">
            <h4>Chi tiết đặt phòng</h4>
            <RoomBook />
          </section>
          <div className="sum-customer">
            <div className="sum-customer-left">
              <div className="sum">
                <h3>Tổng giá trị</h3>
                <div className="sum__desc">
                  <div>
                    <p>Giá phòng</p>
                    <p>₫ 10.799.998</p>
                  </div>
                  <div>
                    <p>Tổng giá</p>
                    <p>₫ 10.799.998</p>
                  </div>
                </div>
                <div className="sum__deposit">
                  <p>
                    Số tiền đặt cọc đến hạn
                    <br /> thanh toán
                  </p>
                  <p>₫ 10.799.998</p>
                </div>
                <h3>Chính sách đặt phòng</h3>
                <div className="policy__book">
                  <p>
                    <b>Hủy:</b> Nếu hủy, thay đổi hoặc không đến, khách sẽ trả
                    toàn bộ giá trị tiền đặt phòng.
                  </p>
                  <p>
                    <b>Thanh toán:</b> Thanh toán toàn bộ giá trị tiền đặt
                    phòng...
                  </p>
                  <p>
                    <b>Bữa ăn bao gồm: </b> Bữa sáng đã bao gồm
                  </p>
                </div>
              </div>
            </div>
            <div className="sum-customer-right">
              <h3>Thông tin khách</h3>
              <div className="customer__info">
                <form id="form__info">
                  <div className="customer__name">
                    <label>Tên *</label>
                    <input type="text" id="txtNameCus" />
                  </div>
                  <div className="customer__lastName">
                    <label>Họ *</label>
                    <input type="text" id="txtLastNameCus" />
                  </div>
                  <div className="customer__email">
                    <label>Email *</label>
                    <input type="email" id="txtEmail" />
                  </div>
                  <div className="customer__emailAgain">
                    <label>Nhập lại email *</label>
                    <input type="email" id="txtEmailAgain" />
                  </div>
                  <div className="customer__phone">
                    <label>Số điện thoại liên lạc *</label>
                    <input type="text" id="txtPhone" />
                  </div>
                  <div className="customer__country">
                    <label>Quốc gia *</label>
                    <select id="list__country">
                      <option selected>--Lựa chọn--</option>
                      <option value="1">Armenia</option>
                      <option value="2">Australia</option>
                      <option value="3">Belarus</option>
                      <option value="4">Brazil</option>
                      <option value="5">Cambodia</option>
                      <option value="6">Canada</option>
                      <option value="7">China</option>
                      <option value="8">Colombia</option>
                      <option value="9">Cuba</option>
                      <option value="10">France</option>
                      <option value="11">Hong Kong</option>
                      <option value="12">Japan</option>
                      <option value="13">Korea</option>
                      <option value="14">
                        Lao People's Democratic Republic
                      </option>
                      <option value="15">Viet Nam</option>
                    </select>
                  </div>
                  <div className="customer__suggest">
                    <label>Yêu cầu thêm (tùy chọn)</label>
                    <textarea id="txtSuggest" />
                  </div>
                </form>
              </div>
              <h3>Trả bằng thẻ tín dụng</h3>
              <div className="credit__info">
                <form id="form__creditInfo">
                  <div className="customer__name">
                    <label>Số thẻ tín dụng</label>
                    <input type="text" id="txtNameCus" />
                  </div>
                  <div className="customer__name">
                    <label>Tên trên thẻ</label>
                    <input type="text" id="txtNameCus" />
                  </div>
                  <div className="credit__outOfDate">
                    <label>Ngày hết hạn</label>
                    <select id="credit__month">
                      <option>--Chọn--</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                      <option>11</option>
                      <option>12</option>
                    </select>
                    <select id="credit__year">
                      <option>--Chọn--</option>
                      <option>2023</option>
                      <option>2024</option>
                      <option>2025</option>
                      <option>2026</option>
                      <option>2028</option>
                      <option>2029</option>
                      <option>2030</option>
                      <option>2031</option>
                      <option>2032</option>
                      <option>2033</option>
                      <option>2034</option>
                      <option>2035</option>
                      <option>2036</option>
                      <option>2037</option>
                      <option>2038</option>
                    </select>
                  </div>
                  <div className="customer__name">
                    <label>Mã xác thực thẻ</label>
                    <input type="text" id="txtNameCus" />
                  </div>
                  <div className="btn__formCredit">
                    <button className="btn">Xác nhận đặt phòng</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const RoomBook = (props) => {
  return (
    <div className="roomBook">
      <div className="roomBook__info">
        <div className="roomBook__info__desc">
          <h3>Cozy Superior King</h3>
          <p>Không hoàn trả phí khi hủy phòng </p>
          <p> Bữa sáng đã bao gồm</p>
          <p>45% off - Special Offer</p>
          <p>
            <b>Chi tiết:</b> 1 phòng, 4 đêm, 2 người lớn đã bao gồm trong giá
          </p>
        </div>
        <div className="roomBook__info__amount">
          <div className="amount__room">
            <label>Số lượng phòng</label>
            <input value="2 phòng" disabled />
          </div>
          <div className="amount__people">
            <div className="people__aRoom">
              <label>Số lượng khách của phòng 1</label>
              <select id="amountPeople">
                <option>2 người lớn</option>
                <option>1 người lớn</option>
                <option>1 người lớn, 1 trẻ em</option>
              </select>
              <div className="people__aRoom">
                <label>Số lượng khách của phòng 2</label>
                <select id="amountPeople">
                  <option>2 người lớn</option>
                  <option>1 người lớn</option>
                  <option>1 người lớn, 1 trẻ em</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="total__price">
        <span>₫ 10.399.998</span>
      </div>
    </div>
  );
};

export default Bill;
