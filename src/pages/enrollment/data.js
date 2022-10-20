import * as am5 from "@amcharts/amcharts5";

export var funnelData = {
	displayPercent: true,
	subLabelValue: "raw",
	labels: [
		"Sign Up Form Completion",
		"Enrollment Calls Completed",
		"Patients Enrolled",
	],
	subLabels: ["Patient Site", "HCP Site", "Patient Text"],
	colors: [
		["#fa9567", "#f971b4", "#f82c91"],
		["#ceb4ff", "#925aff"],
		["#83deff", "#7795FF"],
	],
	values: [
		[15, 9, 7],
		[11, 7, 7],
		[7, 6, 4],
	],
};

export let vennData = [
	{
		name: "JCP Patients",
		value: 100,
		color: am5.color(0x095256),
		sliceSettings: {
			fill: am5.color(0x611bff),
			stroke: am5.color(0x611bff),
			fillOpacity: 0.8,
		},
	},
	{
		name: "WithMe Patients",
		value: 100,
		sliceSettings: {
			fill: am5.color(0xf82c91),
			fillOpacity: 0.8,
		},
	},
	{
		name: "JCP and With Me Patients",
		value: 30,
		sets: ["JCP Patients", "WithMe Patients"],
		sliceSettings: {
			// fillPattern: pattern,
			stroke: am5.color(0xb2b9bf),
			strokeOpacity: "0",
			fill: am5.color(0xb2b9bf),
			fillOpacity: "0",
		},
	},
];

export let vennData1 = [
	{
		name: "JCP Patients",
		value: 100,
		color: am5.color(0x095256),
		sliceSettings: {
			fill: am5.color(0x611bff),
			stroke: am5.color(0x611bff),
			fillOpacity: 0.8,
		},
	},
	{
		name: "WithMe Patients",
		value: 10000,
		sliceSettings: {
			fill: am5.color(0xf82c91),
			fillOpacity: 0.8,
		},
	},
	{
		name: "JCP and With Me Patients",
		value: 30,
		sets: ["JCP Patients", "WithMe Patients"],
		sliceSettings: {
			// fillPattern: pattern,
			stroke: am5.color(0xb2b9bf),
			strokeOpacity: "0",
			fill: am5.color(0xb2b9bf),
			fillOpacity: "0",
		},
	},
];

export const lineChartData = {
	labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
	datasets: [
		{
			label: "Warm Call Transfer",
			tension: 0.4,
			borderWidth: 0,
			pointRadius: 0,
			borderColor: "#f82c91",
			borderWidth: 3,
			// backgroundColor: gradientStroke3,
			backgroundColor: `rgba(248, 44, 145, 0.3)`,

			fill: true,
			data: [55, 60, 200, 280, 300, 450, 380, 280, 527],
			maxBarThickness: 6,
		},
		{
			label: "Text",
			tension: 0.4,
			borderWidth: 0,
			pointRadius: 0,
			borderColor: "#38d6ae",
			borderWidth: 3,
			// backgroundColor: gradientStroke1,
			backgroundColor: `rgba(56, 214, 174,0.3)`,

			fill: true,
			data: [50, 40, 300, 220, 500, 250, 400, 230, 505],
			maxBarThickness: 6,
		},
		{
			label: "Website",
			tension: 0.4,
			borderWidth: 0,
			pointRadius: 0,
			borderColor: "#611bff",
			borderWidth: 3,
			// backgroundColor: gradientStroke2,
			backgroundColor: `rgba(97, 27, 255, 0.2)`,

			fill: true,
			data: [30, 90, 40, 140, 290, 290, 340, 230, 400],
			maxBarThickness: 6,
		},
	],
};

export const option1 = {
	responsive: true,
	maintainAspectRatio: false,
	title: {
		display: false,
		text: "Chart.js line Chart - Multi Axis",
	},

	legend: {
		display: true,
		position: "bottom",
		labels: {
			color: "#b2b9bf",
			font: {
				size: 14,
				family: "Nunito Sans",
				style: "bold",
				lineHeight: 2,
			},
		},
	},
	plugins: {
		// legend: {
		// 	display: true,
		// 	position: "bottom",
		// 	labels: {
		// 		color: "#b2b9bf",
		// 		font: {
		// 			size: 14,
		// 			family: "Nunito Sans",
		// 			style: "bold",
		// 			lineHeight: 2,
		// 		},
		// 	},
		// },
	},
	interaction: {
		intersect: false,
		mode: "index",
	},
	scales: {
		y: {
			grid: {
				drawBorder: false,
				display: true,
				drawOnChartArea: true,
				drawTicks: false,
				borderDash: [5, 5],
			},
			ticks: {
				display: true,
				padding: 10,
				min: 0,
				max: 10, // Your absolute max value
				callback: function (value) {
					return ((value / 10) * 100).toFixed(0) + "%"; // convert it to percentage
				},
				color: "#b2b9bf",
				font: {
					size: 14,
					family: "Nunito Sans",
					style: "bold",
					lineHeight: 2,
				},
			},
			scaleLabel: {
				display: true,
				labelString: "Percentage",
			},
		},
		x: {
			grid: {
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
				color: "#b2b9bf",
				font: {
					size: 14,
					family: "Nunito Sans",
					style: "bold",
					lineHeight: 2,
				},
			},
		},
	},
};

