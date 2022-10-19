import React, { useEffect } from "react";
// import Chart from "chart.js";
import Chart from "chart.js";
// import "./styles.css";
export default function LineChart(props) {
	useEffect(() => {
		var ctx3 = document.getElementById(`${props.id}`).getContext("2d");
		var gradientStroke1 = ctx3.createLinearGradient(56, 214, 174, 50);
		gradientStroke1.addColorStop(1, "rgba(56, 214, 174,0.3)");
		gradientStroke1.addColorStop(0.2, "rgba(56, 214, 174, 0.2)");
		gradientStroke1.addColorStop(0, "rgba(56, 214, 174, 0.1)"); //purple colors
		var gradientStroke3 = ctx3.createLinearGradient(233, 236, 239, 50);
		gradientStroke3.addColorStop(1, "rgba(248, 44, 145, 0.3)");
		gradientStroke3.addColorStop(0.2, "rgba(248, 44, 145, 0.2)");
		gradientStroke3.addColorStop(0, "rgba(248, 44, 145, 0.1)");
		var gradientStroke2 = ctx3.createLinearGradient(56, 214, 174, 50);
		gradientStroke2.addColorStop(1, "rgba(97, 27, 255, 0.2)");
		gradientStroke2.addColorStop(0.2, "rgba(97, 27, 255, 0.1)");
		gradientStroke2.addColorStop(0, "rgba(97, 27, 255, 0.05)");
		var gradientStroke4 = ctx3.createLinearGradient(56, 214, 174, 50);
		gradientStroke4.addColorStop(1, "rgba(249, 73, 2, 0.2)");
		gradientStroke4.addColorStop(0.2, "rgba(249, 73, 2, 0.1)");
		gradientStroke4.addColorStop(0, "rgba(249, 73, 2, 0.05)"); //purple colors
		new Chart(ctx3, {
			type: "line",
			data: props.data,
			options: props.options,
		});
	}, []);

	return <canvas id={props.id} className="chart-canvas" height={500} />;
}
