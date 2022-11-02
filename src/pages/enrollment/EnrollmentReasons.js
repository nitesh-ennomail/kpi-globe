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
import MeterChart from "../components/MeterChart";
var filters = localStorage.getItem("filters");

function EnrollmentReasons(props) {
	const [first, setfirst] = useState(vennData);
	const [chartData1, setChartData1] = useState({});
	const [testData, setTestData] = useState(configConversionChart);
	const [mixData, setMixData] = useState(mixChartData);

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

	const [nbx, setNbx] = useState();
	const [filter, setFilter] = useState(filters);

	useEffect(() => {
		const fetchEnrollData = async () => {
			const res = await fetch(
				"https://kpi-tool.psglobalgroup.com/api/enrollment-engagement.php",
				{ key: filter }
			);
			const data = await res.json();
			console.log("data ==== ", data);
			// set api data
			setNbx(data.total_nbrx_enrollment);
			setHeatMapData(data.heatmap);
			setHeatMapXData(data.heatmap_xaxis);
			setHeatMapYData(data.heatmap_yaxis);
			setFunnelChartData({
				displayPercent: true,
				labels: ["Call Attempts", "Calls Completed", "Patients Enrolled"],
				colors: [["#f6ec70", "#f971b4", "#f82c91"]],
				values: data.funnedata,
			});
			setLineChartData({
				type: "line",
				data: {
					labels: data.preferenceMonth,
					datasets: [
						{
							label: "Phone",
							tension: 0.4,
							borderWidth: 0,
							pointRadius: 0,
							borderColor: "#f82c91",
							borderWidth: 3,
							backgroundColor: [
								"rgba(248, 44, 145, 0.3)",
								"rgba(248, 44, 145, 0.2)",
								"rgba(248, 44, 145, 0.1)",
							],
							fill: true,
							data: data.preferences.Phone,
							maxBarThickness: 6,
						},
						{
							label: "Email",
							tension: 0.4,
							borderWidth: 0,
							pointRadius: 0,
							borderColor: "#38d6ae",
							borderWidth: 3,
							backgroundColor: [
								"rgba(56, 214, 174,0.3)",
								"rgba(56, 214, 174, 0.2)",
								"rgba(56, 214, 174, 0.1)",
							],
							fill: true,
							data: data.preferences.Email,
							maxBarThickness: 6,
						},
						{
							label: "Text",
							tension: 0.4,
							borderWidth: 0,
							pointRadius: 0,
							borderColor: "#611bff",
							borderWidth: 3,
							backgroundColor: [
								"rgba(97, 27, 255, 0.2)",
								"rgba(97, 27, 255, 0.1)",
								"rgba(97, 27, 255, 0.05)",
							],
							fill: true,
							data: data.preferences.Text,
							maxBarThickness: 6,
						},
					],
				},
				options: {
					responsive: true,
					maintainAspectRatio: false,
					title: {
						display: false,
						text: "Chart.js line Chart - Multi Axis",
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
									drawOnChartArea: true,
									drawTicks: false,
									borderDash: [5, 5],
								},
								ticks: {
									display: true,
									padding: 10,
									suggestedMin: 1,
									suggestedMax: 5,
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
									borderDash: [5, 5],
								},
								ticks: {
									display: true,
									padding: 10,
									suggestedMin: 0,
									suggestedMax: 800,
									beginAtZero: true,
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
			setTotalEnrollment(data.total_enrollment);
			setTopEngagement(data.top_engagement);
			setChartGuideChart({
				type: "bar",
				data: {
					labels: data.guidechartLabel,
					datasets: [
						{
							type: "bar",
							label: "Patients",
							weight: 5,
							tension: 0.5,
							borderWidth: 0,
							pointBackgroundColor: "#fa9cca",
							borderColor: "#fa9cca",
							backgroundColor: "#fa9cca",
							borderRadius: 4,
							borderSkipped: false,
							data: data.guidechartValued,
							maxBarThickness: 10,
						},
						{
							type: "line",
							label: "Patients",
							tension: 0.5,
							borderWidth: 0,
							pointRadius: 0,
							pointBackgroundColor: "#fa9cca",
							borderColor: "#fa9cca",
							borderWidth: 3,
							// backgroundColor: [
							// 	"rgba(248, 44, 145, 0.3)",
							// 	"rgba(248, 44, 145, 0.1)",
							// 	"rgba(248, 44, 145, 0.)",
							// ],
							data: data.guidechartValued,
							fill: true,
						},
					],
				},
				options: {
					responsive: true,
					maintainAspectRatio: false,
					title: {
						display: false,
						text: "Chart.js mixed Chart - Multi Axis",
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
									display: true,
									drawOnChartArea: true,
									drawTicks: false,
									borderDash: [5, 5],
								},
								ticks: {
									display: true,
									padding: 10,
									position: "bottom",
									fontColor: "#b2b9bf",
									fontSize: 14,
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
									borderDash: [5, 5],
								},
								ticks: {
									display: true,
									padding: 10,
									suggestedMin: 0,
									suggestedMax: 800,
									beginAtZero: true,
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
			setPieChartData({
				type: "pie",
				data: {
					labels: data.piechartLabel,
					datasets: [
						{
							label: "Time",
							weight: 9,
							cutout: 0,
							tension: 0.9,
							pointRadius: 2,
							borderWidth: 0,
							backgroundColor: ["#611bff", "#38d6ae", "#f82c91"],
							data: data.piechartValued,
							fill: false,
						},
					],
				},
				options: {
					responsive: true,
					maintainAspectRatio: false,
					title: {
						display: false,
						text: "Chart.js pie Chart!",
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

					interaction: {
						intersect: false,
						mode: "index",
					},
					scales: {
						yAxes: [
							{
								gridLines: {
									drawBorder: false,
									display: false,
									drawOnChartArea: false,
									drawTicks: false,
									borderDash: [5, 5],
								},
								ticks: {
									display: false,
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
									borderDash: [5, 5],
								},
								ticks: {
									display: false,
									padding: 10,
									suggestedMin: 0,
									suggestedMax: 800,
									beginAtZero: true,
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
	}, [filters, nbx]);

	console.log("chartData1", chartData1);

	return (
		<React.Fragment>
			<div className="container-fluid py-4">
				<div className="row">
					<div className="col-12 position-relative z-index-2">
						<div className="card card-plain mb-4">
							<div className="card-body p-3">
								<div className="row">
									<div className="col-lg-6">
										<div className="d-flex flex-column h-100">
											<h2 className="font-weight-bolder mb-0">
												Enrollment Reasons
											</h2>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row mt-4">
					<div className="col-12">
						<div className="card p-3 z-index-2">
							<div className="card-header pb-0 p-3">
								<div className="d-flex align-items-center">
									<h6 className="mb-0">Portal Content Flow</h6>
									<button
										type="button"
										className="btn btn-icon-only btn-rounded btn-outline-secondary btn-sm d-flex align-items-center justify-content-center ms-2"
										data-bs-toggle="tooltip"
										data-bs-placement="bottom"
										title="Patient Portal Pathways See how patients are navigating to and through the portal. To see differences between bio-naive and bio-experienced patients, select the segment from the filters menu at the top. Source: Ashfield salesforce data">
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
							<div className="chartdiv" id="enroll-to-content" />
						</div>
					</div>
				</div>
				<div className="row mt-4">
					<div className="col-12">
						<div className="card p-3 z-index-2">
							<div className="card-header pb-0 p-3">
								<div className="d-flex align-items-center">
									<h6 className="mb-0">Portal Content Performance</h6>
									<button
										type="button"
										className="btn btn-icon-only btn-rounded btn-outline-secondary btn-sm d-flex align-items-center justify-content-center ms-2"
										data-bs-toggle="tooltip"
										data-bs-placement="bottom"
										title="PORTAL CONTENT PERFORMANCE
									Compare page views and interaction with key content provided on the patient portal to see the information patients need most. Adjust content and portal navigation to ensure easy access to popular content.
									
									Source: Ashfield salesforce data">
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
														onclick="forcePerformanceChartPng()">
														<i className="fa-regular fa-file-arrow-down me-2" />
														Download PNG
													</a>
												</li>
												<li>
													<a
														className="dropdown-item border-radius-md"
														href="javascript:;"
														onclick="forcePerformanceChartPdf()">
														<i className="fa-regular fa-file-arrow-down me-2" />
														Download PDF
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className="chartdiv height-600" id="force-performance" />
						</div>
					</div>
				</div>
				<div className="row mt-4">
					<div className="col-6">
						<div className="card z-index-2 height-400">
							<div className="card-header pb-0 p-3">
								<div className="d-flex align-items-center">
									<h6 className="mb-0">Top Reasons To Enroll</h6>
									<button
										type="button"
										className="btn btn-icon-only btn-rounded btn-outline-secondary btn-sm d-flex align-items-center justify-content-center ms-2"
										data-bs-toggle="tooltip"
										data-bs-placement="bottom"
										title="PATIENT NEEDS
									Use this metric to track the needs of patients and why they need our support. Adjust content and services to ensure easy access to their greatest needs.
									Source: Ashfield survey">
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
															onclick="downloadPNGChart(chartReasonEnroll,'Top Reasons To Enroll');">
															<i className="fa-regular fa-file-arrow-down me-2" />
															Download PNG
														</a>
													</li>
													<li>
														<a
															className="dropdown-item border-radius-md"
															href="javascript:;"
															onclick="downloadPDFChart('chart-bars','Top Reasons To Enroll')">
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
								<div className="border-radius-lg py-3 pe-1 min-height-250">
									<div className="chart min-height-250">
										<canvas
											id="chart-bars"
											className="chart-canvas"
											height="100vh"
										/>
									</div>
								</div>
								<div className="container border-radius-lg" />
							</div>
						</div>
					</div>
					<div className="col-6">
						<div className="card z-index-2 height-400">
							<div className="card-header pb-0 p-3">
								<div className="d-flex align-items-center">
									<h6 className="mb-0">Top Reasons To Abandon</h6>
									<button
										type="button"
										className="btn btn-icon-only btn-rounded btn-outline-secondary btn-sm d-flex align-items-center justify-content-center ms-2"
										data-bs-toggle="tooltip"
										data-bs-placement="bottom"
										title="PATIENT FRUSTRATIONS
									Find out why patients are dropping out of our program, and identify ways to address these pain points.
									Source: Ashfield survey">
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
															onclick="downloadPNGChart(chartReasonNotEnroll,'Top Reasons To Abandon');">
															<i className="fa-regular fa-file-arrow-down me-2" />
															Download PNG
														</a>
													</li>
													<li>
														<a
															className="dropdown-item border-radius-md"
															href="javascript:;"
															onclick="downloadPDFChart('chart-bars2','Top Reasons To Abandon')">
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
								<div className="border-radius-lg py-3 pe-1 min-height-250">
									<div className="chart min-height-250">
										<canvas
											id="chart-bars2"
											className="chart-canvas"
											height="100vh"
										/>
									</div>
								</div>
								<div className="container border-radius-lg" />
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

export default EnrollmentReasons;
