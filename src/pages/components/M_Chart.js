import React, { useEffect, useState } from "react";
// import Chart from "chart.js";
// import Chart from "chart.js";
// import "./styles.css";

import Chart from "chart.js";
// import { getRelativePosition } from "chart.js/helpers";
function M_Chart(props) {
	var myLineChart;
	// const config = {
	// 	type: "bar",
	// 	data: props && props.data,
	// 	options: {
	// 		responsive: true,
	// 		maintainAspectRatio: false,
	// 		title: {
	// 			display: false,
	// 			text: "Chart.js mixed Chart - Multi Axis",
	// 		},

	// 		legend: {
	// 			display: true,
	// 			position: "bottom",
	// 			labels: {
	// 				color: "#b2b9bf",
	// 				font: {
	// 					size: 14,
	// 					family: "Nunito Sans",
	// 					style: "bold",
	// 					lineHeight: 2,
	// 				},
	// 			},
	// 		},

	// 		interaction: {
	// 			intersect: false,
	// 			mode: "index",
	// 		},
	// 		scales: {
	// 			y: {
	// 				grid: {
	// 					drawBorder: false,
	// 					display: true,
	// 					drawOnChartArea: true,
	// 					drawTicks: false,
	// 					borderDash: [5, 5],
	// 				},
	// 				ticks: {
	// 					display: true,
	// 					padding: 10,
	// 					min: 0,
	// 					// max: this.max, // Your absolute max value
	// 					// callback: function (value) {
	// 					// 	return ((value / this.max) * 100).toFixed(0) + "%"; // convert it to percentage
	// 					// },
	// 					color: "#b2b9bf",
	// 					position: "bottom",
	// 					font: {
	// 						size: 14,
	// 						family: "Nunito Sans",
	// 						style: "bold",
	// 						lineHeight: 2,
	// 					},
	// 				},
	// 				scaleLabel: {
	// 					display: true,
	// 					labelString: "Percentage",
	// 				},
	// 			},
	// 			x: {
	// 				grid: {
	// 					drawBorder: false,
	// 					display: false,
	// 					drawOnChartArea: false,
	// 					drawTicks: false,
	// 					borderDash: [5, 5],
	// 				},
	// 				ticks: {
	// 					display: true,
	// 					padding: 10,
	// 					suggestedMin: 0,
	// 					suggestedMax: 800,
	// 					beginAtZero: true,
	// 					color: "#b2b9bf",
	// 					font: {
	// 						size: 14,
	// 						family: "Nunito Sans",
	// 						style: "bold",
	// 						lineHeight: 2,
	// 					},
	// 				},
	// 			},
	// 		},
	// 	},
	// };
	useEffect(() => {
		// myLineChart.destroy();

		const ctx = document.getElementById(props.id).getContext("2d");
		// myLineChart.destroy();

		myLineChart = new Chart(ctx, props.config);
		// myLineChart.update({ duration: 800, easing: "easeOutBounce" });
	}, [props]);

	const addData = (testData) => {
		myLineChart.toBase64Image();
		// console.log("PROPS Data", props.data);
		// myLineChart.data.datasets[0].data[2] = 350;
		// myLineChart.update({ duration: 8000, easing: "easeOutBounce" });
		// myLineChart.destroy();
	};

	return (
		<>
			{/* <a onClick={addData}>click</a> */}
			<canvas id={props.id} className="chart-canvas" height={500} />
		</>
	);
}

export default M_Chart;
