import React, { useEffect, useLayoutEffect, useState } from "react";
import { funnelData } from "./data";
import FunnelChart from "../components/FunnelGraph";

function FulfillmentOverview(props) {
	return (
		<React.Fragment>
			<div>
				{/* End Navbar */}
				<div className="container-fluid py-4">
					<div className="row">
						<div className="col-lg-7 position-relative z-index-2">
							<div className="card card-plain mb-4">
								<div className="card-body p-3">
									<div className="row">
										<div className="col-lg-6">
											<div className="d-flex flex-column h-100">
												<h2 className="font-weight-bolder mb-0">Fulfillment</h2>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-12 z-index-2">
							{/* <div class=" "> */}
							<div className="card-header pb-0 p-3">
								<div className="d-flex align-items-center">
									<h6 className="mb-0">Program Overview</h6>
									<button
										type="button"
										className="btn btn-icon-only btn-rounded btn-outline-secondary btn-sm d-flex align-items-center justify-content-center ms-2"
										data-bs-toggle="tooltip"
										data-bs-placement="bottom"
										title="This metric shows the Drop Contribution">
										<i className="fas fa-info" aria-hidden="true" />
									</button>
									<div className="ms-auto">
										<div className="dropdown pe-2">
											<a
												href="javascript:;"
												className="text-white ps-4"
												id="dropdownCard"
												data-bs-toggle="dropdown"
												aria-expanded="false">
												<i className="fas fa-ellipsis-v" aria-hidden="true" />
											</a>
											<ul
												className="dropdown-menu dropdown-menu-end me-sm-n4 px-2 py-3"
												aria-labelledby="dropdownCard">
												<li>
													<a
														className="dropdown-item border-radius-md"
														href="javascript:;">
														<i className="fa-regular fa-share me-2" /> Share
														Report
													</a>
												</li>
												<li>
													<a
														className="dropdown-item border-radius-md"
														href="javascript:;">
														<i className="fa-regular fa-add me-2" /> Add to
														Report
													</a>
												</li>
												<li>
													<a
														className="dropdown-item border-radius-md"
														id="toPng">
														<i className="fa-regular fa-file-arrow-down me-2" />
														Download PNG
													</a>
												</li>
												<li>
													<a
														className="dropdown-item border-radius-md"
														href="javascript:;"
														id="toPdf">
														<i className="fa-regular fa-file-arrow-down me-2" />
														Download PDF
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							{/* <div
								className="funnel funnel-container mt-4 mb-4"
								id="funnel_chart"
							/> */}
							<FunnelChart
								id="funnel_chart"
								direction="horizontal"
								data={funnelData}
							/>
							{/* <div id="f2" className="d-none" /> */}
							<div className="method-buttons2">
								<button
									className="bg-gradient-primary text-doyle"
									id="useData1">
									Program Overview
								</button>
							</div>
							{/* </div> */}
						</div>
					</div>
				</div>
				{/* Progress Wrapper Chart */}
				<div className="row m-3">
					<div className="col-12">
						<div className="card p-4">
							<div className="card-header mx-3 pb-0 p-4">
								<div className="d-flex align-items-center">
									<h6 className="mb-0">Drop Contribution</h6>
									<button
										type="button"
										className="btn btn-icon-only btn-rounded btn-outline-secondary btn-sm d-flex align-items-center justify-content-center ms-2"
										data-bs-toggle="tooltip"
										data-bs-placement="bottom"
										title="This metric shows the Drop Contribution">
										<i className="fas fa-info" aria-hidden="true" />
									</button>
								</div>
							</div>
							<div className="row my-2 mx-3">
								<div className="col-12 p-4">
									<div className="progress-wrapper">
										<div className="progress-info">
											<div className="progress-percentage mb-2">
												<span className="text-sm font-weight-bold">
													<span id="signup_welcome_percent" />% of patients who
													requested fulfillment support didn't get their
													benefits/samples verified
												</span>
											</div>
										</div>
										<div className="progress progress-lg">
											<div
												className="progress-bar-lg bg-gradient-danger"
												role="progressbar"
												aria-valuenow={60}
												aria-valuemin={0}
												aria-valuemax={100}
												id="signup_welcome_percent_progress"
											/>
										</div>
									</div>
								</div>
							</div>
							<div className="row mx-3 my-2">
								<div className="col-12 p-4">
									<div className="progress-wrapper">
										<div className="progress-info">
											<div className="progress-percentage mb-2">
												<span className="text-sm font-weight-bold">
													<span id="welcome_enrollment_percent" />% of patients
													who got their benefits/samples verified had no
													medication shipped
												</span>
											</div>
										</div>
										<div className="progress progress-lg">
											<div
												className="progress-bar-lg bg-gradient-danger"
												role="progressbar"
												aria-valuenow={60}
												aria-valuemin={0}
												aria-valuemax={100}
												id="welcome_enrollment_percent_progress"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* End Drop Progress */}
				<footer className="footer pt-3">
					<div className="container-fluid">
						<div className="row align-items-center justify-content-lg-between">
							<div className="col-lg-6 mb-lg-0 mb-4">
								<div className="copyright text-center text-sm text-muted text-lg-start">
									© ,
									<a
										href="https://ipghealth.com/network/90north"
										className="font-weight-bold"
										target="_blank">
										90NORTH
									</a>
									An IPG Health Company
								</div>
							</div>
						</div>
					</div>
				</footer>
			</div>
		</React.Fragment>
	);
}

export default FulfillmentOverview;
