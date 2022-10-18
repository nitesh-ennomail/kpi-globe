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
