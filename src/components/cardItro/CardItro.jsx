import React from "react";
import { Link } from "react-router-dom";

const CardItro = (props) => {
  const data = props.data;
  return (
    <div className="cardIntro">
      <div className="cardIntro__img">
        <Link to="">
          <img src={data.img} alt="card intro" />
        </Link>
      </div>
      <div className="cardIntro__content">
        <h4>{data.type}</h4>
        <p> {data.num}</p>
      </div>
    </div>
  );
};

export default CardItro;
