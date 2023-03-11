import React from "react";

const TitleHome = (props) => {
  return (
    <div className="title__container">
      <h2>{props.title}</h2>
      <span>{props.caption}</span>
    </div>
  );
};

export default TitleHome;
