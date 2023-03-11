import React from "react";

const CardService = (props) => {
  const data = props.data;
  return (
    <div className="cardSer__container">
      <div className="service__img">
        <a>
          <img src={data.img} alt="service"></img>
        </a>
      </div>
      <div className="service__title">
        <h2>
          <a href="">{data.title}</a>
        </h2>
      </div>
    </div>
  );
};

export default CardService;
