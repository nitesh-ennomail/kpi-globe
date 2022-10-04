import React, { useEffect } from "react";
import Navbar from "../comman/Navbar";
import Sidebar from "../comman/Sidebar";
// import Pie from "../comman/Chart";

import { appendScript } from "../utils/appendScript";
import { removeScript } from "../utils/removeScript";

import { useNavigate, useParams, Outlet } from "react-router-dom";
function Home() {
  return (
    <React.Fragment>
      <Sidebar isActive={true} path={"home"} />
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
        <Navbar />
        <Outlet />
      </main>
    </React.Fragment>
  );
}

export default Home;
