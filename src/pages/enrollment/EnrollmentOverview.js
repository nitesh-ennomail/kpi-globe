import React, { useEffect, useLayoutEffect, useState } from "react";
import { d3_min, enrollment_overview } from "../comman/Constant";
import FunnelChart from "../components/FunnelGraph";
import { appendScript } from "../utils/appendScript";
import { removeScript } from "../utils/removeScript";

// import { enrollment_overview, d3_min } from "../comman/Constant";
import { funnelData } from "./data";
import { funnelData1 } from "../home/data";

function EnrollmentOverview(props) {
	const [signup_welcome, setSignup_welcome] = useState(19);
	const [welcome_enrollment, setWelcome_enrollment] = useState(32);
	// const [data, setFunnelData] = useState(funnelData);
	useEffect(() => {
		// setFunnelData(funnelData);
		setSignup_welcome(60);
		setWelcome_enrollment(90);
	}, [funnelData]);

	// useLayoutEffect(() => {
	// 	appendScript(enrollment_overview);
	// 	appendScript(d3_min);

	// 	return () => {
	// 		removeScript(enrollment_overview);
	// 		removeScript(d3_min);
	// 	};
	// }, []);

	return (
		<React.Fragment>
			<div className="container-fluid py-4">
				<div className="row">
					<div className="col-10 position-relative z-index-2">
						<div className="card card-plain mb-4">
							<div className="card-body p-3">
								<div className="row">
									<div className="col-lg-6">
										<div className="d-flex flex-column h-100">
											<h2 className="font-weight-bolder mb-0">
												Enrollment Overview
											</h2>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-12 z-index-2">
							<div className="m-3">
								<div className="card-header pb-0 p-3">
									<div className="d-flex align-items-center">
										<h6 className="mb-0">Enrollment Overview</h6>
										<button
											type="button"
											className="btn btn-icon-only btn-rounded btn-outline-secondary btn-sm d-flex align-items-center justify-content-center ms-2"
											data-bs-toggle="tooltip"
											data-bs-placement="bottom"
											title="Monitor whether guides are able to reach patients and complete enrollment over the phone. Adjust call times based on preferences to improve conversion rates.
                                          Source: Ashfield">
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
								<FunnelChart data={funnelData} />

								{/* <div
									className="funnel funnel-container m-4"
									id="funnel_chart"
								/> */}
								{/* <div id="f2" className="d-none" /> */}
								<div className="method-buttons2 mt-4">
									<button
										className="bg-gradient-primary text-doyle"
										id="useData1">
										Enrollment Overview
									</button>
									<button className="bg-gradient-info text-doyle" id="useData2">
										Acquisition Cost
									</button>
								</div>
							</div>
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
													{/* <span id="signup_welcome_percent" /> */}
													{signup_welcome}% of patients who complete sign up
													forms didn't complete enrollment calls
												</span>
											</div>
										</div>
										<div className="progress progress-lg">
											<div
												className="progress-bar-lg bg-gradient-danger"
												role="progressbar"
												id="signup_welcome_percent_progress"
												aria-valuenow={32}
												aria-valuemin={0}
												aria-valuemax={100}
												style={{ width: `${signup_welcome}%` }}
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
													{/* <span id="welcome_enrollment_percent" /> */}
													{welcome_enrollment}% of patients who complete
													enrollment calls didn't get enrolled
												</span>
											</div>
										</div>
										<div className="progress progress-lg">
											<div
												className="progress-bar-lg bg-gradient-danger"
												role="progressbar"
												id="welcome_enrollment_percent_progress"
												aria-valuenow={60}
												aria-valuemin={0}
												aria-valuemax={100}
												style={{ width: `${welcome_enrollment}%` }}
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

export default EnrollmentOverview;
