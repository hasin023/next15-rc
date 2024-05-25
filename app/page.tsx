// import BadHydration from "@/components/bad-hydration";
import MetadataSubComp from "@/components/metadata-comp";
import UnoptimizedCounter from "@/components/unoptimized-counter";

export default async function Home() {
	const response = await fetch("http://localhost:3000/api/time");
	const { time } = await response.json();

	return (
		<div>
			<h1 className="p-4 flex items-center justify-center text-5xl text-indigo-500">
				NextJS 15 RC
			</h1>
			<div className="border-2 border-gray-200 px-2">
				<MetadataSubComp />
				<UnoptimizedCounter />
				{/* <BadHydration /> */}
				<div className="p-4 text-center">
					<h2 className="text-2xl text-indigo-500">Server Time</h2>
					<p className="text-gray-600">{time}</p>
				</div>
			</div>
		</div>
	);
}
