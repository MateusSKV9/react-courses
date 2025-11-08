import PropTypes from "prop-types";
import { useState } from "react";

function AddTask({ onAddTaskSubmit }) {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	// console.log({ title, description });

	return (
		<form
			className="bg-slate-200 rounded-md p-4 shadow-md w-[400px] flex flex-col
      gap-2
    "
		>
			<input
				placeholder="Título da tarefa"
				className="w-full rounded-md p-2 border border-slate-400"
				type="text"
				name=""
				id=""
				value={title}
				onChange={(event) => setTitle(event.target.value)}
			/>
			<input
				placeholder="Descrição da tarefa"
				className="w-full rounded-md p-2 border border-slate-400"
				type="text"
				name=""
				id=""
				value={description}
				onChange={(event) => setDescription(event.target.value)}
			/>
			<button
				onClick={() => {
					if (!title.trim() || !description.trim()) {
						return alert("Preencha o título e a descrição!");
					}
          

					onAddTaskSubmit(title, description);
					setTitle("");
					setDescription("");
				}}
				className="w-full rounded-md bg-slate-600 text-white p-2"
				type="button"
			>
				Adicionar
			</button>
		</form>
	);
}

AddTask.propTypes = {
	onAddTaskSubmit: PropTypes.func,
};

export default AddTask;
