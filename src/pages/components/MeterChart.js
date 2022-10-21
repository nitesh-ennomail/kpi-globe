import * as am5 from "@amcharts/amcharts5";
import * as am5radar from "@amcharts/amcharts5/radar";
import * as am5xy from "@amcharts/amcharts5/xy";

import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import am5themes_Responsive from "@amcharts/amcharts5/themes/Responsive";
import * as am5plugins_exporting from "@amcharts/amcharts5/plugins/exporting";
import { useLayoutEffect, useEffect } from "react";

function MeterChart({ total_nbrx_enrollment = 25 }) {
	// Create root
	useLayoutEffect(() => {
		// Radar chart begins
		let rootRadar = am5.Root.new("gague1");
		let doyleTheme = am5.Theme.new(rootRadar);
		doyleTheme.rule("Label").setAll({
			fill: am5.color(0xb2b9bf),
			fontSize: "1.5em",
		});
		doyleTheme.rule("ColorSet").set("colors", [am5.color(0x38d6ae)]);

		rootRadar.setThemes([am5themes_Animated.new(rootRadar), doyleTheme]);

		let chartRadar = rootRadar.container.children.push(
			am5radar.RadarChart.new(rootRadar, {
				panX: false,
				panY: false,
				startAngle: 180,
				endAngle: 360,
			})
		);

		chartRadar.getNumberFormatter().set("numberFormat", "#'%'");

		let axisRenderer = am5radar.AxisRendererCircular.new(rootRadar, {
			innerRadius: -40,
		});
		axisRenderer.grid.template.setAll({
			stroke: rootRadar.interfaceColors.get("background"),
			visible: true,
			strokeOpacity: 0.8,
		});
		let xAxisRadar = chartRadar.xAxes.push(
			am5xy.ValueAxis.new(rootRadar, {
				maxDeviation: 0,
				min: 0,
				max: 100,
				strictMinMax: true,
				renderer: axisRenderer,
			})
		);

		let axisDataItemRadar = xAxisRadar.makeDataItem({});

		let clockHandRadar = am5radar.ClockHand.new(rootRadar, {
			pinRadius: 50,
			radius: am5.percent(100),
			innerRadius: 50,
			bottomWidth: 0,
			topWidth: 0,
		});

		clockHandRadar.pin.setAll({
			fillOpacity: 0,
			strokeOpacity: 0.5,
			stroke: am5.color(0xb2b9bf),
			strokeWidth: 1.5,
			strokeDasharray: [2, 2],
		});
		clockHandRadar.hand.setAll({
			fillOpacity: 0,
			strokeOpacity: 0.5,
			stroke: am5.color(0xb2b9bf),
			strokeWidth: 2,
		});

		let bulletRadar = axisDataItemRadar.set(
			"bullet",
			am5xy.AxisBullet.new(rootRadar, {
				sprite: clockHandRadar,
			})
		);

		xAxisRadar.createAxisRange(axisDataItemRadar);

		let labelRadar = chartRadar.radarContainer.children.push(
			am5.Label.new(rootRadar, {
				centerX: am5.percent(50),
				textAlign: "center",
				centerY: am5.percent(50),
				fontSize: "1.5em",
			})
		);

		let axisRange0Radar = xAxisRadar.createAxisRange(
			xAxisRadar.makeDataItem({
				above: true,
				value: 0,
				endValue: 100,
			})
		);
		let axisRange1Radar = xAxisRadar.createAxisRange(
			xAxisRadar.makeDataItem({
				above: true,
				value: 0,
				endValue: 0,
			})
		);
		axisDataItemRadar.set("value", 90);
		bulletRadar.get("sprite").on("rotation", function () {
			var value = axisDataItemRadar.get("value");
			labelRadar.set("text", Math.round(value).toString() + "%");
		});

		chartRadar.bulletsContainer.set("mask", undefined);
		var colorSet = am5.ColorSet.new(rootRadar, {});

		axisRange0Radar.get("axisFill").setAll({
			visible: true,
			fill: colorSet.getIndex(0),
		});

		axisRange0Radar.get("label").setAll({
			forceHidden: true,
		});

		axisRange1Radar.get("axisFill").setAll({
			visible: true,
			fill: colorSet.getIndex(4),
		});
		axisRange1Radar.get("label").setAll({
			forceHidden: true,
		});

		let exporting = am5plugins_exporting.Exporting.new(rootRadar, {
			menu: am5plugins_exporting.ExportingMenu.new(rootRadar, {
				container: document.getElementById("exportmeterchart"),
			}),
			pngOptions: {
				quality: 0.8,
				maintainPixelRatio: true,
			},
			filePrefix: "Program Reach (NBRx)",
		});

		// chartRadar.appear(1000, 100);

		xAxisRadar.axisRanges.removeValue(axisRange0Radar);
		xAxisRadar.axisRanges.removeValue(axisRange1Radar);
		axisRange0Radar = xAxisRadar.createAxisRange(
			xAxisRadar.makeDataItem({
				above: true,
				value: 0,
				endValue: total_nbrx_enrollment,
				// endValue: 59,
			})
		);
		axisRange1Radar = xAxisRadar.createAxisRange(
			xAxisRadar.makeDataItem({
				above: true,
				value: total_nbrx_enrollment,
				// value: 59,

				endValue: 100,
			})
		);

		axisDataItemRadar.set("value", total_nbrx_enrollment);
		// axisDataItemRadar.set("value", 59);

		bulletRadar.get("sprite").on("rotation", function () {
			let value = axisDataItemRadar.get("value");
			labelRadar.set("text", Math.round(value).toString() + "%");
		});

		var colorSet = am5.ColorSet.new(rootRadar, {});

		axisRange0Radar.get("axisFill").setAll({
			visible: true,
			fill: colorSet.getIndex(0),
		});

		axisRange0Radar.get("label").setAll({
			forceHidden: true,
		});

		axisRange1Radar.get("axisFill").setAll({
			visible: true,
			fill: colorSet.getIndex(4),
		});

		axisRange1Radar.get("label").setAll({
			forceHidden: true,
		});

		return () => {
			rootRadar.dispose();
		};
	}, []);
	return (
		<>
			<div id="gague1" className="chartdiv" />
			{/* <div className="chartdiv-legend" id="chartdiv-legend" /> */}
			{/* <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div> */}
		</>
	);
}

export default MeterChart;
