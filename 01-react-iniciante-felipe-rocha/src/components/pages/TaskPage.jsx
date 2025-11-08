import { useSearchParams } from "react-router-dom";

function TaskPage() {
	const [searchParams] = useSearchParams();
	const title = searchParams.get("title");
	const description = searchParams.get("description");

	return (
		<div className="w-screen h-screen bg-slate-500 p-6">
			{title} and {description}
		</div>
	);
}

export default TaskPage;
