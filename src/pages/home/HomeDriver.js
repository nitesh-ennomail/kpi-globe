import React, { useEffect, useLayoutEffect } from "react";
import LineChart from "../components/LineChart";
// import { home_driver } from "../comman/Constant";
// import { appendScript } from "../utils/appendScript";
// import { removeScript } from "../utils/removeScript";
import { lineChartData, mixChartData } from "./data";
function HomeDriver(props) {
	useLayoutEffect(() => {
		// appendScript(home_driver);
		return () => {
			// removeScript(home_driver);
			// root.dispose();
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
												Program Satisfaction and Perception
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
						<a href="../../pages/dashboards/satisfaction.html">
							<div className="card z-index-2">
								<div className="card-body p-3">
									<div className="row">
										<div className="col-8">
											<p className="text-2xl mt-0 mb-0 text-align-center text-capitalize font-weight-bold">
												Launch Hate Audit Tool
											</p>
										</div>
										<div className="col-4 text-end">
											<div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
												<i
													className="ni ni-button-power text-lg opacity-10"
													aria-hidden="true"></i>
											</div>
										</div>
									</div>
								</div>
							</div>
						</a>
					</div>
				</div>
				<div className="row mt-4">
					<div className="col-6">
						<div className="card z-index-2 height-600">
							<div className="card-header pb-0 p-3">
								<div className="d-flex align-items-center">
									<h6 className="mb-0">
										Patient Program Satisfaction by Phase
									</h6>
									<button
										type="button"
										className="btn btn-icon-only btn-rounded btn-outline-secondary btn-sm d-flex align-items-center justify-content-center ms-2"
										data-bs-toggle="tooltip"
										data-bs-placement="bottom"
										title="PATIENT SATISFACTION
											Track patients satisfaction at each phase of the treatment experience.
											Source: Ashfield Health Survey">
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
														onclick="downloadPNGChart(chartPageView1,'Patient Program Satisfaction by Phase');">
														<i className="fa-regular fa-file-arrow-down me-2"></i>
														Download PNG
													</a>
												</li>
												<li>
													<a
														className="dropdown-item border-radius-md"
														href="javascript:;"
														onclick="downloadPDFChart('mixed-chart','Patient Program Satisfaction by Phase')">
														<i className="fa-regular fa-file-arrow-down me-2"></i>
														Download PDF
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className="card-body p-3">
								<div className="chart">
									{/* No Access to chart
                  <div className="outerdiv mt-6">
                    <img className="lock" src="../../assets/img/lock.png" />
                    <p className="msg mt-3">
                      The page you're trying to access has restricted access.<br />
                      Please refer to your system administrator.
                    </p>
                    <a className="btn bg-gradient-primary text-doyle mt-8"
                      >Request access</a>
                  </div>
                  No Access to chart */}

									<LineChart
										id="mixed-chart-2"
										config={mixChartData}
										height="500"
									/>
									{/* <canvas
										id="mixed-chart"
										className="chart-canvas"
										height="500"></canvas> */}
								</div>
							</div>
						</div>
					</div>
					<div className="col-6">
						<div className="card z-index-2 height-600">
							<div className="card-header pb-0 p-3">
								<div className="d-flex align-items-center">
									<h6 className="mb-0">Patient Brand Perception</h6>
									<button
										type="button"
										className="btn btn-icon-only btn-rounded btn-outline-secondary btn-sm d-flex align-items-center justify-content-center ms-2"
										data-bs-toggle="tooltip"
										data-bs-placement="bottom"
										title="PATIENT BRAND PERCEPTION
											Understand patient sentiment toward TREMFYA as a brand, based on their treatment experience.">
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
														onclick="downloadPNGChart(chartPageView,'Patient Brand Perception');">
														<i className="fa-regular fa-file-arrow-down me-2"></i>
														Download PNG
													</a>
												</li>
												<li>
													<a
														className="dropdown-item border-radius-md"
														href="javascript:;"
														onclick="downloadPDFChart('chart-line','Patient Brand Perception')">
														<i className="fa-regular fa-file-arrow-down me-2"></i>
														Download PDF
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className="card-body p-3">
								<div className="chart">
									<LineChart
										id="chart-line-2"
										config={lineChartData}
										height="500"
									/>
									{/* <canvas
										id="chart-line"
										className="chart-canvas"
										height="500"></canvas> */}
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <!--   Bubble Chart   --> */}
				<div className="row mt-4">
					<div className="col-12">
						<div className="card z-index-2 p-3 height-700">
							<div className="card-header pb-0 p-3">
								<div className="d-flex align-items-center">
									<h6 className="mb-0">HCP Brand Perception</h6>
									<button
										type="button"
										className="btn btn-icon-only btn-rounded btn-outline-secondary btn-sm d-flex align-items-center justify-content-center ms-2"
										data-bs-toggle="tooltip"
										data-bs-placement="bottom"
										title="HCP BRAND PERCEPTION
									Compare the sentiment around TREMFYA as a brand, including the withME support program for patients.
									Source: Qualitative and quantitative research results.">
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
														href="javascript:;">
														<i className="fa-regular fa-file-arrow-down me-2"></i>
														Download PNG
													</a>
												</li>
												<li>
													<a
														className="dropdown-item border-radius-md"
														href="javascript:;">
														<i className="fa-regular fa-file-arrow-down me-2"></i>
														Download PDF
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className="card-body">
								<figure className="bubble-chart">
									<figure className="bubble-chart">
										<div className="bubblerow header">
											<div className="as-table">
												<div className="bubblecell">
													<span className="bubblelabel"></span>
												</div>
												<div className="bubblecell">
													<span className="bubblelabel">January</span>
												</div>
												<div className="bubblecell">
													<span className="bubblelabel">February</span>
												</div>
												<div className="bubblecell">
													<span className="bubblelabel">March</span>
												</div>
												<div className="bubblecell">
													<span className="bubblelabel">April</span>
												</div>
												<div className="bubblecell">
													<span className="bubblelabel">May</span>
												</div>
											</div>
										</div>
										<div className="bubblerow one">
											<div className="as-table">
												<div className="bubblecell">
													<span className="bubblelabel">Patient Direct</span>
												</div>
												<div className="bubblecell">
													<div className="bubble">
														<span className="value">25</span>
													</div>
												</div>
												<div className="bubblecell">
													<div className="bubble">
														<span className="value">16</span>
													</div>
												</div>
												<div className="bubblecell">
													<div className="bubble">
														<span className="value">15</span>
													</div>
												</div>
												<div className="bubblecell">
													<div className="bubble">
														<span className="value">35</span>
													</div>
												</div>
												<div className="bubblecell">
													<div className="bubble">
														<span className="value">21</span>
													</div>
												</div>
											</div>
										</div>
										<div className="bubblerow two">
											<div className="as-table">
												<div className="bubblecell">
													<span className="bubblelabel">NCP Direct</span>
												</div>
												<div className="bubblecell">
													<div className="bubble">
														<span className="value">34</span>
													</div>
												</div>
												<div className="bubblecell">
													<div className="bubble">
														<span className="value">20</span>
													</div>
												</div>
												<div className="bubblecell">
													<div className="bubble">
														<span className="value">22</span>
													</div>
												</div>
												<div className="bubblecell">
													<div className="bubble">
														<span className="value">14</span>
													</div>
												</div>
												<div className="bubblecell">
													<div className="bubble">
														<span className="value">24</span>
													</div>
												</div>
											</div>
										</div>
										<div className="bubblerow three">
											<div className="as-table">
												<div className="bubblecell">
													<span className="bubblelabel">Paid Search</span>
												</div>
												<div className="bubblecell">
													<div className="bubble">
														<span className="value">22</span>
													</div>
												</div>
												<div className="bubblecell">
													<div className="bubble">
														<span className="value">18</span>
													</div>
												</div>
												<div className="bubblecell">
													<div className="bubble">
														<span className="value">20</span>
													</div>
												</div>
												<div className="bubblecell">
													<div className="bubble">
														<span className="value">30</span>
													</div>
												</div>
												<div className="bubblecell">
													<div className="bubble">
														<span className="value">24</span>
													</div>
												</div>
											</div>
										</div>
										<div className="bubblerow four">
											<div className="as-table">
												<div className="bubblecell">
													<span className="bubblelabel">Organic Search</span>
												</div>
												<div className="bubblecell">
													<div className="bubble">
														<span className="value">23</span>
													</div>
												</div>
												<div className="bubblecell">
													<div className="bubble">
														<span className="value">20</span>
													</div>
												</div>
												<div className="bubblecell">
													<div className="bubble">
														<span className="value">22</span>
													</div>
												</div>
												<div className="bubblecell">
													<div className="bubble">
														<span className="value">35</span>
													</div>
												</div>
												<div className="bubblecell">
													<div className="bubble">
														<span className="value">26</span>
													</div>
												</div>
											</div>
										</div>
										<div className="bubblerow five">
											<div className="as-table">
												<div className="bubblecell">
													<span className="bubblelabel">Refferals</span>
												</div>
												<div className="bubblecell">
													<div className="bubble">
														<span className="value">24</span>
													</div>
												</div>
												<div className="bubblecell">
													<div className="bubble">
														<span className="value">23</span>
													</div>
												</div>
												<div className="bubblecell">
													<div className="bubble">
														<span className="value">28</span>
													</div>
												</div>
												<div className="bubblecell">
													<div className="bubble">
														<span className="value">28</span>
													</div>
												</div>
												<div className="bubblecell">
													<div className="bubble">
														<span className="value">21</span>
													</div>
												</div>
											</div>
										</div>
										<div className="bubblerow six">
											<div className="as-table">
												<div className="bubblecell">
													<span className="bubblelabel">Other</span>
												</div>
												<div className="bubblecell">
													<div className="bubble">
														<span className="value">24</span>
													</div>
												</div>
												<div className="bubblecell">
													<div className="bubble">
														<span className="value">28</span>
													</div>
												</div>
												<div className="bubblecell">
													<div className="bubble">
														<span className="value">23</span>
													</div>
												</div>
												<div className="bubblecell">
													<div className="bubble">
														<span className="value">28</span>
													</div>
												</div>
												<div className="bubblecell">
													<div className="bubble">
														<span className="value">24</span>
													</div>
												</div>
											</div>
										</div>
									</figure>
								</figure>
							</div>
						</div>
					</div>
				</div>
				<footer className="footer pt-3">
					<div className="container-fluid">
						<div className="row align-items-center justify-content-lg-between">
							<div className="col-lg-6 mb-lg-0 mb-4">
								<div className="copyright text-center text-sm text-muted text-lg-start">
									©<script>document.write(new Date().getFullYear());</script>,
									<a
										href="https://ipghealth.com/network/90north"
										className="font-weight-bold"
										// target="_blank"
									>
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

export default HomeDriver;
