import React, { useEffect, useLayoutEffect, useState } from "react";

import LineChart from "../components/LineChart";
import {
	vennData,
	vennData1,
	mixChartData,
	mixChartData1,
	configEnrollLineChart,
	configConversionChart,
	funnelData1,
	funnelData,
	configLineChart,
	guideChartData,
	configPieChart,
} from "./data";
// import FunnelGraphChart from "../components/FunnelGraph";
import FunnelChart from "../components/FunnelGraph";
import M_Chart from "../components/M_Chart";
import HeatMapChart from "../components/HeatMapChart";
var filters = localStorage.getItem("filters");

function EnrollmentEngagement(props) {
	const [first, setfirst] = useState(vennData);
	const [chartData1, setChartData1] = useState({});
	const [testData, setTestData] = useState(configConversionChart);
	const [mixData, setMixData] = useState(mixChartData);

	const [filter, setFilter] = useState(filters);

	// useEffect(() => {
	// 	const fetchPrices = async () => {
	// 		// setFilter(filters);
	// 		const res = await fetch(
	// 			"https://kpi-tool.psglobalgroup.com/api/enrollment-engagement.php",
	// 			{ key: filter }
	// 		);
	// 		const data = await res.json();
	// 		console.log("data ==== ", data);
	// 		// setChartData1({
	// 		// 	labels: data.data.map((crypto) => crypto.name),
	// 		// 	datasets: [
	// 		// 		{
	// 		// 			label: "Price in USD",
	// 		// 			data: data.data.map((crypto) => crypto.priceUsd),
	// 		// 			backgroundColor: [
	// 		// 				"#ffbb11",
	// 		// 				"#ecf0f1",
	// 		// 				"#50AF95",
	// 		// 				"#f3ba2f",
	// 		// 				"#2a71d0",
	// 		// 			],
	// 		// 		},
	// 		// 	],
	// 		// });
	// 	};
	// 	fetchPrices();
	// }, [filters]);

	console.log("chartData1", chartData1);

	return (
		<React.Fragment>
			<div className="container-fluid py-4">
				<div className="row">
					<div className="col-8 z-index-2">
						<div className="card card-plain mb-4">
							<div className="card-body p-3">
								<div className="row">
									<div className="col-12">
										<div className="d-flex flex-column h-100">
											<h2 className="font-weight-bolder mb-0">
												Enrollment Engagement
											</h2>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-4">
						<div className="card">
							<div className="card-body p-3">
								<div className="row">
									<div className="col-8">
										<div className="numbers">
											<p className="text-sm mb-0 text-capitalize font-weight-bold">
												Weekly Engagement
											</p>
											<h5 className="font-weight-bolder mb-0">
												2,300
												<span className="text-success text-sm font-weight-bolder">
													+3%
												</span>
											</h5>
										</div>
									</div>
									<div className="col-4 text-end">
										<div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
											<i
												className="ni ni-world text-lg opacity-10"
												aria-hidden="true"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-4">
						<div className="card">
							<div className="card-body p-3">
								<div className="row">
									<div className="col-8">
										<div className="numbers">
											<p className="text-sm mb-0 text-capitalize font-weight-bold">
												Patients Enrolled
											</p>
											<h5 className="font-weight-bolder mb-0">
												<span id="total_enrollment_num" />
												<span
													className="text-danger text-sm font-weight-bolder"
													id="total_enrollment_percent">
													-2%
												</span>
											</h5>
										</div>
									</div>
									<div className="col-4 text-end">
										<div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
											<i
												className="ni ni-circle-08 text-lg opacity-10"
												aria-hidden="true"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-4">
						<div className="card">
							<div className="card-body p-3">
								<div className="row">
									<div className="col-8">
										<div className="numbers">
											<p className="text-sm mb-0 text-capitalize font-weight-bold">
												Preferred Communication Type
											</p>
											<h5 className="font-weight-bolder mb-0">
												<span id="top_engagement_num" />
												<span
													className="text-danger text-sm font-weight-bolder"
													id="top_engagement_percent">
													-2%
												</span>
											</h5>
										</div>
									</div>
									<div className="col-4 text-end">
										<div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
											<i
												className="ni ni-mobile-button text-lg opacity-10"
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
			<div className="row mx-3">
				<div className="col-7">
					<div className="card z-index-2 height-600">
						<div className="card-header pb-0 p-3">
							<div className="d-flex align-items-center">
								<h6 className="mb-0">Actual Enrolled Time of the Day</h6>
								<button
									type="button"
									className="btn btn-icon-only btn-rounded btn-outline-secondary btn-sm d-flex align-items-center justify-content-center ms-2"
									data-bs-toggle="tooltip"
									data-bs-placement="bottom"
									title="Track time preferences indicated by patients during signup to ensure guide availability during desired time of day.
									Source: Google Analytics">
									<i className="fas fa-info" aria-hidden="true" />
								</button>
								<div className="ms-auto">
									<div id="exportdiv"></div>
								</div>
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
													<i className="fa-regular fa-add me-2" /> Add to Report
												</a>
											</li>
											<li>
												<a
													className="dropdown-item border-radius-md"
													href="javascript:;"
													onclick="heattimeChartPng()">
													<i className="fa-regular fa-file-arrow-down me-2" />
													Download PNG
												</a>
											</li>
											<li>
												<a
													className="dropdown-item border-radius-md"
													href="javascript:;"
													onclick="heattimeChartPdf()">
													<i className="fa-regular fa-file-arrow-down me-2" />
													Download PDF
												</a>
											</li>
										</ul>
									</div>
								</div> */}
							</div>
						</div>
						<HeatMapChart data={vennData} />
						{/* <div id="heattime" /> */}
					</div>
				</div>
				<div className="col-5">
					<div className="card z-index-2 height-600">
						<div className="card-header pb-0 p-3">
							<div className="d-flex align-items-center">
								<h6 className="mb-0">Program Reach (NBRx)</h6>
								<button
									type="button"
									className="btn btn-icon-only btn-rounded btn-outline-secondary btn-sm d-flex align-items-center justify-content-center ms-2"
									data-bs-toggle="tooltip"
									data-bs-placement="bottom"
									title="Track our reach across patients who have a new Tremfya prescription for a given time period. See the change from the prior period. To see reach over Total Rx, visit the demographics screen. Source: Ashfield and claims data">
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
													<i className="fa-regular fa-add me-2" /> Add to Report
												</a>
											</li>
											<li>
												<a
													className="dropdown-item border-radius-md"
													href="javascript:;"
													onclick="gague1ChartPng()">
													<i className="fa-regular fa-file-arrow-down me-2" />
													Download PNG
												</a>
											</li>
											<li>
												<a
													className="dropdown-item border-radius-md"
													href="javascript:;"
													onclick="gague1ChartPdf()">
													<i className="fa-regular fa-file-arrow-down me-2" />
													Download PDF
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div className="chartdiv" id="gague1" />
					</div>
				</div>
			</div>
			<div className="row my-4 mx-3">
				<div className="col-5">
					<div className="card z-index-2 height-600">
						<div className="card-header pb-0 p-3 mb-2">
							<div className="d-flex align-items-center">
								<h6 className="mb-0">Welcome Call Performance</h6>
								<button
									type="button"
									className="btn btn-icon-only btn-rounded btn-outline-secondary btn-sm d-flex align-items-center justify-content-center ms-2"
									data-bs-toggle="tooltip"
									data-bs-placement="bottom"
									title="Monitor whether guides are able to reach patients and complete enrollment over the phone. Adjust call times based on preferences to improve conversion rates. Source: Ashfield">
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
													<i className="fa-regular fa-add me-2" /> Add to Report
												</a>
											</li>
											<li>
												<a
													className="dropdown-item border-radius-md"
													id="changetoPng">
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
						<FunnelChart
							id="funnel_chart"
							displayPercent={false}
							direction="vertical"
							data={funnelData1}
						/>
						{/* <div className="funnel funnel-container" id="funnel_chart" />
						<div id="f11" className="d-none" /> */}
					</div>
				</div>
				<div className="col-7">
					<div className="card z-index-2 height-600">
						<div className="card-header pb-0 p-3">
							<div className="d-flex align-items-center">
								<h6 className="mb-0">Preferred Communication Type</h6>
								<button
									type="button"
									className="btn btn-icon-only btn-rounded btn-outline-secondary btn-sm d-flex align-items-center justify-content-center ms-2"
									data-bs-toggle="tooltip"
									data-bs-placement="bottom"
									title=" Compare the number of patients who were referred to the program via sign-up">
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
														onclick="downloadPNGChart(engagementChart,'Preferred Communication Type');">
														<i className="fa-regular fa-file-arrow-down me-2" />
														Download PNG
													</a>
												</li>
												<li>
													<a
														className="dropdown-item border-radius-md"
														href="javascript:;"
														onclick="downloadPDFChart('line-chart','Preferred Communication Type')">
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
							<div className="chart min-height-300">
								<LineChart id="line-chart" config={configLineChart} />
								{/* <canvas id="line-chart" className="chart-canvas" height={500} /> */}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row mt-4 mx-3">
				<div className="col-7">
					<div className="card height-600">
						<div className="card-header pb-0 p-3">
							<div className="d-flex align-items-center">
								<h6 className="mb-0">Conversion Rate</h6>
								<button
									type="button"
									className="btn btn-icon-only btn-rounded btn-outline-secondary btn-sm d-flex align-items-center justify-content-center ms-2"
									data-bs-toggle="tooltip"
									data-bs-placement="bottom"
									title="Compare the number of patients who were referred to the program via sign-up and those who we actually enrolled. Hover over to see the percentage converted over a specific time period.
								Source: Ashfield">
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
														onclick="downloadPNGChart(chartConversion,'Conversion Rate');">
														<i className="fa-regular fa-file-arrow-down me-2" />
														Download PNG
													</a>
												</li>
												<li>
													<a
														className="dropdown-item border-radius-md"
														href="javascript:;"
														onclick="downloadPDFChart('conversion-chart','Conversion Rate')">
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
									id="conversion-chart"
									className="chart-canvas"
									height={500}
								/> */}
								<LineChart
									id="conversion-chart"
									config={configConversionChart}
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="col-5">
					<div className="card height-600">
						<div className="card-header pb-0 p-3">
							<div className="d-flex align-items-center">
								<h6 className="mb-0">Patients Per Guide</h6>
								<button
									type="button"
									className="btn btn-icon-only btn-rounded btn-outline-secondary btn-sm d-flex align-items-center justify-content-center ms-2"
									data-bs-toggle="tooltip"
									data-bs-placement="bottom"
									title="Use this metric to ensure guide resources are properly staffed to meet the demands of patients.
								Source: Ashfield">
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
														onclick="downloadPNGChart(chartGuideChart,'Patients Per Guide');">
														<i className="fa-regular fa-file-arrow-down me-2" />
														Download PNG
													</a>
												</li>
												<li>
													<a
														className="dropdown-item border-radius-md"
														href="javascript:;"
														onclick="downloadPDFChart('mixed-chart','Patients Per Guide')">
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
						<div className="card-body">
							<div className="chart">
								<M_Chart
									id="mixed-chart"
									// data={guideChartData}
									config={guideChartData}
								/>
								{/* <canvas
									id="mixed-chart"
									className="chart-canvas"
									height={480}
								/> */}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row mx-3 mt-4">
				<div className="col-7">
					<div className="card z-index-2">
						<div className="card-header pb-0 p-3">
							<div className="d-flex align-items-center">
								<h6 className="mb-0">Preferred Time Of Day</h6>
								<button
									type="button"
									className="btn btn-icon-only btn-rounded btn-outline-secondary btn-sm d-flex align-items-center justify-content-center ms-2"
									data-bs-toggle="tooltip"
									data-bs-placement="bottom"
									title="Compare the number of patients who were referred to the program via sign-up and those who we actually enrolled. Hover over to see the percentage converted over a specific time period.
								Source: Ashfield">
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
														onclick="downloadPNGChart(chartPieCHart,'Preferred Time Of Day');">
														<i className="fa-regular fa-file-arrow-down me-2" />
														Download PNG
													</a>
												</li>
												<li>
													<a
														className="dropdown-item border-radius-md"
														href="javascript:;"
														onclick="downloadPDFChart('pie-chart','Preferred Time Of Day')">
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
								<LineChart id="pie-chart" config={configPieChart} />

								{/* <canvas id="pie-chart" className="chart-canvas" height={400} /> */}
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
		</React.Fragment>
	);
}

export default EnrollmentEngagement;
