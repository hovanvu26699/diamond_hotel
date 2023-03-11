import React from "react";
import { Link } from "react-router-dom";

const BigCardRoom = (props) => {
  props = props.data;
  return (
    <div className="bigCardRoom">
      <div className="bigCardRoom__img">
        <Link to="/room">
          <img src={props.img} alt={props.type} />
        </Link>
      </div>
      <div className="bigCardRoom__desc">
        <div className="bigCardRoom__desc__flower">
          <img
            src="http://diamondstarbentre.com/modules/product/images/hoaImg.svg"
            alt="flower"
          />
        </div>
        <div className="wrap">
          <h3>
            <Link to="/room">{props.type}</Link>
          </h3>
          <div className="bigCardRoom__desc__num">
            <ul>
              <li>
                <img
                  src="http://diamondstarbentre.com/vnt_upload/product/07_2020/roomicon1.png"
                  alt="square"
                ></img>
                <span>{props.meter}</span>
              </li>
              <li>
                <img
                  src="http://diamondstarbentre.com/vnt_upload/product/07_2020/roomicon2.png"
                  alt="people"
                ></img>
                <span>{props.people}</span>
              </li>
              <li>
                <img
                  src="http://diamondstarbentre.com/vnt_upload/product/07_2020/roomicon3.jpg"
                  alt="bed"
                ></img>
                <span>{props.bed}</span>
              </li>
            </ul>
          </div>
          <div className="bigCardRoom__desc__btn">
            <button className="btn-no-bg">XEM CHI TIẾT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigCardRoom;
