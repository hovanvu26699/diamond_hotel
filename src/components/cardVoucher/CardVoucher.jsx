import React from "react";

const CardVoucher = (props) => {
  const data = props.data;
  return (
    <div className="cardVou__container">
      <div className="cardVou__img">
        <a href="">
          <img src={data.img} alt="voucher"></img>
        </a>
      </div>
      <div className="cardVou__desc">
        <h2>
          <a href="">{data.title}</a>
        </h2>
        <div className="time">
          <i class="fa-regular fa-clock"></i>
          <span>30/10/2020 00:00</span>
          <button className="btn__time">xem chi tiết</button>
        </div>
      </div>
    </div>
  );
};

export default CardVoucher;
