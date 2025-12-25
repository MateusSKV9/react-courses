import { useState, useEffect } from "react";
import "./App.css";
import Task from "./components/Task/Task";
import Tasks from "./components/Tasks/Tasks";
import AddTask from "./components/AddTask/AddTask";

import axios from "axios";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header/Header";
import TaskDetails from "./pages/TaskDetails/TaskDetails";
function App() {
	const [loading, setLoading] = useState(true);
	const [tasks, setTasks] = useState([
		{
			id: "1",
			title: "Estudar Programação",
			completed: false,
		},
		{
			id: "2",
			title: "Ler livros",
			completed: true,
		},
		{
			id: "3",
			title: "Meditar",
			completed: false,
		},
	]);

	useEffect(() => {
		const fetchTasks = async () => {
			const { data } = await axios.get("https://jsonplaceholder.cypress.io/todos?_limit=20");
			setTasks(data);
			setLoading(false);
		};

		fetchTasks();
	}, []);

	const handleTaskAddition = (taskTitle) => {
		const newTasks = [
			...tasks,
			{
				id: uuidv4(),
				title: taskTitle,
				completed: false,
			},
		];
		setTasks(newTasks);
		console.log(newTasks);
	};

	const handleTaskClick = (taskId) => {
		const newTasks = tasks.map((task) => {
			if (taskId === task.id) {
				task = { ...task, completed: !task.completed };
			}
			return task;
		});
		console.log(newTasks);
		setTasks(newTasks);
	};

	const handleTaskDelete = (taskId) => {
		const newTasks = tasks.filter((task) => taskId !== task.id);
		console.log(newTasks);
		setTasks(newTasks);
	};

	return (
		<Router>
			<div className="container">
				<Header />

				{loading ? (
					<p>Carregando...</p>
				) : (
					<Routes>
						<Route
							path="/"
							element={
								<>
									<AddTask handleTaskAddition={handleTaskAddition} />
									<Tasks handleTaskDelete={handleTaskDelete} handleTaskClick={handleTaskClick} tasks={tasks} />
								</>
							}
						/>
						<Route path="/task/:taskTitle" element={<TaskDetails />} />
					</Routes>
				)}
			</div>
			{/* <button onClick={() => setMessage("Helllooo!")} type="button">
				Mudar mensagem
        </button> */}
		</Router>
	);
}

export default App;
