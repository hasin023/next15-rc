"use client";

import { useState } from "react";

const UnoptimizedCounter = () => {
	const [count, setCount] = useState(0);

	const increment = () => setCount((prev) => prev + 1);
	const decrement = () => setCount((prev) => prev - 1);

	return (
		<div className="flex flex-col gap-1 p-4">
			<h1 className="text-3xl underline">Unoptimized Counter</h1>
			<SubHeader />
			<SubHeader />
			<p className="text-xl font-sans">{count}</p>
			<div className="flex gap-2">
				<button
					className="bg-lime-600 px-2 py-1 rounded-sm text-white hover:bg-lime-700 shadow-md"
					type="button"
					onClick={increment}
				>
					Increment
				</button>
				<button
					className="bg-red-600 px-2 py-1 rounded-sm text-white hover:bg-red-700 shadow-md"
					type="button"
					onClick={decrement}
				>
					Decrement
				</button>
			</div>
		</div>
	);
};

const SubHeader = () => {
	return <div className="text-yellow-600 text-2xl">Sub Header 2</div>;
};

export default UnoptimizedCounter;
