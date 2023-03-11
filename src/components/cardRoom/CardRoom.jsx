import React from "react";

const CardRoom = (props) => {
  props = props.data;
  return (
    <div className="cardRoom__container">
      <div className="cardRoom__img">
        <a src="">
          <img src={props.img} alt="room"></img>
        </a>
      </div>
      <div className="cardRoom__desc">
        <h3>
          <a src="">{props.type}</a>
        </h3>
        <div className="cardRoom__desc__num">
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
      </div>
    </div>
  );
};

export default CardRoom;
