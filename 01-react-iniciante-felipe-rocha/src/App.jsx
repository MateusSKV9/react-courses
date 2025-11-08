import { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 as uuidv4 } from "uuid";
import Title from "./components/Title";

function App() {
	const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);

	function onTaskClick(taskId) {
		const newTasks = tasks.map((task) => {
			if (taskId == task.id) {
				return { ...task, isCompleted: !task.isCompleted };
			}

			return task;
		});

		setTasks(newTasks);
	}

	useEffect(() => {
		localStorage.setItem("tasks", JSON.stringify(tasks));
	}, [tasks]);

	// useEffect(() => {
	// 	const fetchTasks = async () => {
	// 		//CHAMA A API
	// 		const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10", { method: "GET" });

	// 		// PEGA DOS DADOS RETORNADOS
	// 		const data = await response.json();
	// 		console.log(data);

	// 		// ARMAZENA/PERSISTE OS DADOS NO STATE
	// 		setTasks(data);
	// 	};

	// 	fetchTasks();
	// }, []);

	function onDeleteTaskClick(taskId) {
		const newTasks = tasks.filter((task) => taskId != task.id);
		setTasks(newTasks);
	}

	function onAddTaskSubmit(title, description) {
		const newTask = {
			id: uuidv4(),
			title,
			description,
			isCompleted: false,
		};
		setTasks([...tasks, newTask]);
	}

	return (
		<div className="w-screen min-h-screen bg-slate-500 flex justify-center flex-col items-center gap-4 p-6">
			<Title>Gerenciador de Tarefas</Title>

			<AddTask onAddTaskSubmit={onAddTaskSubmit} className="w-[500]" />

			<Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick} />
			<div className="w-[500px]"></div>
		</div>
	);
}

export default App;
