import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
	return (
		<div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
			<h1 className="text-blue-500 text-3xl">Gerenciador de Tarefas</h1>
			<AddTask />
			<Tasks />
		</div>
	);
}

export default App;
