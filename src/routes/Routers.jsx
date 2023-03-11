import React from "react";

import HomePage from "../views/homePage/HomePage";
import Intro from "../views/intro/Intro";
import Room from "../views/room/Room";
import Restaurant from "../views/restaurant/Restaurant";
import Conference from "../views/conference/Conference";
import Services from "../views/services/Services";
import Vouchers from "../views/voucher/Vouchers";
import Library from "../views/library/Library";
import Contract from "../views/contract/Contract";

import { Route, Routes } from "react-router-dom";

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/room" element={<Room />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/conference" element={<Conference />} />
        <Route path="/service" element={<Services />} />
        <Route path="/voucher" element={<Vouchers />} />
        <Route path="/library" element={<Library />} />
        <Route path="/contract" element={<Contract />} />
      </Routes>
    </div>
  );
};

export default Routers;