export const lineChartData2 = {
	labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
	datasets: [
		{
			label: "1-833-WITHME",
			tension: 0.4,
			borderWidth: 0,
			pointRadius: 0,
			borderColor: "#f82c91",
			borderWidth: 3,
			backgroundColor: `rgba(248, 44, 145, 0.3)`,
			fill: true,
			data: [55, 60, 200, 280, 300, 450, 380, 280, 527],
			maxBarThickness: 6,
		},
		{
			label: "JCP",
			tension: 0.4,
			borderWidth: 0,
			pointRadius: 0,
			borderColor: "#38d6ae",
			borderWidth: 3,
			backgroundColor: `rgba(56, 214, 174,0.3)`,
			fill: true,
			data: [50, 40, 300, 220, 500, 250, 400, 230, 505],
			maxBarThickness: 6,
		},
		{
			label: "MicroSiteHCP",
			tension: 0.4,
			borderWidth: 0,
			pointRadius: 0,
			borderColor: "#611bff",
			borderWidth: 3,
			backgroundColor: `rgba(97, 27, 255, 0.2)`,
			fill: true,
			data: [30, 90, 40, 140, 290, 290, 340, 250, 400],
			maxBarThickness: 6,
		},
		{
			label: "MicroSitePat",
			tension: 0.4,
			borderWidth: 0,
			pointRadius: 0,
			borderColor: "#f94902",
			borderWidth: 3,
			backgroundColor: `rgba(249, 73, 2, 0.2)`,
			fill: true,
			data: [35, 70, 200, 100, 190, 390, 370, 240, 450],
			maxBarThickness: 6,
		},
	],
};
export const option2 = {
	responsive: true,
	maintainAspectRatio: false,

	legend: {
		display: true,
		position: "bottom",
		labels: {
			color: "#b2b9bf",
			font: {
				size: 14,
				family: "Nunito Sans",
				style: "bold",
				lineHeight: 2,
			},
		},
	},
	plugins: {
		// legend: {
		// 	display: true,
		// 	position: "bottom",
		// 	labels: {
		// 		color: "#b2b9bf",
		// 		font: {
		// 			size: 14,
		// 			family: "Nunito Sans",
		// 			style: "bold",
		// 			lineHeight: 2,
		// 		},
		// 	},
		// },
	},
	interaction: {
		intersect: false,
		mode: "index",
	},
	scales: {
		y: {
			grid: {
				drawBorder: false,
				display: true,
				drawOnChartArea: true,
				drawTicks: false,
				borderDash: [5, 5],
			},
			ticks: {
				display: true,
				padding: 10,
				suggestedMin: 0,
				suggestedMax: 800,
				beginAtZero: true,
				color: "#b2b9bf",
				font: {
					size: 14,
					family: "Nunito Sans",
					style: "bold",
					lineHeight: 2,
				},
			},
		},
		x: {
			grid: {
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
				color: "#b2b9bf",
				font: {
					size: 14,
					family: "Nunito Sans",
					style: "bold",
					lineHeight: 2,
				},
			},
		},
	},
};

export const mixChartData = {
	labels: ["SP1", "SP2", "SP3", "SP4", "SP5", "SP6", "SP7", "SP8"],
	datasets: [
		{
			type: "bar",
			label: "Partners",
			weight: 5,
			tension: 0.5,
			borderWidth: 0,
			pointBackgroundColor: "#fa9cca",
			borderColor: "#fa9cca",
			backgroundColor: "#fa9cca",
			borderRadius: 4,
			borderSkipped: false,
			data: [50, 45, 300, 220, 500, 250, 400, 230],
			maxBarThickness: 10,
			order: 2,
		},
		{
			type: "line",
			label: "Partners",
			tension: 0.5,
			borderWidth: 0,
			pointRadius: 0,
			pointBackgroundColor: "#fa9cca",
			borderColor: "#fa9cca",
			borderWidth: 3,
			backgroundColor: `rgba(248, 44, 145, 0.3)`,
			data: [50, 40, 300, 220, 500, 250, 400, 230],
			fill: true,
			order: 1,
		},
	],
};

export const mixChartData1 = {
	labels: ["January", "February", "March", "April"],
	datasets: [
		{
			type: "bar",
			label: "Bar Dataset",
			data: [50, 10, 30, 50],
			borderColor: "rgb(255, 99, 132)",
			backgroundColor: "rgba(255, 99, 132, 0.2)",
			order: 2,
		},
		{
			type: "line",
			label: "Line Dataset",
			data: [50, 10, 30, 50],
			backgroundColor: "rgba(255, 99, 132, 0.2)",
			fill: true,
			borderColor: "rgb(54, 162, 235)",
			order: 1,
		},
	],
};
