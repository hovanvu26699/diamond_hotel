import React from "react";

const Map = () => {
  return (
    <div className="map__container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.3323507864557!2d106.37335291474415!3d10.234756392690441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310aa98fdbbe5cbb%3A0x98a77161005e94fa!2sDiamond%20Stars%20Hotel%20B%E1%BA%BFn%20Tre!5e0!3m2!1svi!2s!4v1678023427262!5m2!1svi!2s"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="map__content">
        <div className="map__wrap">
          <h3>Diamond Stars Bến Tre</h3>
          <span>
            140 Hùng Vương, Phường An Hội, Thành phố Bến Tre, Tỉnh Bến Tre
          </span>
          <p>
            Tọa lạc tại Trung tâm TP Bến Tre đường Hùng Vương với quy mô: 138
            phòng thiết kế sang trọng, nhà hàng, bar, cafe, hồ bơi vô cực, … với
            tổng sức chứa 1.400 khách.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Map;
