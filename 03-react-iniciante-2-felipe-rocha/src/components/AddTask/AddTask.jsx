import { useState } from "react";
import "./AddTask.css";
import Button from "../Button/Button";

function AddTask({ handleTaskAddition }) {
	const [inputData, setInputData] = useState("");

	const handleInputChange = (e) => setInputData(e.target.value);

	const handleTaskClick = () => {
		handleTaskAddition(inputData);
		setInputData("");
	};

	return (
		<div className="add-task-container">
			<input
				className="add-task-input"
				value={inputData}
				onChange={handleInputChange}
				type="text"
				name="task"
				id="task"
			/>
			<div className="add-task-button-container">
				<Button onClick={handleTaskClick}>Adicionar</Button>
			</div>
		</div>
	);
}

export default AddTask;
