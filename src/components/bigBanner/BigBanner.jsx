import React from "react";

const BigBanner = (props) => {
  const data = props.data;
  return (
    <div className="banner">
      <div className="banner__img">
        <img src={data.img} alt="banner intro"></img>
      </div>
      <h2 className="banner__title">{data.title}</h2>
    </div>
  );
};

export default BigBanner;
