import React, { useEffect, useLayoutEffect, useState } from "react";

function FulfillmentEngagement(props) {
	return (
		<React.Fragment>
			<div className="container-fluid py-4">
				<div className="row">
					<div className="col-8">
						<div className="card card-plain mb-4">
							<div className="card-body">
								<div className="row">
									<div className="col-10">
										<div className="d-flex flex-column h-100">
											<h2 className="font-weight-bolder mb-0">
												Fulfillment Engagement
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
						<div className="card p-2">
							<div className="card-header p-3 pb-0">
								<div className="d-flex align-items-center">
									<div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
										<i
											className="ni ni-money-coins text-lg opacity-10"
											aria-hidden="true"
										/>
									</div>
									<div className="ms-3">
										<p className="text-sm mb-0 text-capitalize font-weight-bold">
											Sample Program Cost Analysis
										</p>
										<h5 className="font-weight-bolder mb-0">$4,489</h5>
									</div>
									<button
										type="button"
										className="btn btn-icon-only btn-rounded btn-outline-secondary btn-sm d-flex align-items-center justify-content-center ms-2"
										data-bs-toggle="tooltip"
										data-bs-placement="bottom"
										title="Monitor the number and cost of samples distributed to patients as trial therapy or bridge therapy until insurance coverage is determined.">
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
														onclick="downloadPNGChart(chartCostAnalysis,'Sample Program Cost Analysis');">
														<i className="fa-regular fa-file-arrow-down me-2" />
														Download PNG
													</a>
												</li>
												<li>
													<a
														className="dropdown-item border-radius-md"
														href="javascript:;"
														onclick="downloadPDFChart('chart-line2','Sample Program Cost Analysis')">
														<i className="fa-regular fa-file-arrow-down me-2" />
														Download PDF
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className="card-body mt-3">
								<div className="chart">
									<canvas
										id="chart-line2"
										className="chart-canvas"
										height={225}
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="col-6">
						<div className="card p-2">
							<div className="card-header p-3 pb-0">
								<div className="d-flex align-items-center">
									<div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
										<i
											className="ni ni-curved-next text-lg opacity-10"
											aria-hidden="true"
										/>
									</div>
									<div className="ms-3">
										<p className="text-sm mb-0 text-capitalize font-weight-bold">
											Sample Program Conversion
										</p>
										<h5 className="font-weight-bolder mb-0">
											<span id="overall_conversion_num" />
										</h5>
									</div>
									<div className="progress-wrapper ms-auto w-30">
										<div className="progress-info">
											<div className="progress-percentage mb-2">
												<span className="text-xs font-weight-bold">
													Conversion Rate:
													<span id="overall_conversion" />%
												</span>
											</div>
										</div>
										<div className="progress">
											<div
												className="progress-bar bg-gradient-primary w-60"
												role="progressbar"
												aria-valuenow={60}
												aria-valuemin={0}
												aria-valuemax={100}
											/>
										</div>
									</div>
									<button
										type="button"
										className="btn btn-icon-only btn-rounded btn-outline-secondary btn-sm d-flex align-items-center justify-content-center ms-2"
										data-bs-toggle="tooltip"
										data-bs-placement="bottom"
										title="See how many patients convert from these sample programs to paid prescription fulfillment, and monitor the conversion rate changes over a period a time.">
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
														onclick="downloadPNGChart(chartProgramConversion,'Sample Program Conversion');">
														<i className="fa-regular fa-file-arrow-down me-2" />
														Download PNG
													</a>
												</li>
												<li>
													<a
														className="dropdown-item border-radius-md"
														href="javascript:;"
														onclick="downloadPDFChart('chart-line3','Sample Program Conversion')">
														<i className="fa-regular fa-file-arrow-down me-2" />
														Download PDF
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className="card-body mt-3">
								<div className="chart">
									<canvas
										id="chart-line3"
										className="chart-canvas"
										height={200}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row mt-4">
					<div className="col-5">
						<div className="card height-600">
							<div className="card-header pb-0 p-3">
								<div className="d-flex align-items-center">
									<h6 className="mb-0">Total Fulfillment VS NBRx</h6>
									<button
										type="button"
										className="btn btn-icon-only btn-rounded btn-outline-secondary btn-sm d-flex align-items-center justify-content-center ms-2"
										data-bs-toggle="tooltip"
										data-bs-placement="bottom"
										title=" Track the number of new prescriptions filled with the support of our program out of the total number of new-to-brand prescriptions for a given time period.  Source: Ashfield patient reporting and claims data.">
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
														id="radarChartPng">
														<i className="fa-regular fa-file-arrow-down me-2" />
														Download PNG
													</a>
												</li>
												<li>
													<a
														className="dropdown-item border-radius-md"
														href="javascript:;"
														id="radarChartPdf">
														<i className="fa-regular fa-file-arrow-down me-2" />
														Download PDF
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className="chartdiv" id="fulfill-rx" />
						</div>
					</div>
					<div className="col-7">
						<div className="card height-600">
							<div className="card-header pb-0 p-3">
								<div className="d-flex align-items-center">
									<h6 className="mb-0">Weekly Fulfillment</h6>
									<button
										type="button"
										className="btn btn-icon-only btn-rounded btn-outline-secondary btn-sm d-flex align-items-center justify-content-center ms-2"
										data-bs-toggle="tooltip"
										data-bs-placement="bottom"
										title=" Track the number of new prescriptions filled with the support of our program. Source: Ashfield patient reporting and claims data.">
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
														onclick="downloadPNGChart(chartWeeklyFulfillment,'Weekly Fulfillment');">
														<i className="fa-regular fa-file-arrow-down me-2" />
														Download PNG
													</a>
												</li>
												<li>
													<a
														className="dropdown-item border-radius-md"
														href="javascript:;"
														onclick="downloadPDFChart('chart-line','Weekly Fulfillment')">
														<i className="fa-regular fa-file-arrow-down me-2" />
														Download PDF
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
										height={500}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row mt-4">
					<div className="col-8">
						<div className="card height-600 p-3">
							<div className="card-header pb-0 p-3">
								<div className="d-flex align-items-center">
									<h6 className="mb-0">
										Average Time To Fill After Enrollment
									</h6>
									<button
										type="button"
										className="btn btn-icon-only btn-rounded btn-outline-secondary btn-sm d-flex align-items-center justify-content-center ms-2"
										data-bs-toggle="tooltip"
										data-bs-placement="bottom"
										title="Track the number of new prescriptions filled with the support of our program out of the total number of new-to-brand prescriptions for a given time period. Source: Ashfield patient reporting and claims data.">
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
														onclick="downloadPNGChart(chartAfterEnrollment,'Average Time To Fill After Enrollment');">
														<i className="fa-regular fa-file-arrow-down me-2" />
														Download PNG
													</a>
												</li>
												<li>
													<a
														className="dropdown-item border-radius-md"
														href="javascript:;"
														onclick="downloadPDFChart('chart-bars','Average Time To Fill After Enrollment')">
														<i className="fa-regular fa-file-arrow-down me-2" />
														Download PDF
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className="card-body p-3">
								<div className="border-radius-lg py-3 pe-1">
									<div className="chart mt-5 height-400">
										<canvas id="chart-bars" className="chart-canvas" />
									</div>
								</div>
								<div className="container border-radius-lg" />
							</div>
						</div>
					</div>
					<div className="col-4">
						<div className="card height-600">
							<div className="card-header pb-0 p-3">
								<div className="d-flex align-items-center">
									<h6 className="mb-0">With Me Guide Referrals</h6>
									<button
										type="button"
										className="btn btn-icon-only btn-rounded btn-outline-secondary btn-sm d-flex align-items-center justify-content-center ms-2"
										data-bs-toggle="tooltip"
										data-bs-placement="bottom"
										title="Track referrals to fulfillment resources available through Janssen by the withMe Guides. See which resources are most utilized, and which are underutilized to ensure patients are receiving the support they need. Sources: Ashfield and JCP">
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
														onclick="downloadPNGChart(chartGuideReferrals,'With Me Guide Referrals');">
														<i className="fa-regular fa-file-arrow-down me-2" />
														Download PNG
													</a>
												</li>
												<li>
													<a
														className="dropdown-item border-radius-md"
														href="javascript:;"
														onclick="downloadPDFChart('polar-chart','With Me Guide Referrals')">
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
										id="polar-chart"
										width={200}
										height={200}
										className="chart-canvas"
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

export default FulfillmentEngagement;
