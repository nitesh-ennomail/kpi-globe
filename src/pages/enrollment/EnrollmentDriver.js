import React, { useEffect, useLayoutEffect, useState } from "react";
import { appendScript, appendScriptHead } from "../utils/appendScript";
import { removeScript } from "../utils/removeScript";
// import {
// 	enrollment_driver,
// 	amcharts5index,
// 	amcharts5percent,
// 	amcharts5xy,
// 	amcharts5radar,
// 	amcharts5venn,
// 	amcharts5Animated,
// 	amcharts5Responsive,
// 	assestsJcp,
// 	amcharts5Exporting,
// 	filter,
// 	assetsPopper,
// 	assetsBootstrap,
// 	assetsScrollbar,
// 	assetsSmooth,
// 	assetsChartjs,
// 	barChart,
// } from "../comman/Constant";
import JcpVenn from "../components/JcpVenn";
import LineChart from "../components/LineChart";
import M_Chart from "../components/M_Chart";
import {
	vennData,
	vennData1,
	lineChartData,
	option1,
	lineChartData2,
	option2,
	mixChartData,
	mixChartData1,
} from "./data";

function EnrollmentOverview(props) {
	const [first, setfirst] = useState(vennData);
	const [chartData1, setChartData1] = useState({});
	const [testData, setTestData] = useState(lineChartData);
	const [mixData, setMixData] = useState(mixChartData);

	// useEffect(() => {
	// 	const fetchPrices = async () => {
	// 		const res = await fetch("https://api.coincap.io/v2/assets/?limit=5");
	// 		const data = await res.json();
	// 		console.log("data", data);
	// 		setChartData1({
	// 			labels: data.data.map((crypto) => crypto.name),
	// 			datasets: [
	// 				{
	// 					label: "Price in USD",
	// 					data: data.data.map((crypto) => crypto.priceUsd),
	// 					backgroundColor: [
	// 						"#ffbb11",
	// 						"#ecf0f1",
	// 						"#50AF95",
	// 						"#f3ba2f",
	// 						"#2a71d0",
	// 					],
	// 				},
	// 			],
	// 		});
	// 	};
	// 	fetchPrices();
	// }, []);

	console.log("chartData1", chartData1);

	return (
		<React.Fragment>
			<div className="container-fluid py-4">
				{/* <button onClick={() => setMixData(mixChartData1)}>click</button> */}
				<div className="row">
					<div className="col-8 position-relative z-index-2">
						<div className="card card-plain mb-4">
							<div className="card-body p-3">
								<div className="row">
									<div className="col-lg-10">
										<div className="d-flex flex-column h-100">
											<h2 className="font-weight-bolder mb-0">
												Enrollment Drivers
											</h2>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-4">
							<div className="card z-index-2 mb-2">
								<div className="card-body p-3">
									<div className="row">
										<div className="col-8">
											<div className="numbers">
												<p className="text-sm mb-0 text-capitalize font-weight-bold">
													SP Referrals
												</p>
												<h5 className="font-weight-bolder mb-0">
													53,000
													<span className="text-success text-sm font-weight-bolder">
														+55%
													</span>
												</h5>
											</div>
										</div>
										<div className="col-4 text-end">
											<div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
												<i
													className="ni ni-money-coins text-lg opacity-10"
													aria-hidden="true"
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-4">
							<div className="card z-index-2 mb-2">
								<div className="card-body p-3">
									<div className="row">
										<div className="col-8">
											<div className="numbers">
												<p className="text-sm mb-0 text-capitalize font-weight-bold">
													Other Referrals
												</p>
												<h5 className="font-weight-bolder mb-0">
													+3,462
													<span className="text-danger text-sm font-weight-bolder">
														-2%
													</span>
												</h5>
											</div>
										</div>
										<div className="col-4 text-end">
											<div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
												<i
													className="ni ni-paper-diploma text-lg opacity-10"
													aria-hidden="true"
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-4">
							<div className="card z-index-2 mb-2">
								<div className="card-body p-3">
									<div className="row">
										<div className="col-8">
											<div className="numbers">
												<p className="text-sm mb-0 text-capitalize font-weight-bold">
													JCP Referrals
												</p>
												<h5 className="font-weight-bolder mb-0">
													+3,462
													<span className="text-danger text-sm font-weight-bolder">
														-2%
													</span>
												</h5>
											</div>
										</div>
										<div className="col-4 text-end">
											<div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
												<i
													className="ni ni-paper-diploma text-lg opacity-10"
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
				<div className="row mt-4">
					<div className="col-7">
						<div className="card height-600 z-index-2">
							<div className="card-header pb-0 p-3">
								<div className="d-flex align-items-center">
									<h6 className="mb-0">Enrollment Overlap</h6>
									<button
										type="button"
										className="btn btn-icon-only btn-rounded btn-outline-secondary btn-sm d-flex align-items-center justify-content-center ms-2"
										data-bs-toggle="tooltip"
										data-bs-placement="bottom"
										title="Compare the overlap between JCP patients who are registered as TREMFYA patients and withMe Program enrollees to ensure a seamless transition to services.
											Source: JCP and Form Assembly">
										<i className="fas fa-info" aria-hidden="true" />
									</button>
									<div id="exportdiv"></div>

									{/* <div className="ms-auto">
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
														onclick="jcpvennChartPng()">
														<i className="fa-regular fa-file-arrow-down me-2" />
														Download PNG
													</a>
												</li>
												<li>
													<a
														className="dropdown-item border-radius-md"
														href="javascript:;"
														onclick="jcpvennChartPdf()">
														<i className="fa-regular fa-file-arrow-down me-2" />
														Download PDF
													</a>
												</li>
											</ul>
										</div>
									</div> */}
								</div>
							</div>
							<JcpVenn data={first} />
							{/* <div id="jcpvenn" />
							<div className="chartdiv-legend" id="chartdiv-legend" /> */}
						</div>
					</div>
					<div className="col-5">
						<div className="card height-600 z-index-2">
							<div className="card-header pb-0 p-3">
								<div className="d-flex align-items-center">
									<h6 className="mb-0">SP Referrals</h6>
									<button
										type="button"
										className="btn btn-icon-only btn-rounded btn-outline-secondary btn-sm d-flex align-items-center justify-content-center ms-2"
										data-bs-toggle="tooltip"
										data-bs-placement="bottom"
										title="SP Partner Performance
											See which specialty pharmacy partners are driving enrollment in the program. To see which pharmacies are filling scripts, visit the fulfillment demographics section.
											Sources: Specialty Pharmacy Data">
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
															onclick="downloadPNGChart(mixed_chart,'SP Referrals');">
															<i className="fa-regular fa-file-arrow-down me-2" />
															Download PNG
														</a>
													</li>
													<li>
														<a
															className="dropdown-item border-radius-md"
															href="javascript:;"
															onclick="downloadPDFChart('mixed-chart','SP Referrals')">
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
									{/* <canvas
										id="mixed-chart"
										className="chart-canvas"
										height={500}
									/> */}
									<M_Chart
										id="mixed-chart"
										data={mixData}
										// data={testData}
										// options={option1}
										// className="chart-canvas"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row mt-4">
					<div className="col-6">
						<div className="card z-index-2 height-600">
							<div className="card-header pb-0 p-3">
								<div className="d-flex align-items-center">
									<h6 className="mb-0">JCP Referral Type</h6>
									<button
										type="button"
										className="btn btn-icon-only btn-rounded btn-outline-secondary btn-sm d-flex align-items-center justify-content-center ms-2"
										data-bs-toggle="tooltip"
										data-bs-placement="bottom"
										title="JCP Channel Preferences
									JCP can refer patients to the withMe program in 3 ways:
									1) Warm transfer over the phone
									2) Via Text with the microsite link
									3) Clicking the link on the JCP website
									See which channel is driving the most signups week by week to make sure all channels are optimized.
									Sources: JCP and Google Analytics">
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
															onclick="downloadPNGChart(chartJCPReferral,'JCP Referral Type');">
															<i className="fa-regular fa-file-arrow-down me-2" />
															Download PNG
														</a>
													</li>
													<li>
														<a
															className="dropdown-item border-radius-md"
															href="javascript:;"
															onclick="downloadPDFChart('chart-line','JCP Referral Type')">
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
									<LineChart
										id="chart-line"
										// data={lineChartData}
										data={testData}
										options={option1}
										// className="chart-canvas"
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="col-6">
						<div className="card z-index-2 height-600">
							<div className="card-header pb-0 p-3">
								<div className="d-flex align-items-center">
									<h6 className="mb-0">
										Patients Assisted By Referral Channel
									</h6>
									<button
										type="button"
										className="btn btn-icon-only btn-rounded btn-outline-secondary btn-sm d-flex align-items-center justify-content-center ms-2"
										data-bs-toggle="tooltip"
										data-bs-placement="bottom"
										title="JCP Referral Type">
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
															onclick="downloadPNGChart(chartPatientsAssisted,'Patients Assisted By Referral Channel');">
															<i className="fa-regular fa-file-arrow-down me-2" />
															Download PNG
														</a>
													</li>
													<li>
														<a
															className="dropdown-item border-radius-md"
															href="javascript:;"
															onclick="downloadPDFChart('chart-line-2','Patients Assisted By Referral Channel')">
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
									{/* <canvas
										id="chart-line-2"
										className="chart-canvas"
										height={500}
									/> */}
									<LineChart
										id="chart-line-2"
										data={lineChartData2}
										options={option2}
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

export default EnrollmentOverview;
