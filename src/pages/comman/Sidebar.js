import React from "react";
import { Link } from "react-router-dom";

function Sidebar(props) {
  const nameUrl = props;

  console.log(nameUrl);
  return (
    <React.Fragment>
      <aside
        className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3"
        id="sidenav-main"
      >
        <div className="sidenav-header">
          <i
            className="fas fa-times cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
            aria-hidden="true"
            id="iconSidenav"
          ></i>
          <a
            className="navbar-brand m-0"
            href="../../pages/dashboards/crm.html"
          >
            <img
              src="../../assets/img/logo-ct-dark.png"
              className="navbar-brand-img"
              alt="main_logo"
            />
            <span className="ms-2 text-xxl font-weight-bold">
              Tremfya With Me
            </span>
          </a>
        </div>
        {/* <!--  User --> */}
        <hr className="horizontal dark" />
        <div
          className="collapse navbar-collapse w-auto h-auto"
          id="sidenav-collapse-main"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="../../pages/dev-pages/account/settings.html">
                <div className="nav-link p-3">
                  <img
                    src="https://lh3.googleusercontent.com/ogw/ADea4I74_-_H7q-ze1cX7R_Tt761ZO-GsbAN9GtecMjcfw=s64-c-mo"
                    className="icon-shape shadow border-radius-lg text-center d-flex align-items-center justify-content-center p-1 me-2"
                  />
                  <div className="">
                    <span className="nav-link-text ms-1">Tyler Doyle</span>
                  </div>
                </div>
              </a>
            </li>
          </ul>
          {/* <!--  Home --> */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                data-bs-toggle="collapse"
                href="#homePages"
                className="nav-link active p-3"
                aria-controls="dashboardsExamples"
                role="button"
                aria-expanded="true"
              >
                <div className="icon icon-shape shadow border-radius-md text-center d-flex bg-gradient-primary align-items-center justify-content-center me-2">
                  <i
                    className="fa-solid fa-house fa-fw opacity-10 text-2xl text-white d-flex align-items-center justify-content-center"
                    aria-hidden="true"
                  ></i>
                </div>
                <span className="nav-link-text ms-1">Home</span>
              </a>
              <div className="collapse show" id="homePages">
                <ul className="nav ms-4 ps-3">
                  <li className="nav-item">
                    <ul className="nav nav-sm flex-column">
                      <li className="nav-item">
                        <Link
                          className={`nav-link ${true ? "active" : ""}`}
                          to="/home/overview"
                        >
                          <span className="sidenav-normal"> Overview </span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className={`nav-link ${true ? "active" : ""}`}
                          to="/home/driver"
                        >
                          <span className="sidenav-normal"> Drivers </span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/home/engagement">
                          <span className="sidenav-normal"> Engagement </span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>
            {/* <!--  Sign Up --> */}
            <li className="nav-item">
              <a
                data-bs-toggle="collapse"
                href="#signUpPages"
                className="nav-link"
                aria-controls="pagesExamples"
                role="button"
                aria-expanded="false"
              >
                <div className="icon icon-shape shadow border-radius-md text-center d-flex align-items-center justify-content-center me-2">
                  <i className="fa-solid fa-pen-line fa-fw opacity-10 text-2xl text-gradient text-primary d-flex align-items-center justify-content-center"></i>
                </div>
                <span className="nav-link-text ms-1">Sign Up</span>
              </a>
              <div className="collapse" id="signUpPages">
                <ul className="nav ms-4 ps-3">
                  <li className="nav-item">
                    <ul className="nav nav-sm flex-column">
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="../../pages/signup/signup-overview.html"
                        >
                          <span className="sidenav-normal"> Overview </span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="../../pages/signup/signup-conversion-drivers.html"
                        >
                          <span className="sidenav-normal"> Drivers </span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="../../pages/signup/signup-drivers.html"
                        >
                          <span className="sidenav-normal"> Engagement </span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="../../pages/signup/signup-demographics.html"
                        >
                          <span className="sidenav-normal"> Demographics </span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="../../pages/signup/signup-hcp-performance.html"
                        >
                          <span className="sidenav-normal">
                            {" "}
                            HCP Performance{" "}
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>
            {/* <!--  Enrollment --> */}
            <li className="nav-item">
              <a
                data-bs-toggle="collapse"
                href="#enrollmentPages"
                className="nav-link"
                aria-controls="applicationsExamples"
                role="button"
                aria-expanded="false"
              >
                <div className="icon icon-shape shadow border-radius-md text-center d-flex align-items-center justify-content-center me-2">
                  <i className="fa-solid fa-clipboard-user fa-fw opacity-10 text-2xl text-gradient text-primary d-flex align-items-center justify-content-center"></i>
                </div>
                <span className="nav-link-text ms-1">Enrollment</span>
              </a>
              <div className="collapse" id="enrollmentPages">
                <ul className="nav ms-4 ps-3">
                  <li className="nav-item">
                    <ul className="nav nav-sm flex-column">
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="../../pages/enrollment/enrollment-overview.html"
                        >
                          <span className="sidenav-normal"> Overview </span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="../../pages/enrollment/enrollment-drivers.html"
                        >
                          <span className="sidenav-normal"> Drivers </span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="../../pages/enrollment/enrollment-engagement.html"
                        >
                          <span className="sidenav-normal"> Engagement </span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="../../pages/enrollment/enrollment-demographics.html"
                        >
                          <span className="sidenav-normal"> Demographics </span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="../../pages/enrollment/enrollment-reasons.html"
                        >
                          <span className="sidenav-normal"> Reasons </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>
            {/* <!--  Fulfillment --> */}
            <li className="nav-item">
              <a
                data-bs-toggle="collapse"
                href="#fulfillmentPages"
                className="nav-link"
                aria-controls="ecommerceExamples"
                role="button"
                aria-expanded="false"
              >
                <div className="icon icon-shape shadow border-radius-md text-center d-flex align-items-center justify-content-center me-2">
                  <i className="fa-solid fa-prescription-bottle-medical fa-fw opacity-10 text-2xl text-gradient text-primary d-flex align-items-center justify-content-center"></i>
                </div>
                <span className="nav-link-text ms-1">Fulfillment</span>
              </a>
              <div className="collapse" id="fulfillmentPages">
                <ul className="nav ms-4 ps-3">
                  <li className="nav-item">
                    <ul className="nav nav-sm flex-column">
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="../../pages/fulfillment/fulfillment-overview.html"
                        >
                          <span className="sidenav-normal"> Overview </span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="../../pages/fulfillment/fulfillment-engagement.html"
                        >
                          <span className="sidenav-normal"> Engagement </span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="../../pages/fulfillment/fulfillment-demographics.html"
                        >
                          <span className="sidenav-normal"> Demographics </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>
            {/* <!--  Start Treatment --> */}
            <li className="nav-item">
              <a
                data-bs-toggle="collapse"
                href="#startTreatmentPages"
                className="nav-link"
                aria-controls="authExamples"
                role="button"
                aria-expanded="false"
              >
                <div className="icon icon-shape shadow border-radius-md text-align-center d-flex align-items-center justify-content-center me-2">
                  <i className="fa-solid fa-play fa-fw opacity-10 text-gradient text-primary d-flex align-items-center justify-content-center"></i>
                </div>
                <span className="nav-link-text ms-1">Start Treatment</span>
              </a>
              <div className="collapse" id="startTreatmentPages">
                <ul className="nav ms-4 ps-3">
                  <li className="nav-item">
                    <ul className="nav nav-sm flex-column">
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="../../pages/start-treatment/treatment-overview.html"
                        >
                          <span className="sidenav-normal"> Overview </span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="../../pages/start-treatment/treatment-engagement.html"
                        >
                          <span className="sidenav-normal"> Engagement </span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="../../pages/start-treatment/treatment-demographics.html"
                        >
                          <span className="sidenav-normal"> Demographics </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>
            {/* <!--  Keeping The Momentum --> */}
            <li className="nav-item">
              <a
                data-bs-toggle="collapse"
                href="#momentumPages"
                className="nav-link"
                aria-controls="basicExamples"
                role="button"
                aria-expanded="false"
              >
                <div className="icon icon-shape shadow border-radius-md text-center d-flex align-items-center justify-content-center me-2">
                  <i className="fa-solid fa-handshake-simple fa-fw opacity-10 text-2xl text-gradient text-primary d-flex align-items-center justify-content-center"></i>
                </div>
                <span className="nav-link-text ms-1">Momentum</span>
              </a>
              <div className="collapse" id="momentumPages">
                <ul className="nav ms-4 ps-3">
                  <li className="nav-item">
                    <ul className="nav nav-sm flex-column">
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="../../pages/momentum/momentum-overview.html"
                        >
                          <span className="sidenav-normal"> Overview </span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="../../pages/momentum/momentum-engagement.html"
                        >
                          <span className="sidenav-normal"> Engagement </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>
            {/* <!--  Manage Profile --> */}
            <li className="nav-item">
              <a
                data-bs-toggle="collapse"
                href="#manageProfile"
                className="nav-link"
                aria-controls="basicExamples"
                role="button"
                aria-expanded="false"
              >
                <div className="icon icon-shape shadow border-radius-md text-center d-flex align-items-center justify-content-center me-2">
                  <i className="fa-solid fa-building fa-fw opacity-10 text-2xl text-gradient text-primary d-flex align-items-center justify-content-center"></i>
                </div>
                <span className="nav-link-text ms-1">Manage</span>
              </a>
              <div className="collapse" id="manageProfile">
                <ul className="nav ms-4 ps-3">
                  <li className="nav-item">
                    <ul className="nav nav-sm flex-column">
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="../../pages/manage/manage-company.html"
                        >
                          <span className="sidenav-normal">
                            {" "}
                            Manage Company{" "}
                          </span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="../../pages/manage/manage-profile.html"
                        >
                          <span className="sidenav-normal">
                            {" "}
                            Manage Profile{" "}
                          </span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="../../pages/momentum/momentum-overview.html"
                        >
                          <span className="sidenav-normal"> Approvals </span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="../../pages/momentum/momentum-engagement.html"
                        >
                          <span className="sidenav-normal"> Metrics </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </aside>
    </React.Fragment>
  );
}

export default Sidebar;
