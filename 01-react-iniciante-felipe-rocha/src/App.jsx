import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
	const [tasks, setTasks] = useState([
		{
			id: 1,
			title: "Estudar Inglês",
			description: "Estudar inglês por duas horas.",
			isCompleted: false,
		},
		{
			id: 2,
			title: "Estudar Programação",
			description: "Estudar programação por duas horas.",
			isCompleted: false,
		},
		{
			id: 3,
			title: "Estudar Álgebra",
			description: "Estudar Álgebra por duas horas.",
			isCompleted: false,
		},
	]);

	function onTaskClick(taskId) {
		const newTasks = tasks.map((task) => {
			if (taskId == task.id) {
				return { ...task, isCompleted: !task.isCompleted };
			}

			return task;
		});

		setTasks(newTasks);
	}

	return (
		<div className="w-screen h-screen bg-slate-500 flex justify-center flex-col items-center gap-1 p- 6">
			<h1 className="text-slate-100 font-bold text-center text-3xl">Gerenciador de Tarefas</h1>

			<AddTask className="w-[500]" />

			<Tasks tasks={tasks} onTaskClick={onTaskClick} />
			<div className="w-[500px]"></div>
		</div>
	);
}

export default App;
