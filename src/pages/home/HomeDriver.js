import React from "react";
import Navbar from "../comman/Navbar";
import Sidebar from "../comman/Sidebar";

function HomeDriver() {
  return (
    <React.Fragment>
      <Sidebar isActive={true} path={"home"} />
      <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
        <Navbar />
        <div class="container-fluid py-4">
          <div class="row">
            <div class="col-6">
              <h4 class="">North Star Metrics</h4>
            </div>
          </div>
          <div class="row">
            <div class="col-6">
              <div class="row">
                <div class="col-6">
                  <div class="card mb-3">
                    <div class="card-body p-3">
                      <div class="row">
                        <div class="col-9">
                          <div class="numbers">
                            <p class="text-sm mb-0 text-capitalize font-weight-bold">
                              Current Active Patients
                            </p>
                            <h5 class="font-weight-bolder mb-0">
                              247
                              <span class="text-success text-sm font-weight-bolder">
                                +3%
                              </span>
                            </h5>
                          </div>
                        </div>
                        <div class="col-3 text-end">
                          <div class="icon icon-shape shadow border-radius-md bg-gradient-primary text-center d-flex align-items-center justify-content-center">
                            <i
                              class="fa-solid fa-user text-lg opacity-10"
                              aria-hidden="true"
                            ></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="card z-index-2 mb-3">
                    <div class="card-body p-3">
                      <div class="row">
                        <div class="col-9">
                          <div class="numbers">
                            <p class="text-sm mb-0 text-capitalize font-weight-bold">
                              Total Patients Assisted Since Launch
                            </p>
                            <h5 class="font-weight-bolder mb-0">
                              402
                              <span class="text-success text-sm font-weight-bolder">
                                +3%
                              </span>
                            </h5>
                          </div>
                        </div>
                        <div class="col-3 text-end">
                          <div class="icon icon-shape shadow border-radius-md bg-gradient-primary text-center d-flex align-items-center justify-content-center">
                            <i
                              class="fa-solid fa-user-check text-lg opacity-10"
                              aria-hidden="true"
                            ></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="row">
                <div class="col-6">
                  <div class="card mb-3">
                    <div class="card-body p-3">
                      <div class="row">
                        <div class="col-9">
                          <div class="numbers">
                            <p class="text-sm mb-0 text-capitalize font-weight-bold">
                              Bio Naive Patients Since Launch
                            </p>
                            <h5 class="font-weight-bolder mb-0">
                              36%
                              <span class="text-success text-sm font-weight-bolder">
                                +3%
                              </span>
                            </h5>
                          </div>
                        </div>
                        <div class="col-3 text-end">
                          <div class="icon icon-shape shadow border-radius-md bg-gradient-primary text-center d-flex align-items-center justify-content-center">
                            <i
                              class="fa-solid fa-language text-lg opacity-10"
                              aria-hidden="true"
                            ></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="card z-index-2 mb-3">
                    <div class="card-body p-3">
                      <div class="row">
                        <div class="col-9">
                          <div class="numbers">
                            <p class="text-sm mb-0 text-capitalize font-weight-bold">
                              Indications Since Launch
                            </p>
                            <h5 class="font-weight-bolder mb-0">
                              71% PsO
                              <span class="text-success text-sm font-weight-bolder">
                                +3%
                              </span>
                            </h5>
                            <h5 class="font-weight-bolder mb-0">
                              29% PsA
                              <span class="text-success text-sm font-weight-bolder">
                                +3%
                              </span>
                            </h5>
                          </div>
                        </div>
                        <div class="col-3 text-end">
                          <div class="icon icon-shape shadow border-radius-md bg-gradient-primary text-center d-flex align-items-center justify-content-center">
                            <i
                              class="fa-solid fa-language text-lg opacity-10"
                              aria-hidden="true"
                            ></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container-fluid py-4">
          <div class="row">
            <div class="col-8 position-relative z-index-2">
              <div class="card card-plain mb-4">
                <div class="card-body p-3">
                  <div class="row">
                    <div class="col-lg-10">
                      <div class="d-flex flex-column h-100">
                        <h2 class="font-weight-bolder mb-0">
                          Program Overview
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="m-3">
                  <div class="card-header pb-0 p-3">
                    <div class="d-flex align-items-center">
                      <h6 class="mb-0">Program Overview</h6>
                      <button
                        type="button"
                        class="btn btn-icon-only btn-rounded btn-outline-secondary btn-sm d-flex align-items-center justify-content-center ms-2"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="PHASE PERFORMANCE
                                    The values below show the percentage of people who made it to the next phase out of the previous phase. 
                                    
                                    PROGRAM FUNNEL
                                    The funnel represents the percentage of users who signed up and made it to each phase within a given time period."
                      >
                        <i class="fas fa-info" aria-hidden="true"></i>
                      </button>
                      <div class="ms-auto">
                        <div class="dropdown pe-2">
                          <a
                            href="javascript:;"
                            class="text-white ps-4"
                            id="dropdownCard"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                          </a>
                          <ul
                            class="dropdown-menu dropdown-menu-end me-sm-n4 px-2 py-3"
                            aria-labelledby="dropdownCard"
                          >
                            <li>
                              <a
                                class="dropdown-item border-radius-md"
                                href="javascript:;"
                              >
                                <i class="fa-regular fa-share me-2"></i> Share
                                Report
                              </a>
                            </li>
                            <li>
                              <a
                                class="dropdown-item border-radius-md"
                                href="javascript:;"
                              >
                                <i class="fa-regular fa-add me-2"></i> Add to
                                Report
                              </a>
                            </li>
                            <li>
                              <a
                                class="dropdown-item border-radius-md"
                                id="toPng"
                              >
                                <i class="fa-regular fa-file-arrow-down me-2"></i>
                                Download PNG
                              </a>
                            </li>
                            <li>
                              <a
                                class="dropdown-item border-radius-md"
                                href="javascript:;"
                                id="toPdf"
                              >
                                <i class="fa-regular fa-file-arrow-down me-2"></i>
                                Download PDF
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="f1" class="funnel funnel-container mt-4 mb-6"></div>
                  <div id="f2" class="d-none"></div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Hierarchy Chart --> */}
          <div class="row m-3">
            <div class="col-12">
              <div class="card p-3">
                <div class="card-header pb-0 p-3">
                  <div class="d-flex align-items-center">
                    <h6 class="mb-0">Drop Contribution</h6>
                    <button
                      type="button"
                      class="btn btn-icon-only btn-rounded btn-outline-secondary btn-sm d-flex align-items-center justify-content-center ms-2"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      title="This metric shows the reasons for Dropping"
                    >
                      <i class="fas fa-info" aria-hidden="true"></i>
                    </button>
                    <div class="ms-auto">
                      <div class="dropdown pe-2">
                        <a
                          href="javascript:;"
                          class="text-white ps-4"
                          id="dropdownCard"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                        </a>
                        <ul
                          class="dropdown-menu dropdown-menu-end me-sm-n4 px-2 py-3"
                          aria-labelledby="dropdownCard"
                        >
                          <li>
                            <a
                              class="dropdown-item border-radius-md"
                              href="javascript:;"
                            >
                              <i class="fa-regular fa-share me-2"></i> Share
                              Report
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item border-radius-md"
                              href="javascript:;"
                            >
                              <i class="fa-regular fa-add me-2"></i> Add to
                              Report
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item border-radius-md"
                              href="javascript:;"
                            >
                              <i class="fa-regular fa-file-arrow-down me-2"></i>
                              Download PNG
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item border-radius-md"
                              href="javascript:;"
                            >
                              <i class="fa-regular fa-file-arrow-down me-2"></i>
                              Download PDF
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="drop-container ms-5 mb-4">
                  <div id="hcontainer" class="h-svg-container"></div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Hierarchy --> */}
          <div class="row m-3">
            <div class="col-5">
              <div class="card p-3 height-600">
                <div class="card-header pb-0 p-3">
                  <div class="d-flex align-items-center">
                    <h6 class="mb-0">Enrollment % of NBRx</h6>
                    <button
                      type="button"
                      class="btn btn-icon-only btn-rounded btn-outline-secondary btn-sm d-flex align-items-center justify-content-center ms-2"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      title="This metric is calculated by dividing the number of patients enrolled into the program by the number of patients who have a new Tremfya prescription for a given time period. 
                            Source: Ashfield and claims data"
                    >
                      <i class="fas fa-info" aria-hidden="true"></i>
                    </button>
                    <div class="ms-auto">
                      <div class="dropdown pe-2">
                        <a
                          href="javascript:;"
                          class="text-white ps-4"
                          id="dropdownCard"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                        </a>
                        <ul
                          class="dropdown-menu dropdown-menu-end me-sm-n4 px-2 py-3"
                          aria-labelledby="dropdownCard"
                        >
                          <li>
                            <a
                              class="dropdown-item border-radius-md"
                              href="javascript:;"
                            >
                              <i class="fa-regular fa-share me-2"></i> Share
                              Report
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item border-radius-md"
                              href="javascript:;"
                            >
                              <i class="fa-regular fa-add me-2"></i> Add to
                              Report
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item border-radius-md"
                              href="javascript:;"
                              onclick="enrollChartPng()"
                            >
                              <i class="fa-regular fa-file-arrow-down me-2"></i>
                              Download PNG
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item border-radius-md"
                              href="javascript:;"
                              onclick="enrollChartPdf()"
                            >
                              <i class="fa-regular fa-file-arrow-down me-2"></i>
                              Download PDF
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="chartdiv" id="enroll-nbrx"></div>
              </div>
            </div>
            <div class="col-7">
              <div class="card z-index-2 p-3 height-600">
                <div class="card-header pb-0 p-3">
                  <div class="d-flex align-items-center">
                    <h6 class="mb-0">Weekly Enrollments</h6>
                    <button
                      type="button"
                      class="btn btn-icon-only btn-rounded btn-outline-secondary btn-sm d-flex align-items-center justify-content-center ms-2"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      title=""
                    >
                      <i class="fas fa-info" aria-hidden="true"></i>
                    </button>
                    <div class="ms-auto">
                      <div class="dropdown pe-2">
                        <a
                          href="javascript:;"
                          class="text-white ps-4"
                          id="dropdownCard"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                        </a>
                        <ul
                          class="dropdown-menu dropdown-menu-end me-sm-n4 px-2 py-3"
                          aria-labelledby="dropdownCard"
                        >
                          <li>
                            <a
                              class="dropdown-item border-radius-md"
                              href="javascript:;"
                            >
                              <i class="fa-regular fa-share me-2"></i> Share
                              Report
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item border-radius-md"
                              href="javascript:;"
                            >
                              <i class="fa-regular fa-add me-2"></i> Add to
                              Report
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item border-radius-md"
                              href="javascript:;"
                              onclick="downloadPNGChart();"
                            >
                              <i class="fa-regular fa-file-arrow-down me-2"></i>
                              Download PNG
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item border-radius-md"
                              href="javascript:;"
                              onclick="downloadPDFChart();"
                            >
                              <i class="fa-regular fa-file-arrow-down me-2"></i>
                              Download PDF
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-body p-3">
                  <div class="chart min-height-300">
                    <canvas
                      id="chart-line"
                      class="chart-canvas"
                      height="500"
                    ></canvas>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer class="footer pt-3">
            <div class="container-fluid">
              <div class="row align-items-center justify-content-lg-between">
                <div class="col-lg-6 mb-lg-0 mb-4">
                  <div class="copyright text-center text-sm text-muted text-lg-start">
                    ©<script>document.write(new Date().getFullYear());</script>,
                    <a
                      href="https://ipghealth.com/network/90north"
                      class="font-weight-bold"
                      target="_blank"
                    >
                      90NORTH
                    </a>
                    An IPG Health Company
                  </div>
                </div>
                <div class="col-lg-6">
                  <ul class="nav nav-footer justify-content-center justify-content-lg-end">
                    <li class="nav-item">
                      <a
                        href="https://ipghealth.com/network/90north"
                        class="nav-link text-muted"
                        target="_blank"
                      >
                        90NORTH
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </React.Fragment>
  );
}

export default HomeDriver;
