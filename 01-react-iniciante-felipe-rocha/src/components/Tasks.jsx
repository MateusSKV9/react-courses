import PropTypes from "prop-types";

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
					<button className="bg-slate-400 p-2 rounded-md text-white" type="button">
						▶️
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
