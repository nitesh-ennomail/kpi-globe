import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../home/Home";
import HomeDriver from "../home/HomeDriver";
import Sidebar from "./Sidebar";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="home" element={<Home />}></Route>
        <Route path="/driver" element={<HomeDriver />} />
        {/* <Sidebar /> */}
        {/* <Route path="/home" element={<Home />} /> */}

        {/* <Route index element={<Home />} />
          <Route path="teams" element={<Teams />}>
            <Route path=":teamId" element={<Team />} />
            <Route path="new" element={<NewTeamForm />} />
            <Route index element={<LeagueStandings />} />
          </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
