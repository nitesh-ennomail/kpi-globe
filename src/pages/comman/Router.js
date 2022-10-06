import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../home/Home";

import HomeOverview from "../home/HomeOverview";
import HomeDriver from "../home/HomeDriver";
import HomeEngagement from "../home/HomeEngagement";
import Signup from "../signup/Signup";
import SignupOverview from "../signup/SignupOverview";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Home route */}
        <Route path="home" element={<Home />}>
          <Route path="overview" element={<HomeOverview />} />
          <Route path="driver" element={<HomeDriver />} />
          <Route path="engagement" element={<HomeEngagement />} />
        </Route>

        {/* Signup route */}
        <Route path="signup" element={<Signup />}>
          <Route path="overview" element={<SignupOverview />} />
          {/* <Route path="driver" element={<SignupDriver />} />
          <Route path="engagement" element={<SignupEngagement />} />
          <Route path="demographics" element={<SignupDemographics />} />
          <Route path="hcp-performance" element={<SignupHcpPerformance />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
