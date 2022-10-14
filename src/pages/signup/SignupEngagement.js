import React, { useLayoutEffect } from "react";
import { appendScript } from "../utils/appendScript";
import { removeScript } from "../utils/removeScript";

import { signup_engagement } from "../comman/Constant";

function SignupEngagement(props) {
	useLayoutEffect(() => {
		appendScript(signup_engagement);
		return () => {
			removeScript(signup_engagement);
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
												Signup Engagement
											</h2>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row z-index-2">
					<div className="col-7">
						<div className="card">
							<div className="card-header pb-0 p-3">
								<div className="d-flex align-items-center">
									<h6 className="mb-0">Content Flow</h6>
									<button
										type="button"
										className="btn btn-icon-only btn-rounded btn-outline-secondary btn-sm d-flex align-items-center justify-content-center ms-2"
										data-bs-toggle="tooltip"
										data-bs-placement="bottom"
										title="Shows different pages of content that users visit to lead them to signup.">
										<i className="fas fa-info" aria-hidden="true" />
									</button>
									<div className="ms-auto">
										<div className="dropdown pe-2">
											<a
												href=""
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
													<a className="dropdown-item border-radius-md" href="">
														<i className="fa-regular fa-share me-2" /> Share
														Report
													</a>
												</li>
												<li>
													<a className="dropdown-item border-radius-md" href="">
														<i className="fa-regular fa-add me-2" /> Add to
														Report
													</a>
												</li>
												<li>
													<a
														className="dropdown-item border-radius-md"
														href=""
														onclick="contentflowChartPng()">
														<i className="fa-regular fa-file-arrow-down me-2" />
														Download PNG
													</a>
												</li>
												<li>
													<a
														className="dropdown-item border-radius-md"
														href=""
														onclick="contentflowChartPdf()">
														<i className="fa-regular fa-file-arrow-down me-2" />
														Download PDF
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div id="contentflow" />
						</div>
					</div>
					<div className="col-5">
						<div className="card">
							<div className="card-header pb-0 p-3">
								<div className="d-flex align-items-center">
									<h6 className="mb-0">User Bounce Rate</h6>
									<button
										type="button"
										className="btn btn-icon-only btn-rounded btn-outline-secondary btn-sm d-flex align-items-center justify-content-center ms-2"
										data-bs-toggle="tooltip"
										data-bs-placement="bottom"
										title="Percentage of patients who view one page and leave.">
										<i className="fas fa-info" aria-hidden="true" />
									</button>
									<div className="ms-auto">
										<div className="dropdown pe-2">
											<a
												href=""
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
													<a className="dropdown-item border-radius-md" href="">
														<i className="fa-regular fa-share me-2" /> Share
														Report
													</a>
												</li>
												<li>
													<a className="dropdown-item border-radius-md" href="">
														<i className="fa-regular fa-add me-2" /> Add to
														Report
													</a>
												</li>
												<li>
													<a
														className="dropdown-item border-radius-md"
														href=""
														onclick="retentionChartPng()">
														<i className="fa-regular fa-file-arrow-down me-2" />
														Download PNG
													</a>
												</li>
												<li>
													<a
														className="dropdown-item border-radius-md"
														href=""
														onclick="retentionChartPdf()">
														<i className="fa-regular fa-file-arrow-down me-2" />
														Download PDF
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className="chartdiv" id="user-retention" />
						</div>
					</div>
				</div>
				<div className="row mt-4">
					<div className="col-5">
						<div className="card z-index-2 height-500">
							<div className="card-header pb-0 p-3">
								<div className="d-flex align-items-center">
									<h6 className="mb-0">Sign Up Times</h6>
									<button
										type="button"
										className="btn btn-icon-only btn-rounded btn-outline-secondary btn-sm d-flex align-items-center justify-content-center ms-2"
										data-bs-toggle="tooltip"
										data-bs-placement="bottom"
										title="See what time of day users are typically signing up to predict peak times for engagement.">
										<i className="fas fa-info" aria-hidden="true" />
									</button>
									<div className="ms-auto">
										<div className="dropdown pe-2">
											<a
												href=""
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
													<a className="dropdown-item border-radius-md" href="">
														<i className="fa-regular fa-share me-2" /> Share
														Report
													</a>
												</li>
												<li>
													<a className="dropdown-item border-radius-md" href="">
														<i className="fa-regular fa-add me-2" /> Add to
														Report
													</a>
												</li>
												<li>
													<a
														className="dropdown-item border-radius-md"
														href=""
														onclick="downloadPNGChart(chartjsBar,'Sign Up Times');">
														<i className="fa-regular fa-file-arrow-down me-2" />
														Download PNG
													</a>
												</li>
												<li>
													<a
														className="dropdown-item border-radius-md"
														href=""
														onclick="downloadPDFChart('chart-bars','Sign Up Times')">
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
								<div className="border-radius-lg py-3 pe-1 min-height-250">
									<div className="chart">
										<canvas
											id="chart-bars"
											className="chart-canvas"
											height="375px"
										/>
									</div>
								</div>
								<div className="container border-radius-lg" />
							</div>
						</div>
					</div>
					<div className="col-7">
						<div className="card z-index-2 height-500">
							<div className="card-header pb-0 p-3">
								<div className="d-flex align-items-center">
									<h6 className="mb-0">User Engagement</h6>
									<button
										type="button"
										className="btn btn-icon-only btn-rounded btn-outline-secondary btn-sm d-flex align-items-center justify-content-center ms-2"
										data-bs-toggle="tooltip"
										data-bs-placement="bottom"
										title="Measure overall engagement within the site to ensure new and existing users are finding what they need. Compare engagement statistics with the previous time period to ensure continuous optimization.
									Source: Google Analytics">
										<i className="fas fa-info" aria-hidden="true" />
									</button>
									<div className="ms-auto">
										<div className="dropdown pe-2">
											<a
												href=""
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
													<a className="dropdown-item border-radius-md" href="">
														<i className="fa-regular fa-share me-2" /> Share
														Report
													</a>
												</li>
												<li>
													<a className="dropdown-item border-radius-md" href="">
														<i className="fa-regular fa-add me-2" /> Add to
														Report
													</a>
												</li>
												<li>
													<a
														className="dropdown-item border-radius-md"
														href=""
														onclick="downloadPNGChart(chartPageView,'User Engagement');">
														<i className="fa-regular fa-file-arrow-down me-2" />
														Download PNG
													</a>
												</li>
												<li>
													<a
														className="dropdown-item border-radius-md"
														href=""
														onclick="downloadPDFChart('chart-line','User Engagement')">
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
								<div className="chart">
									<canvas
										id="chart-line"
										className="chart-canvas"
										height="400px"
									/>
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
									<h6 className="mb-0">Top Search Tearms</h6>
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
												href=""
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
													<a className="dropdown-item border-radius-md" href="">
														<i className="fa-regular fa-share me-2" /> Share
														Report
													</a>
												</li>
												<li>
													<a className="dropdown-item border-radius-md" href="">
														<i className="fa-regular fa-add me-2" /> Add to
														Report
													</a>
												</li>
												<li>
													<a className="dropdown-item border-radius-md" href="">
														<i className="fa-regular fa-file-arrow-down me-2" />
														Download PNG
													</a>
												</li>
												<li>
													<a className="dropdown-item border-radius-md" href="">
														<i className="fa-regular fa-file-arrow-down me-2" />
														Download PDF
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							{/* -------------------------- */}
							<div
								className="d-flex align-items-center justify-content-left col-12 col-md-6 mt-3 mb-3"
								id="search_swtich">
								<a
									href=""
									className="nav-link"
									id="searchView"
									aria-expanded="false"></a>
								<div>
									<ul className="nav justify-content-center searchTab">
										<li className="nav-item searchActive">
											<a
												className="nav-link"
												href=""
												data-filter-value="overall"
												data-filter-type="search">
												Overall search
											</a>
										</li>
										<li className="nav-item">
											<a
												className="nav-link"
												href=""
												data-filter-value="paid"
												data-filter-type="search">
												Paid search
											</a>
										</li>
										<li className="nav-item">
											<a
												className="nav-link"
												href=""
												data-filter-value="organic"
												data-filter-type="region">
												Organic search
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div className="card-body p-0 col-12 col-md-6">
								<div className="table-responsive">
									<table className="mb-0 table table-borderless">
										<tbody>
											<tr>
												<td className="ps-1" colSpan={3}>
													<div className="my-auto">
														<div className="d-flex">
															<span className="nav-link-text">
																Patient support for Tremfya
															</span>
														</div>
													</div>
												</td>
												<td className="ps-1" colSpan={3}>
													<div className="mb-0 d-flex align-items-center justify-content-center">
														<span className="nav-link-text">1600</span>
													</div>
												</td>
											</tr>
											<tr>
												<td className="ps-1" colSpan={3}>
													<div className="my-auto">
														<div className="d-flex">
															<span className="nav-link-text">
																Tremfya injection/ How to inject Tremfya
															</span>
														</div>
													</div>
												</td>
												<td className="ps-1" colSpan={3}>
													<div className="mb-0 d-flex align-items-center justify-content-center">
														<span className="nav-link-text">2,611</span>
													</div>
												</td>
											</tr>
											<tr>
												<td className="ps-1" colSpan={3}>
													<div className="my-auto">
														<div className="d-flex">
															<span className="nav-link-text">
																Tremfya patient assistance
															</span>
														</div>
													</div>
												</td>
												<td className="ps-1" colSpan={3}>
													<div className="mb-0 d-flex align-items-center justify-content-center">
														<span className="nav-link-text">541</span>
													</div>
												</td>
											</tr>
											<tr>
												<td className="ps-1" colSpan={3}>
													<div className="my-auto">
														<div className="d-flex">
															<span className="nav-link-text">
																Tremfya together
															</span>
														</div>
													</div>
												</td>
												<td className="ps-1" colSpan={3}>
													<div className="mb-0 d-flex align-items-center justify-content-center">
														<span className="nav-link-text">756</span>
													</div>
												</td>
											</tr>
											<tr>
												<td className="ps-1" colSpan={3}>
													<div className="my-auto">
														<div className="d-flex">
															<span className="nav-link-text">
																Tremfya with me guide
															</span>
														</div>
													</div>
												</td>
												<td className="ps-1" colSpan={3}>
													<div className="mb-0 d-flex align-items-center justify-content-center">
														<span className="nav-link-text">805</span>
													</div>
												</td>
											</tr>
											<tr>
												<td className="ps-1" colSpan={3}>
													<div className="my-auto">
														<div className="d-flex">
															<span className="nav-link-text">
																Tremfya copy/Tremfya copy assistance
															</span>
														</div>
													</div>
												</td>
												<td className="ps-1" colSpan={3}>
													<div className="mb-0 d-flex align-items-center justify-content-center">
														<span className="nav-link-text">834</span>
													</div>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
							{/* -------------------- */}
							<div className="card-body d-none">
								<div className="chartdivword" id="wordcloud" />
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

export default SignupEngagement;
