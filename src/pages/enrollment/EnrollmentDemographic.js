import React, { useEffect, useLayoutEffect, useState } from "react";

import LineChart from "../components/LineChart";
import MeterChart from "../components/MeterChart";
import HeatMapChart from "../components/HeatMapChart";

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
// import FunnelChart from "../components/FunnelGraph";
// import M_Chart from "../components/M_Chart";
// import HeatMapChart from "../components/HeatMapChart";
// import MeterChart from "../components/MeterChart";
var filters = localStorage.getItem("filters");

function EnrollmentDemographic(props) {
	// const [first, setfirst] = useState(vennData);
	const [chartData1, setChartData1] = useState({});
	// const [testData, setTestData] = useState(configConversionChart);
	// const [mixData, setMixData] = useState(mixChartData);

	//API
	const [heatMapData, setHeatMapData] = useState();
	const [heatMapXData, setHeatMapXData] = useState();
	const [heatMapYData, setHeatMapYData] = useState();
	const [funnelChartData, setFunnelChartData] = useState();
	const [lineChartData, setLineChartData] = useState(null);
	const [totalEnrollment, setTotalEnrollment] = useState(null);
	const [topEngagement, setTopEngagement] = useState(null);
	const [chartGuideChart, setChartGuideChart] = useState(null);
	const [pieChartData, setPieChartData] = useState(null);

	const [rx, setRx] = useState();
	const [filter, setFilter] = useState(filters);

	useEffect(() => {
		const fetchEnrollData = async () => {
			const res = await fetch(
				"https://kpi-tool.psglobalgroup.com/api/enrollment-demographics.php",
				{ key: filter }
			);
			const data = await res.json();
			console.log("data ==== ", data);
			// set api data
			setRx(data.total_enrollment_rx);
			// setHeatMapData(data.heatmap);
			// setHeatMapXData(data.heatmap_xaxis);
			// setHeatMapYData(data.heatmap_yaxis);

			// setLineChartData({
			// 	type: "line",
			// 	data: {
			// 		labels: data.preferenceMonth,
			// 		datasets: [
			// 			{
			// 				label: "Phone",
			// 				tension: 0.4,
			// 				borderWidth: 0,
			// 				pointRadius: 0,
			// 				borderColor: "#f82c91",
			// 				borderWidth: 3,
			// 				backgroundColor: [
			// 					"rgba(248, 44, 145, 0.3)",
			// 					"rgba(248, 44, 145, 0.2)",
			// 					"rgba(248, 44, 145, 0.1)",
			// 				],
			// 				fill: true,
			// 				data: data.preferences.Phone,
			// 				maxBarThickness: 6,
			// 			},
			// 			{
			// 				label: "Email",
			// 				tension: 0.4,
			// 				borderWidth: 0,
			// 				pointRadius: 0,
			// 				borderColor: "#38d6ae",
			// 				borderWidth: 3,
			// 				backgroundColor: [
			// 					"rgba(56, 214, 174,0.3)",
			// 					"rgba(56, 214, 174, 0.2)",
			// 					"rgba(56, 214, 174, 0.1)",
			// 				],
			// 				fill: true,
			// 				data: data.preferences.Email,
			// 				maxBarThickness: 6,
			// 			},
			// 			{
			// 				label: "Text",
			// 				tension: 0.4,
			// 				borderWidth: 0,
			// 				pointRadius: 0,
			// 				borderColor: "#611bff",
			// 				borderWidth: 3,
			// 				backgroundColor: [
			// 					"rgba(97, 27, 255, 0.2)",
			// 					"rgba(97, 27, 255, 0.1)",
			// 					"rgba(97, 27, 255, 0.05)",
			// 				],
			// 				fill: true,
			// 				data: data.preferences.Text,
			// 				maxBarThickness: 6,
			// 			},
			// 		],
			// 	},
			// 	options: {
			// 		responsive: true,
			// 		maintainAspectRatio: false,
			// 		title: {
			// 			display: false,
			// 			text: "Chart.js line Chart - Multi Axis",
			// 		},
			// 		tooltips: {
			// 			intersect: false,
			// 			mode: "index",
			// 		},
			// 		legend: {
			// 			display: true,
			// 			position: "bottom",
			// 			labels: {
			// 				fontSize: 14,
			// 				fontColor: "#b2b9bf",
			// 				fontFamily: "Nunito Sans",
			// 				fontStyle: "bold",
			// 				lineHeight: 2,
			// 			},
			// 		},
			// 		scales: {
			// 			yAxes: [
			// 				{
			// 					gridLines: {
			// 						drawBorder: false,
			// 						display: false,
			// 						drawOnChartArea: true,
			// 						drawTicks: false,
			// 						borderDash: [5, 5],
			// 					},
			// 					ticks: {
			// 						display: true,
			// 						padding: 10,
			// 						suggestedMin: 1,
			// 						suggestedMax: 5,
			// 						beginAtZero: true,
			// 						fontSize: 14,
			// 						fontColor: "#b2b9bf",
			// 						fontFamily: "Nunito Sans",
			// 						fontStyle: "bold",
			// 						lineHeight: 2,
			// 					},
			// 				},
			// 			],
			// 			xAxes: [
			// 				{
			// 					gridLines: {
			// 						drawBorder: false,
			// 						display: false,
			// 						drawOnChartArea: false,
			// 						drawTicks: false,
			// 						borderDash: [5, 5],
			// 					},
			// 					ticks: {
			// 						display: true,
			// 						padding: 10,
			// 						suggestedMin: 0,
			// 						suggestedMax: 800,
			// 						beginAtZero: true,
			// 						fontColor: "#b2b9bf",
			// 						fontSize: 14,
			// 						fontFamily: "Nunito Sans",
			// 						fontStyle: "bold",
			// 						lineHeight: 2,
			// 					},
			// 				},
			// 			],
			// 		},
			// 	},
			// });
			// setTotalEnrollment(data.total_enrollment);
			// setTopEngagement(data.top_engagement);
			setChartGuideChart({
				type: "bar",
				data: {
					labels: data.range,
					datasets: [
						{
							label: "Male",
							tension: 0.4,
							borderWidth: 0,
							borderRadius: 4,
							borderSkipped: false,
							backgroundColor: "#0dbeff",
							data: data.sex_assigned_at_birth.male,
							maxBarThickness: 10,
						},
						{
							label: "Female",
							tension: 0.8,
							borderWidth: 0,
							borderRadius: 4,
							borderSkipped: false,
							backgroundColor: "#f82c91",
							data: data.sex_assigned_at_birth.female,
							maxBarThickness: 10,
						},
					],
				},
				options: {
					responsive: true,
					maintainAspectRatio: false,
					elements: {
						line: {
							borderWidth: 3,
						},
					},

					scales: {
						y: {
							grid: {
								drawBorder: false,
								display: false,
								drawOnChartArea: false,
								drawTicks: false,
							},
							ticks: {
								suggestedMin: 0,
								suggestedMax: 500,
								beginAtZero: true,
								padding: 10,
								font: {
									size: 14,
									family: "Nunito Sans",
									style: "bold",
									lineHeight: 2,
								},
								color: "#b2b9bf",
							},
						},
						x: {
							grid: {
								drawBorder: false,
								display: false,
								drawOnChartArea: false,
								drawTicks: false,
							},
							ticks: {
								display: true,
								padding: 15,
								font: {
									size: 14,
									family: "Nunito Sans",
									style: "bold",
									lineHeight: 2,
								},
								color: "#b2b9bf",
							},
						},
					},
				},

				options: {
					responsive: true,
					maintainAspectRatio: false,
					elements: {
						line: {
							borderWidth: 3,
						},
					},
					title: {
						display: false,
						text: "Chart.js bar Chart!",
					},
					tooltips: {
						intersect: false,
						mode: "index",
					},
					legend: {
						display: true,
						position: "bottom",
						labels: {
							fontSize: 14,
							fontColor: "#b2b9bf",
							fontFamily: "Nunito Sans",
							fontStyle: "bold",
							lineHeight: 2,
						},
					},
					scales: {
						yAxes: [
							{
								gridLines: {
									drawBorder: false,
									display: false,
									drawOnChartArea: false,
									drawTicks: false,
								},
								ticks: {
									display: true,
									padding: 10,
									suggestedMin: 0,
									suggestedMax: 500,
									beginAtZero: true,
									fontSize: 14,
									fontColor: "#b2b9bf",
									fontFamily: "Nunito Sans",
									fontStyle: "bold",
									lineHeight: 2,
								},
							},
						],
						xAxes: [
							{
								gridLines: {
									drawBorder: false,
									display: false,
									drawOnChartArea: false,
									drawTicks: false,
								},
								ticks: {
									display: true,
									padding: 15,
									fontColor: "#b2b9bf",
									fontSize: 14,
									fontFamily: "Nunito Sans",
									fontStyle: "bold",
									lineHeight: 2,
								},
							},
						],
					},
				},
			});

			// set api data
		};
		fetchEnrollData();
	}, [filters, rx]);

	console.log("chartData1", chartData1);

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
												Enrollment Demographics
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
														<span id="insurance_commercial" />%
														<span className="text-success text-sm font-weight-bolder">
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
														<span id="insurance_government" />%
														<span className="text-success text-sm font-weight-bolder">
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
														<span id="speaking_spanish" />%
														<span className="text-success text-sm font-weight-bolder">
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
														<span id="speaking_english" />%
														<span className="text-success text-sm font-weight-bolder">
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
								{chartGuideChart && (
									<LineChart
										id="chart-bars"
										config={chartGuideChart}
										height="400"
									/>
								)}
								{/* <canvas
									id="chart-bars"
									className="chart-canvas"
									height="400px"
								/> */}
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
										<div id="exportmeterchart"></div>
									</div>
								</div>
							</div>{" "}
							{<MeterChart total_nbrx_enrollment={rx} />}
							{/* <div className="chartdiv" id="enroll-total-rx" /> */}
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
									{/* <div className="ms-auto">
										<div id="exportdiv"></div>
									</div> */}
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
														onclick="heatMapChartPng()">
														<i className="fa-regular fa-file-arrow-down me-2" />
														Download PNG
													</a>
												</li>
												<li>
													<a
														className="dropdown-item border-radius-md"
														href="javascript:;"
														onclick="heatMapChartPdf()">
														<i className="fa-regular fa-file-arrow-down me-2" />
														Download PDF
													</a>
												</li>
											</ul>
										</div>
									</div> */}
								</div>
							</div>
							<div id="us-heatmap3" />
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

export default EnrollmentDemographic;
