import React, { useLayoutEffect } from "react";
import { appendScript } from "../utils/appendScript";
import { removeScript } from "../utils/removeScript";

import {
	signup_demographics,
	signup_demographics_map,
	signup_demographics_geodata,
	signup_demographics_themes,
	signup_demographics_chartjs,
} from "../comman/Constant";

function SignupDemographics(props) {
	useLayoutEffect(() => {
		appendScript(signup_demographics_map);
		appendScript(signup_demographics_geodata);
		appendScript(signup_demographics_themes);
		appendScript(signup_demographics_chartjs);
		appendScript(signup_demographics);

		return () => {
			removeScript(signup_demographics);
			removeScript(signup_demographics_map);
			removeScript(signup_demographics_geodata);
			removeScript(signup_demographics_themes);
			removeScript(signup_demographics_chartjs);
		};
	}, []);

	return (
		<React.Fragment>
			<div className="container-fluid py-4">
				<div className="row">
					<div className="col-10 position-relative z-index-2">
						<div className="card card-plain mb-4">
							<div className="card-body p-3">
								<div className="row">
									<div className="col-12">
										<div className="d-flex flex-column h-100">
											<h2 className="font-weight-bolder mb-0">
												Signup Demographics
											</h2>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-6">
						<h4 className>Insurance Type</h4>
					</div>
					<div className="col-6">
						<h4 className>Preferred Language</h4>
					</div>
				</div>
				<div className="row">
					<div className="col-6">
						<div className="row">
							<div className="col-6">
								<div className="card mb-3">
									<div className="card-body p-3">
										<div className="row">
											<div className="col-9">
												<div className="numbers">
													<p className="text-sm mb-0 text-capitalize font-weight-bold">
														Commercial
													</p>
													<h5 className="font-weight-bolder mb-0">
														<span id="insurance_commercial" />
														<span
															className="text-success text-sm font-weight-bolder"
															id="insurance_commercial_diff">
															+3%
														</span>
													</h5>
												</div>
											</div>
											<div className="col-3 text-end">
												<div className="icon icon-shape shadow border-radius-md bg-gradient-primary text-center d-flex align-items-center justify-content-center">
													<i
														className="fa-solid fa-money-bill text-lg opacity-10"
														aria-hidden="true"
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-6">
								<div className="card z-index-2 mb-3">
									<div className="card-body p-3">
										<div className="row">
											<div className="col-9">
												<div className="numbers">
													<p className="text-sm mb-0 text-capitalize font-weight-bold">
														Government
													</p>
													<h5 className="font-weight-bolder mb-0">
														<span id="insurance_government" />
														<span
															className="text-success text-sm font-weight-bolder"
															id="insurance_government_figg">
															+3%
														</span>
													</h5>
												</div>
											</div>
											<div className="col-3 text-end">
												<div className="icon icon-shape shadow border-radius-md bg-gradient-primary text-center d-flex align-items-center justify-content-center">
													<i
														className="fa-solid fa-university text-lg opacity-10"
														aria-hidden="true"
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-6">
						<div className="row">
							<div className="col-6">
								<div className="card mb-3">
									<div className="card-body p-3">
										<div className="row">
											<div className="col-9">
												<div className="numbers">
													<p className="text-sm mb-0 text-capitalize font-weight-bold">
														Spanish
													</p>
													<h5 className="font-weight-bolder mb-0">
														<span id="guide_spanish" />
														<span
															className="text-success text-sm font-weight-bolder"
															id="guide_spanish_diff">
															+3%
														</span>
													</h5>
												</div>
											</div>
											<div className="col-3 text-end">
												<div className="icon icon-shape shadow border-radius-md bg-gradient-primary text-center d-flex align-items-center justify-content-center">
													<i
														className="fa-solid fa-language text-lg opacity-10"
														aria-hidden="true"
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-6">
								<div className="card z-index-2 mb-3">
									<div className="card-body p-3">
										<div className="row">
											<div className="col-9">
												<div className="numbers">
													<p className="text-sm mb-0 text-capitalize font-weight-bold">
														English
													</p>
													<h5 className="font-weight-bolder mb-0">
														<span id="guide_english" />
														<span
															className="text-success text-sm font-weight-bolder"
															id="guide_english_diff">
															+3%
														</span>
													</h5>
												</div>
											</div>
											<div className="col-3 text-end">
												<div className="icon icon-shape shadow border-radius-md bg-gradient-primary text-center d-flex align-items-center justify-content-center">
													<i
														className="fa-solid fa-language text-lg opacity-10"
														aria-hidden="true"
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row my-4">
					<div className="col-7">
						<div className="card z-index-2 p-3">
							<div className="card-header pb-0 p-3">
								<div className="d-flex align-items-center">
									<h6 className="mb-0">Basic Demographics</h6>
									<button
										type="button"
										className="btn btn-icon-only btn-rounded btn-outline-secondary btn-sm d-flex align-items-center justify-content-center ms-2"
										data-bs-toggle="tooltip"
										data-bs-placement="bottom"
										title="See the makeup of the population in terms of age groups and gender assigned at birth. Hover over each bar to compare our reach against the total Tremfya population. Source: Ashfield and Claims data">
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
														onclick="downloadPNGChart(chartjsBarAge,'Basic Demographics');">
														<i className="fa-regular fa-file-arrow-down me-2" />
														Download PNG
													</a>
												</li>
												<li>
													<a
														className="dropdown-item border-radius-md"
														href="javascript:;"
														onclick="downloadPDFChart('chart-bars','Basic Demographics')">
														<i className="fa-regular fa-file-arrow-down me-2" />
														Download PDF
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className="chart height-500">
								<canvas
									id="chart-bars"
									className="chart-canvas"
									height="400px"
								/>
							</div>
						</div>
					</div>
					<div className="col-5">
						<div className="card z-index-2 p-3">
							<div className="card-header pb-0 p-3">
								<div className="d-flex align-items-center">
									<h6 className="mb-0">Enrollment/Total RX</h6>
									<button
										type="button"
										className="btn btn-icon-only btn-rounded btn-outline-secondary btn-sm d-flex align-items-center justify-content-center ms-2"
										data-bs-toggle="tooltip"
										data-bs-placement="bottom"
										title="PROGRAM REACH (Total Rx)
										Track our reach across the entire population of patients who have a new or existing Tremfya prescription for a given time period. See the change from the prior period. To see reach over NBRx, visit the engagement screen.
										Source: Ashfield and claims data">
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
														onclick="enrollChartPng()">
														<i className="fa-regular fa-file-arrow-down me-2" />
														Download PNG
													</a>
												</li>
												<li>
													<a
														className="dropdown-item border-radius-md"
														href="javascript:;"
														onclick="enrollChartPdf()">
														<i className="fa-regular fa-file-arrow-down me-2" />
														Download PDF
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className="chartdiv" id="enroll-total-rx" />
						</div>
					</div>
				</div>
				<div className="row mt-4">
					<div className="col-12">
						<div className="card px-5 pb-6">
							<div className="card-header mt-3 px-0">
								<div className="d-flex align-items-center">
									<h6 className="mb-0">Program Reach By State</h6>
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
							<div id="us-heatmap1" />
						</div>
					</div>
				</div>
				<div className="row mt-4">
					<div className="col-4">
						<div className="card p-3 z-index-2">
							<div className="card-header pb-0 p-3">
								<div className="d-flex align-items-center">
									<h6 className="mb-0">Age Groups</h6>
									<button
										type="button"
										className="btn btn-icon-only btn-rounded btn-outline-secondary btn-sm d-flex align-items-center justify-content-center ms-2"
										data-bs-toggle="tooltip"
										data-bs-placement="bottom"
										title="See the age groups of both the Total Rx population and Enrolled patients over a period of time. Hover over each age group to compare signups against the total prescription population.
									Source: Ashfield and Claims data">
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
														onclick="downloadPNGChart(chartjsRadarAge,'radar-chart');">
														<i className="fa-regular fa-file-arrow-down me-2" />
														Download PNG
													</a>
												</li>
												<li>
													<a
														className="dropdown-item border-radius-md"
														href="javascript:;"
														onclick="downloadPDFChart('radar-chart','Age Groups')">
														<i className="fa-regular fa-file-arrow-down me-2" />
														Download PDF
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className="card-body">
								<div className="chart">
									<canvas
										id="radar-chart"
										className="chart-canvas"
										height="400px"
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="col-4">
						<div className="card p-3 z-index-2">
							<div className="card-header pb-0 p-3">
								<div className="d-flex align-items-center">
									<h6 className="mb-0">Income Level</h6>
									<button
										type="button"
										className="btn btn-icon-only btn-rounded btn-outline-secondary btn-sm d-flex align-items-center justify-content-center ms-2"
										data-bs-toggle="tooltip"
										data-bs-placement="bottom"
										title="See the age groups of both the Total Rx population and Enrolled patients over a period of time. Hover over each age group to compare signups against the total prescription population.
									Source: Ashfield and Claims data">
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
														onclick="downloadPNGChart(radarChart2,'radar-chart2');">
														<i className="fa-regular fa-file-arrow-down me-2" />
														Download PNG
													</a>
												</li>
												<li>
													<a
														className="dropdown-item border-radius-md"
														href="javascript:;"
														onclick="downloadPDFChart('radar-chart2','Age Groups')">
														<i className="fa-regular fa-file-arrow-down me-2" />
														Download PDF
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className="card-body">
								<div className="chart">
									<canvas
										id="radar-chart2"
										className="chart-canvas"
										height="400px"
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="col-4">
						<div className="card p-3 z-index-2">
							<div className="card-header pb-0 p-3">
								<div className="d-flex align-items-center">
									<h6 className="mb-0">Ethnicity</h6>
									<button
										type="button"
										className="btn btn-icon-only btn-rounded btn-outline-secondary btn-sm d-flex align-items-center justify-content-center ms-2"
										data-bs-toggle="tooltip"
										data-bs-placement="bottom"
										title="See the age groups of both the Total Rx population and Enrolled patients over a period of time. Hover over each age group to compare signups against the total prescription population.
									Source: Ashfield and Claims data">
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
														onclick="downloadPNGChart(radarChart3,'radar-chart3');">
														<i className="fa-regular fa-file-arrow-down me-2" />
														Download PNG
													</a>
												</li>
												<li>
													<a
														className="dropdown-item border-radius-md"
														href="javascript:;"
														onclick="downloadPDFChart('radar-chart3','Age Groups')">
														<i className="fa-regular fa-file-arrow-down me-2" />
														Download PDF
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className="card-body">
								<div className="chart">
									<canvas
										id="radar-chart3"
										className="chart-canvas"
										height="400px"
									/>
								</div>
							</div>
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

export default SignupDemographics;
