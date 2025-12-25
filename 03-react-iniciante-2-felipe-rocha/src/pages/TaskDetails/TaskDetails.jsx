import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button/Button";

import "./TaskDetails.css";

function TaskDetails() {
	const { taskTitle } = useParams();

	const navigate = useNavigate();

	return (
		<div className="task-details-container">
			<div className="back-button-container">
				<Button onClick={() => navigate("/")}>Voltar</Button>
			</div>
			<div>
				<h2>{taskTitle}</h2>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo vitae qui ut eaque id suscipit, voluptatum ex
					facere fugiat labore sit architecto quaerat dignissimos quibusdam veritatis, provident laudantium asperiores
					libero incidunt debitis ducimus. Magnam enim earum iusto magni reiciendis, eum dolore et quo maiores saepe?
					Deleniti omnis aut consectetur exercitationem!
				</p>
			</div>
		</div>
	);
}

export default TaskDetails;
