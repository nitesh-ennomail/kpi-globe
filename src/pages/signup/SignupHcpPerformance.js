import React, { useLayoutEffect } from "react";
import { appendScript, appendScriptHead } from "../utils/appendScript";
import { removeScript } from "../utils/removeScript";

import {
	signup_hcp_preformance,
	signup_demographics_map,
	signup_demographics_geodata,
	signup_demographics_themes,
	signup_demographics_chartjs,
} from "../comman/Constant";

function SignupHcpPerformance(props) {
	useLayoutEffect(() => {
		appendScriptHead(signup_hcp_preformance);

		return () => {
			removeScript(signup_hcp_preformance);
		};
	}, []);

	return (
		<React.Fragment>
			<div className="container-fluid py-4">
				<div className="row">
					<div className="col-lg-8 position-relative z-index-2">
						<div className="card card-plain mb-4">
							<div className="card-body p-3">
								<div className="row">
									<div className="col-lg-8">
										<div className="d-flex flex-column h-100">
											<h2 className="font-weight-bolder mb-0">
												Signup HCP Performance
											</h2>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row mt-2">
						<div className="col-12">
							<h4 className>Sign-Ups Per HCP Count</h4>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<div className="row">
								<div className="col-4">
									<div className="card mb-4">
										<div className="card-body p-3">
											<div className="row">
												<div className="col-8">
													<div className="numbers">
														<p className="text-sm mb-0 text-capitalize font-weight-bold">
															English
														</p>
														<h5 className="font-weight-bolder mb-0">
															<span id="hcpSignUpEnglish" />
															<span
																className="text-success text-sm font-weight-bolder"
																id="hcpSignUpEnglishPercent">
																+3%
															</span>
														</h5>
													</div>
												</div>
												<div className="col-4 text-end">
													<div className="ms-auto icon icon-shape shadow border-radius-md text-center d-flex align-items-center bg-gradient-primary justify-content-center me-2">
														<i className="fa-solid fa-right-to-bracket fa-fw opacity-10 text-2xl text-white d-flex align-items-center justify-content-center" />
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-4">
									<div className="card mb-4">
										<div className="card-body p-3">
											<div className="row">
												<div className="col-8">
													<div className="numbers">
														<p className="text-sm mb-0 text-capitalize font-weight-bold">
															Spanish
														</p>
														<h5 className="font-weight-bolder mb-0">
															<span id="hcpSignUpSpanish" />
															<span
																className="text-success text-sm font-weight-bolder"
																id="hcpSignUpSpanishPercent">
																+3%
															</span>
														</h5>
													</div>
												</div>
												<div className="col-4 text-end">
													<div className="ms-auto icon icon-shape shadow border-radius-md text-center d-flex align-items-center bg-gradient-primary justify-content-center me-2">
														<i className="fa-solid fa-right-to-bracket fa-fw opacity-10 text-2xl text-white d-flex align-items-center justify-content-center" />
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-4">
									<div className="card mb-4">
										<div className="card-body p-3">
											<div className="row">
												<div className="col-8">
													<div className="numbers">
														<p className="text-sm mb-0 text-capitalize font-weight-bold">
															Total Downloads
														</p>
														<h5 className="font-weight-bolder mb-0">
															<span id="hcpSignUpTotal" />
															<span
																className="text-success text-sm font-weight-bolder"
																id="hcpSignUpTotalPercent">
																+3%
															</span>
														</h5>
													</div>
												</div>
												<div className="col-4 text-end">
													<div className="ms-auto icon icon-shape shadow border-radius-md text-center d-flex align-items-center bg-gradient-primary justify-content-center me-2">
														<i className="fa-solid fa-right-to-bracket fa-fw opacity-10 text-2xl text-white d-flex align-items-center justify-content-center" />
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<h4 className>Patient Brochure Downloads From HCP Site</h4>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<div className="row">
								<div className="col-4">
									<div className="card mb-4">
										<div className="card-body p-3">
											<div className="row">
												<div className="col-8">
													<div className="numbers">
														<p className="text-sm mb-0 text-capitalize font-weight-bold">
															English
														</p>
														<h5 className="font-weight-bolder mb-0">
															<span id="patientBrochureDownloadEnglish" />
															<span
																className="text-success text-sm font-weight-bolder"
																id="patientBrochureDownloadEnglishPercent">
																+3%
															</span>
														</h5>
													</div>
												</div>
												<div className="col-4 text-end">
													<div className="ms-auto icon icon-shape shadow border-radius-md text-center d-flex align-items-center bg-gradient-primary justify-content-center me-2">
														<i className="fa-solid fa-language fa-fw opacity-10 text-2xl text-white d-flex align-items-center justify-content-center" />
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-4">
									<div className="card mb-4">
										<div className="card-body p-3">
											<div className="row">
												<div className="col-8">
													<div className="numbers">
														<p className="text-sm mb-0 text-capitalize font-weight-bold">
															Spanish
														</p>
														<h5 className="font-weight-bolder mb-0">
															<span id="patientBrochureDownloadSpanish" />
															<span
																className="text-success text-sm font-weight-bolder"
																id="patientBrochureDownloadSpanishPercent">
																+3%
															</span>
														</h5>
													</div>
												</div>
												<div className="col-4 text-end">
													<div className="ms-auto icon icon-shape shadow border-radius-md text-center d-flex align-items-center bg-gradient-primary justify-content-center me-2">
														<i className="fa-solid fa-language fa-fw opacity-10 text-2xl text-white d-flex align-items-center justify-content-center" />
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-4">
									<div className="card mb-4">
										<div className="card-body p-3">
											<div className="row">
												<div className="col-8">
													<div className="numbers">
														<p className="text-sm mb-0 text-capitalize font-weight-bold">
															Total Downloads
														</p>
														<h5 className="font-weight-bolder mb-0">
															<span id="patientBrochureDownloadTotal" />
															<span
																className="text-success text-sm font-weight-bolder"
																id="patientBrochureDownloadTotalPercent">
																+3%
															</span>
														</h5>
													</div>
												</div>
												<div className="col-4 text-end">
													<div className="ms-auto icon icon-shape shadow border-radius-md text-center d-flex align-items-center bg-gradient-primary justify-content-center me-2">
														<i className="fa-solid fa-language fa-fw opacity-10 text-2xl text-white d-flex align-items-center justify-content-center" />
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<h4 className>Specialty Pharmacy List Downloads From HCP Site</h4>
						</div>
						<div className="col-lg-6" />
					</div>
					<div className="row">
						<div className="col-12">
							<div className="row">
								<div className="col-4">
									<div className="card mb-4">
										<div className="card-body p-3">
											<div className="row">
												<div className="col-8">
													<div className="numbers">
														<p className="text-sm mb-0 text-capitalize font-weight-bold">
															English
														</p>
														<h5 className="font-weight-bolder mb-0">
															<span id="spBrochureDownloadEnglish" />
															<span
																className="text-success text-sm font-weight-bolder"
																id="spBrochureDownloadEnglishPercent">
																+3%
															</span>
														</h5>
													</div>
												</div>
												<div className="col-4 text-end">
													<div className="ms-auto icon icon-shape shadow border-radius-md text-center d-flex align-items-center bg-gradient-primary justify-content-center me-2">
														<i className="fa-solid fa-language fa-fw opacity-10 text-2xl text-white d-flex align-items-center justify-content-center" />
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-4">
									<div className="card mb-4">
										<div className="card-body p-3">
											<div className="row">
												<div className="col-8">
													<div className="numbers">
														<p className="text-sm mb-0 text-capitalize font-weight-bold">
															Spanish
														</p>
														<h5 className="font-weight-bolder mb-0">
															<span id="spBrochureDownloadSpanish" />
															<span
																className="text-success text-sm font-weight-bolder"
																id="spBrochureDownloadSpanishPercent">
																+3%
															</span>
														</h5>
													</div>
												</div>
												<div className="col-4 text-end">
													<div className="ms-auto icon icon-shape shadow border-radius-md text-center d-flex align-items-center bg-gradient-primary justify-content-center me-2">
														<i className="fa-solid fa-language fa-fw opacity-10 text-2xl text-white d-flex align-items-center justify-content-center" />
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-4">
									<div className="card mb-4">
										<div className="card-body p-3">
											<div className="row">
												<div className="col-8">
													<div className="numbers">
														<p className="text-sm mb-0 text-capitalize font-weight-bold">
															Total Downloads
														</p>
														<h5 className="font-weight-bolder mb-0">
															<span id="spBrochureDownloadTotal" />
															<span
																className="text-success text-sm font-weight-bolder"
																id="spBrochureDownloadTotalPercent">
																+3%
															</span>
														</h5>
													</div>
												</div>
												<div className="col-4 text-end">
													<div className="ms-auto icon icon-shape shadow border-radius-md text-center d-flex align-items-center bg-gradient-primary justify-content-center me-2">
														<i className="fa-solid fa-language fa-fw opacity-10 text-2xl text-white d-flex align-items-center justify-content-center" />
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
				<div className="row mt-2">
					<div className="col-7">
						<div className="card height-600 z-index-2">
							<div className="card-header pb-0 p-3">
								<div className="d-flex align-items-center">
									<h6 className="mb-0">Accounts Educated by Week</h6>
									<button
										type="button"
										className="btn btn-icon-only btn-rounded btn-outline-secondary btn-sm d-flex align-items-center justify-content-center ms-2"
										data-bs-toggle="tooltip"
										data-bs-placement="bottom"
										title="See how many HCP accounts are educated by either FRAS Rheum or FRAS Derm team on a weekly basis. See the change from the prior period.">
										<i className="fas fa-info" aria-hidden="true" />
									</button>
									<div className="ms-auto">
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
															href="javascript:;"
															onclick="downloadPNGChart(chartAccountEducated,'Accounts Educated by Week');">
															<i className="fa-regular fa-file-arrow-down me-2" />
															Download PNG
														</a>
													</li>
													<li>
														<a
															className="dropdown-item border-radius-md"
															href="javascript:;"
															onclick="downloadPDFChart('chart-line','Accounts Educated by Week')">
															<i className="fa-regular fa-file-arrow-down me-2" />
															Download PDF
														</a>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="card-body p-3">
								<div className="chart">
									<canvas
										id="chart-line"
										className="chart-canvas"
										height={500}
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="col-5 mb-lg-0 mb-4">
						<div className="card height-600 z-index-2">
							<div className="card-header pb-0 p-3">
								<div className="d-flex align-items-center">
									<h6 className="mb-0">HCP Flash Cards Used</h6>
									<button
										type="button"
										className="btn btn-icon-only btn-rounded btn-outline-secondary btn-sm d-flex align-items-center justify-content-center ms-2"
										data-bs-toggle="tooltip"
										data-bs-placement="bottom"
										title="HCP AWARENESS AND INTEREST
                    Track the weekly usage of HCP Flashcards by FRAS. See the breakdown of requests by Dermatologists and Rheumatologists and FRAS consultations for each HCP specialty.">
										<i className="fas fa-info" aria-hidden="true" />
									</button>
									<div className="ms-auto">
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
															href="javascript:;"
															onclick="downloadPNGChart(chartFlashCardUsed,'HCP Flash Cards Used');">
															<i className="fa-regular fa-file-arrow-down me-2" />
															Download PNG
														</a>
													</li>
													<li>
														<a
															className="dropdown-item border-radius-md"
															href="javascript:;"
															onclick="downloadPDFChart('chart-bars','HCP Flash Cards Used')">
															<i className="fa-regular fa-file-arrow-down me-2" />
															Download PDF
														</a>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="card-body height-500 p-3">
								<div className="border-radius-lg py-3 pe-1 mb-3">
									<div className="chart">
										<canvas
											id="chart-bars"
											className="chart-canvas"
											height={450}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row mt-4">
					<div className="col-12">
						<div className="card px-5 pb-6">
							<div className="card-header mt-3 px-0">
								<div className="d-flex align-items-center">
									<h6 className="mb-0">HCP Account Signups By State</h6>
									<button
										type="button"
										className="btn btn-icon-only btn-rounded btn-outline-secondary btn-sm d-flex align-items-center justify-content-center ms-2"
										data-bs-toggle="tooltip"
										data-bs-placement="bottom"
										title>
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
														href="javascript:;"
														onclick="heatChartPng()">
														<i className="fa-regular fa-file-arrow-down me-2" />
														Download PNG
													</a>
												</li>
												<li>
													<a
														className="dropdown-item border-radius-md"
														href="javascript:;"
														onclick="heatChartPdf()">
														<i className="fa-regular fa-file-arrow-down me-2" />
														Download PDF
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className="chartdiv" id="us-heatmap" />
						</div>
					</div>
				</div>
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

export default SignupHcpPerformance;
