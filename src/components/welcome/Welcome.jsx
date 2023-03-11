import React from "react";

const Welcome = (props) => {
  const data = props.data;
  return (
    <div className="welcome__container">
      <div className="welcome__img">
        <a href="">
          <img src={data.img} alt="welcome"></img>
        </a>
      </div>
      <div className="welcome__col">
        <div className="welcome__desc">
          <div className="welcome__desc__title">
            <span className="caption">Chào đón quý khách đến với</span>
            <div className="title">
              <h2>Diamond Stars </h2>
              <span>Bến Tre</span>
            </div>
          </div>
          <div className="welcome__desc__content">
            <p>{data.p1}</p>
            <p>{data.p2}</p>
            <p>{data.p3}</p>
          </div>
          <div className="welcome__desc__more">
            <button className="btn-no-bg">Tìm hiểu thêm</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
