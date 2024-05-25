"use client";

const BadHydration = () => {
	return (
		<div>
			<h1 className="text-3xl underline">Bad Hydration</h1>
			<p>Current Time:</p>
			<p>{new Date().getMilliseconds()}</p>
		</div>
	);
};

export default BadHydration;
