import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../Title";

function TaskPage() {
	const [searchParams] = useSearchParams();
	const title = searchParams.get("title");
	const description = searchParams.get("description");
	const navigate = useNavigate();

	return (
		<div className="w-screen h-screen flex justify-center bg-slate-500 p-6">
			<div className="w-[500px] space-y-4">
				<div className="flex justify-center items-center relative">
					<button
						onClick={() => navigate(-1)}
						className="absolute left-0 bottom-0  text-slate-500 rounded-md bg-slate-200 p-2"
						type="button"
					>
						<ChevronLeftIcon />
					</button>

					<Title>Detalhes da Tarefa</Title>
				</div>

				<div className="bg-slate-200 text-slate-600 p-4 rounded-md">
					<h2 className="text-xl  font-bold">{title}</h2>
					<p className="">{description}</p>
				</div>
			</div>
		</div>
	);
}

export default TaskPage;
