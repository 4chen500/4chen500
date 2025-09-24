import React, { useState, useEffect } from "react";

function WebVitalsDisplay() {
	const [metrics, setMetrics] = useState({});

	useEffect(() => {
		const handleMetric = (event) => {
			setMetrics((prevMetrics) => ({
				...prevMetrics,
				[event.detail.name]: event.detail.value,
			}));
		};

		window.addEventListener("webVitalsMetric", handleMetric);

		return () => {
			window.removeEventListener("webVitalsMetric", handleMetric);
		};
	}, []);

	return (
		<div className="App-metrics">
			<h3>Web Vitals</h3>
			{Object.keys(metrics).length === 0 ? (
				<p>No web vitals data yet.</p>
			) : (
				<ul>
					{Object.entries(metrics).map(([name, value]) => (
						<li key={name}>
							{name}: {value.toFixed(2)}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}

export default WebVitalsDisplay;
