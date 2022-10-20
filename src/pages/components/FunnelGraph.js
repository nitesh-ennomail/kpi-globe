import React, { useEffect, useState } from "react";
import FunnelGraph from "funnel-graph-js";

const FunnelGraphChart = ({
	id,
	data,
	direction = "vertical",
	displayPercent = false,
}) => {
	// const [funnelData, setFunnelData] = useState(data);
	console.log("displayPercent", displayPercent);
	useEffect(() => {
		let graph = new FunnelGraph({
			container: `#${id}`,
			gradientDirection: `${direction}`,
			// gradientDirection: "vertical",
			data: data,
			displayPercent: displayPercent,
			direction: `${direction}`,
			// direction: "vertical",

			// subLabelValue: "raw",
		});
		graph.draw();

		// const funnelGraphc = new FunnelGraph({
		// 	container: "#funnel",
		// 	gradientDirection: "vertical",
		// 	data: data,
		// 	displayPercent: true,
		// 	direction: "vertical",
		// });
		// funnelGraphc.draw();

		// graph.updateData(data);
		// graph.update(data);
		// let graph = new FunnelGraph({
		// 	container: ".funnel",
		// 	gradientDirection: "horizontal",
		// 	data: data,
		// 	direction: "horizontal",
		// });
		// graph.draw();
		// graph.updateData(data);
		// graph.update(data);
		// return () => {
		// 	graph.update(funnelData);
		// };
	}, [data]);

	// const changeData = () => {
	// 	// graph.destroy();
	// 	graph.updateData(data);
	// 	graph.update(data);
	// };

	return (
		<>
			{/* <button onClick={changeData}>change</button> */}
			<div className="funnel funnel-container" id={id} />
		</>
	);
};

export default FunnelGraphChart;
