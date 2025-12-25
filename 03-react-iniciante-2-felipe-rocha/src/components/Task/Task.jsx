import { useNavigate } from "react-router-dom";
import "./Task.css";
import { CgClose, CgInfo } from "react-icons/cg";

function Task({ task, handleTaskClick, handleTaskDelete }) {
	const navigate = useNavigate();

	const onHandleTaskClick = () => handleTaskClick(task.id);

	const onHandleTaskDelete = (e) => {
		e.stopPropagation();
		handleTaskDelete(task.id);
	};

	const handleTaskDetails = () => navigate(`/task/${task.title}`);

	return (
		<div onClick={onHandleTaskClick} className={`task-container ${task.completed ? "isCompleted" : null}`}>
			<div className="task-title">{task.title}</div>
			<div className="buttons-container">
				<CgInfo onClick={handleTaskDetails} />
				<CgClose onClick={onHandleTaskDelete} />
			</div>
		</div>
	);
}

export default Task;
