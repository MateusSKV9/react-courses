import Task from "../Task/Task";

function Tasks({ tasks, handleTaskClick, handleTaskDelete }) {
	return (
		<>
			{tasks.map((task) => (
				<Task handleTaskClick={handleTaskClick} handleTaskDelete={handleTaskDelete} key={task.id} task={task} />
			))}
		</>
	);
}

export default Tasks;
