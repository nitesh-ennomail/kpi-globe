import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../home/Home";

import HomeOverview from "../home/HomeOverview";
import HomeDriver from "../home/HomeDriver";
import HomeEngagement from "../home/HomeEngagement";
import Signup from "../signup/Signup";
import SignupOverview from "../signup/SignupOverview";
import SignupDriver from "../signup/SignupDriver";
import Signin from "../Authentication/Signin";
import SignupEngagement from "../signup/SignupEngagement";
import SignupDemographics from "../signup/SignupDemographics";
function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Signin />} />

				{/* Home route */}
				<Route path="home" element={<Home />}>
					<Route path="overview" element={<HomeOverview />} />
					<Route path="driver" element={<HomeDriver />} />
					<Route path="engagement" element={<HomeEngagement />} />
				</Route>

				{/* Signup route */}
				<Route path="signup" element={<Signup />}>
					<Route path="overview" element={<SignupOverview />} />
					<Route path="driver" element={<SignupDriver />} />
					<Route path="engagement" element={<SignupEngagement />} />
					<Route path="demographics" element={<SignupDemographics />} />
					{/* <Route path="hcp-performance" element={<SignupHcpPerformance />} /> */}
				</Route>

				<Route
					path="*"
					element={
						<main style={{ padding: "1rem" }}>
							<p>There's nothing here!</p>
						</main>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
