import PropTypes from "prop-types";
import { ChevronRightIcon, DeleteIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
	const navigate = useNavigate();

	function onSeeDetailsClick(task) {
		const query = new URLSearchParams();
		query.set("title", task.title);
		query.set("description", task.description);
		navigate(`/task?${query.toString()}`);
	}

	return (
		<ul className="space-y-2 w-[400px] bg-slate-200 rounded-md shadow-md p-4">
			{tasks.map((task) => (
				<li key={task.id} className="flex gap-2">
					<button
						onClick={() => onTaskClick(task.id)}
						className={`bg-slate-400 w-full text-left rounded-md text-white p-2  ${task.isCompleted && "line-through"}`}
						type="button"
					>
						{task.title}
					</button>

					<button
						onClick={() => onSeeDetailsClick(task)}
						className="bg-slate-400 p-2 rounded-md text-white"
						type="button"
					>
						<ChevronRightIcon />
					</button>

					<button
						onClick={() => onDeleteTaskClick(task.id)}
						className="bg-slate-400 p-2 rounded-md text-white"
						type="button"
					>
						<DeleteIcon />
					</button>
				</li>
			))}
		</ul>
	);
}

Tasks.propTypes = {
	tasks: PropTypes.array.isRequired,
	onTaskClick: PropTypes.func,
	onDeleteTaskClick: PropTypes.func,
};

export default Tasks;
