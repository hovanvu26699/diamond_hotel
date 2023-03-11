import React from "react";

const Input = (props) => {
  const data = props.data;
  return (
    <div className="input__container">
      <lable>{data.lable}</lable>
      <input
        type={data.type}
        required
        maxLength={data.num}
        className={data.type === "textarea" ? "none" : ""}
      />
      <textarea
        required
        maxLength={data.num}
        className={data.type === "textarea" ? "" : "none"}
      ></textarea>
      <span>0 / {data.num}</span>
    </div>
  );
};

export default Input;
