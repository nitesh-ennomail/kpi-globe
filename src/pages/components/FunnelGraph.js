import React, { useEffect, useState } from "react";
import FunnelGraph from "funnel-graph-js";

const FunnelGraphChart = ({ data }) => {
	// const [funnelData, setFunnelData] = useState(data);

	useEffect(() => {
		let graph = new FunnelGraph({
			container: "#funnel",
			gradientDirection: "horizontal",
			data: data,
			displayPercent: true,
			direction: "horizontal",
			// subLabelValue: "raw",
		});
		graph.draw();
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
			<div className="funnel funnel-container" id="funnel" />
		</>
	);
};

export default FunnelGraphChart;
