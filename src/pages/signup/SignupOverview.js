import React, { useLayoutEffect } from "react";
import { appendScript } from "../utils/appendScript";
import { removeScript } from "../utils/removeScript";

import { singup_overview, d3_min } from "../comman/Constant";
import { funnelData } from "./data.js";
import FunnelGraph from "../components/FunnelGraph";

function SignupOverview(props) {
	useLayoutEffect(() => {
		appendScript(singup_overview);
		appendScript(d3_min);

		return () => {
			removeScript(singup_overview);
			removeScript(d3_min);
		};
	}, []);

	return (
		<React.Fragment>
			<div className="container-fluid py-4">
				<div className="row">
					<div className="col-lg-7 position-relative z-index-2">
						<div className="card card-plain mb-4">
							<div className="card-body p-3">
								<div className="row">
									<div className="col-lg-12">
										<div className="d-flex flex-column h-100">
											<h2 className="font-weight-bolder mb-0">
												Sign Up Overview
											</h2>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row mb-n4">
						<div className="col-12">
							<div className=" ">
								<div className="card-header pb-0 p-3">
									<div className="d-flex align-items-center">
										<h6 className="mb-0">Sign Up Overview</h6>
										<button
											type="button"
											className="btn btn-icon-only btn-rounded btn-outline-secondary btn-sm d-flex align-items-center justify-content-center ms-2"
											data-bs-toggle="tooltip"
											data-bs-placement="bottom"
											title="The funnel represents the number of users for a given period who entered the microsite, visited the submission page, and successfully completed the sign-up form so that a guide could contact them to enroll.">
											<i className="fas fa-info" aria-hidden="true"></i>
										</button>
										<div className="ms-auto">
											<div className="dropdown pe-2">
												<a
													href="javascript:;"
													className="text-white ps-4"
													id="dropdownCard"
													data-bs-toggle="dropdown"
													aria-expanded="false">
													<i
														className="fas fa-ellipsis-v"
														aria-hidden="true"></i>
												</a>
												<ul
													className="dropdown-menu dropdown-menu-end me-sm-n4 px-2 py-3"
													aria-labelledby="dropdownCard">
													<li>
														<a
															className="dropdown-item border-radius-md"
															href="javascript:;">
															<i className="fa-regular fa-share me-2"></i> Share
															Report
														</a>
													</li>
													<li>
														<a
															className="dropdown-item border-radius-md"
															href="javascript:;">
															<i className="fa-regular fa-add me-2"></i> Add to
															Report
														</a>
													</li>
													<li>
														<a
															className="dropdown-item border-radius-md"
															id="toPng">
															<i className="fa-regular fa-file-arrow-down me-2"></i>
															Download PNG
														</a>
													</li>
													<li>
														<a
															className="dropdown-item border-radius-md"
															// href="javascript:;"
															id="toPdf">
															<i className="fa-regular fa-file-arrow-down me-2"></i>
															Download PDF
														</a>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>

								<FunnelGraph
									id="funnel"
									direction="horizontal"
									data={funnelData}
								/>
								{/* <div id="f1" className="funnel funnel-container m-3"></div>
								<div id="f2" className="d-none"></div> */}
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- Progress Wrapper Chart --> */}
			<div className="row m-3 mt-n4 mb-4 z-index-2">
				<div className="col-12">
					<div className="z-index-3 p-4">
						<div className="card-header mx-3 pb-0 p-4">
							<div className="d-flex align-items-center">
								<h6 className="mb-0">Drop Contribution</h6>
								<button
									type="button"
									className="btn btn-icon-only btn-rounded btn-outline-secondary btn-sm d-flex align-items-center justify-content-center ms-2"
									data-bs-toggle="tooltip"
									data-bs-placement="bottom"
									title="This metric shows the Drop Contribution">
									<i className="fas fa-info" aria-hidden="true"></i>
								</button>
							</div>
						</div>
						<div className="row my-2 mx-3">
							<div className="col-6 p-4">
								<div className="progress-wrapper">
									<div className="progress-info">
										<div className="progress-percentage mb-2">
											<span className="text-sm font-weight-bold">
												<span id="signup_reject_percent"></span>% Dropoff
												Between Phases
											</span>
										</div>
									</div>
									<div className="progress progress-lg">
										<div
											className="progress-bar-lg bg-gradient-danger"
											role="progressbar"
											id="signup_reject_percent_progress"
											aria-valuenow="40"
											aria-valuemin="0"
											aria-valuemax="100"></div>
									</div>
								</div>
							</div>
							<div className="col-6 p-4">
								<div className="progress-wrapper">
									<div className="progress-info">
										<div className="progress-percentage mb-2">
											<span className="text-sm font-weight-bold">
												<span id="signup_reject_percent_drop"></span>% of Sign
												Up Page visitors didn't complete the Sign-up Form
											</span>
										</div>
									</div>
									<div className="progress progress-lg">
										<div
											className="progress-bar-lg bg-gradient-danger"
											role="progressbar"
											id="signup_reject_percent_drop_progress"
											aria-valuenow="60"
											aria-valuemin="0"
											aria-valuemax="100"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- End Drop Progress --> */}
			<div className="row m-3">
				<div className="col-lg-5">
					<div className="card p-3 z-index-2 height-400">
						<div className="card-header pb-0 p-3">
							<div className="d-flex align-items-center">
								<h6 className="mb-0">Sign Up Time Per Channel (seconds)</h6>
								<button
									type="button"
									className="btn btn-icon-only btn-rounded btn-outline-secondary btn-sm d-flex align-items-center justify-content-center ms-2"
									data-bs-toggle="tooltip"
									data-bs-placement="bottom"
									title="Sign Up Time Per Channel">
									<i className="fas fa-info" aria-hidden="true"></i>
								</button>
								<div className="ms-auto">
									<div className="dropdown pe-2">
										<a
											href="javascript:;"
											className="text-white ps-4"
											id="dropdownCard"
											data-bs-toggle="dropdown"
											aria-expanded="false">
											<i className="fas fa-ellipsis-v" aria-hidden="true"></i>
										</a>
										<ul
											className="dropdown-menu dropdown-menu-end me-sm-n4 px-2 py-3"
											aria-labelledby="dropdownCard">
											<li>
												<a
													className="dropdown-item border-radius-md"
													href="javascript:;">
													<i className="fa-regular fa-share me-2"></i> Share
													Report{" "}
												</a>
											</li>
											<li>
												<a
													className="dropdown-item border-radius-md"
													href="javascript:;">
													<i className="fa-regular fa-add me-2"></i> Add to
													Report
												</a>
											</li>
											<li>
												<a
													className="dropdown-item border-radius-md"
													href="javascript:;"
													onclick="downloadPNGChart(chartSignupTime,'Sign Up Time Per Channel (seconds)');">
													<i className="fa-regular fa-file-arrow-down me-2"></i>
													Download PNG
												</a>
											</li>
											<li>
												<a
													className="dropdown-item border-radius-md"
													href="javascript:;"
													onclick="downloadPDFChart('chart-bars','Sign Up Time Per Channel (seconds)')">
													<i className="fa-regular fa-file-arrow-down me-2"></i>{" "}
													Download PDF{" "}
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div className="card-body p-3">
							<div className="border-radius-lg py-3 pe-1 min-height-300">
								<div className="chart min-height-250">
									<canvas
										id="chart-bars"
										className="chart-canvas"
										height="100vh"></canvas>
								</div>
							</div>
							<div className="container border-radius-lg"></div>
						</div>
					</div>
				</div>
				<div className="col-lg-7">
					<div className="card p-3 z-index-2 height-400">
						<div className="card-header pb-0 p-3">
							<div className="d-flex align-items-center">
								<h6 className="mb-0">Users by Device Type</h6>
								<button
									type="button"
									className="btn btn-icon-only btn-rounded btn-outline-secondary btn-sm d-flex align-items-center justify-content-center ms-2"
									data-bs-toggle="tooltip"
									data-bs-placement="bottom"
									title="Compare how often users are accessing the microsite through their mobile phones, tablets, or desktop devices to ensure the user experience is optimized on all platforms.
								Source: Google Analytics">
									<i className="fas fa-info" aria-hidden="true"></i>
								</button>
								<div className="ms-auto">
									<div className="dropdown pe-2">
										<a
											href="javascript:;"
											className="text-white ps-4"
											id="dropdownCard"
											data-bs-toggle="dropdown"
											aria-expanded="false">
											<i className="fas fa-ellipsis-v" aria-hidden="true"></i>
										</a>
										<ul
											className="dropdown-menu dropdown-menu-end me-sm-n4 px-2 py-3"
											aria-labelledby="dropdownCard">
											<li>
												<a
													className="dropdown-item border-radius-md"
													href="javascript:;">
													<i className="fa-regular fa-share me-2"></i> Share
													Report{" "}
												</a>
											</li>
											<li>
												<a
													className="dropdown-item border-radius-md"
													href="javascript:;">
													<i className="fa-regular fa-add me-2"></i> Add to
													Report
												</a>
											</li>
											<li>
												<a
													className="dropdown-item border-radius-md"
													href="javascript:;"
													onclick="downloadPNGChart(chartDevice,'Users by Device Type');">
													<i className="fa-regular fa-file-arrow-down me-2"></i>
													Download PNG
												</a>
											</li>
											<li>
												<a
													className="dropdown-item border-radius-md"
													href="javascript:;"
													onclick="downloadPDFChart('chart-line','Users by Device Type')">
													<i className="fa-regular fa-file-arrow-down me-2"></i>{" "}
													Download PDF{" "}
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div className="card-body p-3">
							<div className="chart min-height-300">
								<canvas
									id="chart-line"
									className="chart-canvas"
									height="100vh"></canvas>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row m-3">
				<div className="col-5">
					<div className="card p-3 height-600">
						<div className="card-header pb-0 p-3 mb-2">
							<div className="d-flex align-items-center">
								<h6 className="mb-0">Acquisition Cost by Channel</h6>
								<button
									type="button"
									className="btn btn-icon-only btn-rounded btn-outline-secondary btn-sm d-flex align-items-center justify-content-center ms-2"
									data-bs-toggle="tooltip"
									data-bs-placement="bottom"
									title="Percentage of patients who view one page and leave.">
									<i className="fas fa-info" aria-hidden="true"></i>
								</button>
								<div className="ms-auto">
									<div className="dropdown pe-2">
										<a
											href="javascript:;"
											className="text-white ps-4"
											id="dropdownCard"
											data-bs-toggle="dropdown"
											aria-expanded="false">
											<i className="fas fa-ellipsis-v" aria-hidden="true"></i>
										</a>
										<ul
											className="dropdown-menu dropdown-menu-end me-sm-n4 px-2 py-3"
											aria-labelledby="dropdownCard">
											<li>
												<a
													className="dropdown-item border-radius-md"
													href="javascript:;">
													<i className="fa-regular fa-share me-2"></i> Share
													Report
												</a>
											</li>
											<li>
												<a
													className="dropdown-item border-radius-md"
													href="javascript:;">
													<i className="fa-regular fa-add me-2"></i> Add to
													Report
												</a>
											</li>
											<li>
												<a
													className="dropdown-item border-radius-md"
													href="javascript:;"
													onclick="apple1ChartPng()">
													<i className="fa-regular fa-file-arrow-down me-2"></i>
													Download PNG
												</a>
											</li>
											<li>
												<a
													className="dropdown-item border-radius-md"
													href="javascript:;"
													onclick="apple1ChartPdf()">
													<i className="fa-regular fa-file-arrow-down me-2"></i>
													Download PDF
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div className="apple1" id="apple1"></div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default SignupOverview;
