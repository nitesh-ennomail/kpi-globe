import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../home/Home";

import HomeOverview from "../home/HomeOverview";
import HomeDriver from "../home/HomeDriver";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />}>
          <Route path="overview" element={<HomeOverview />} />
          <Route path="driver" element={<HomeDriver />} />
          <Route index element={<HomeDriver />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
