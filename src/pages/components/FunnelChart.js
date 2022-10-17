import React, { useRef, useLayoutEffect } from "react";
// import "./App.css";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

function FunnelChart(props) {
	const series1Ref = useRef(null);
	const series2Ref = useRef(null);
	const xAxisRef = useRef(null);

	useLayoutEffect(() => {
		let root = am5.Root.new("chartdiv");

		root.setThemes([am5themes_Animated.new(root)]);

		let chart = root.container.children.push(
			am5xy.XYChart.new(root, {
				panY: false,
				layout: root.verticalLayout,
			})
		);

		// Define data
		let data = [
			{
				category: "Research",
				value1: 1000,
				value2: 588,
			},
			{
				category: "Marketing",
				value1: 1200,
				value2: 1800,
			},
			{
				category: "Sales",
				value1: 850,
				value2: 1230,
			},
		];

		// Create Y-axis
		let yAxis = chart.yAxes.push(
			am5xy.ValueAxis.new(root, {
				renderer: am5xy.AxisRendererY.new(root, {}),
			})
		);

		// Create X-Axis
		let xAxis = chart.xAxes.push(
			am5xy.CategoryAxis.new(root, {
				renderer: am5xy.AxisRendererX.new(root, {}),
				categoryField: "category",
			})
		);
		xAxis.data.setAll(data);

		// Create series
		let series1 = chart.series.push(
			am5xy.ColumnSeries.new(root, {
				name: "Series",
				xAxis: xAxis,
				yAxis: yAxis,
				valueYField: "value1",
				categoryXField: "category",
			})
		);
		series1.data.setAll(data);

		let series2 = chart.series.push(
			am5xy.ColumnSeries.new(root, {
				name: "Series",
				xAxis: xAxis,
				yAxis: yAxis,
				valueYField: "value2",
				categoryXField: "category",
			})
		);
		series2.data.setAll(data);

		// Add legend
		let legend = chart.children.push(am5.Legend.new(root, {}));
		legend.data.setAll(chart.series.values);

		// Add cursor
		chart.set("cursor", am5xy.XYCursor.new(root, {}));

		// chartRef.current = chart;

		xAxisRef.current = xAxis;
		series1Ref.current = series1;
		series2Ref.current = series2;

		return () => {
			root.dispose();
		};
	}, []);

	// When the paddingRight prop changes it will update the chart
	// useLayoutEffect(() => {
	// 	chartRef.current.set("paddingRight", props.paddingRight);
	// }, [props.paddingRight]);

	// This code will only run when props.data changes
	useLayoutEffect(() => {
		xAxisRef.current.data.setAll(props.data);
		series1Ref.current.data.setAll(props.data);
		series2Ref.current.data.setAll(props.data);
	}, [props.data]);

	return <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>;
}
export default FunnelChart;
