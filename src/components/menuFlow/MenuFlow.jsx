import React from "react";

const MenuFlow = (props) => {
  const data = props.data;
  return (
    <div className="menuFlow">
      <ul>
        {data.map((item) => {
          return (
            <li>
              <a href={item.id}>{item.title}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MenuFlow;
