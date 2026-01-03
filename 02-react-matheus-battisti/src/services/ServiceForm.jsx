import { useState } from "react";
import Input from "../components/ProjectForm/Input/Input";
import SubmitButton from "../components/ProjectForm/SubmitButton/SubmitButton";
import "./../components/ProjectForm/ProjectForm/ProjectForm.css";

function ServiceForm({ handleSubmit, textBtn, projectData }) {
	const submit = (e) => {
		e.preventDefault();
		projectData.services.push(service);
		console.log(projectData);
		handleSubmit(projectData);
	};

	const handleChange = (e) => {
		setService({ ...service, [e.target.name]: e.target.value });
	};

	const [service, setService] = useState({});

	return (
		<form onSubmit={submit} className="form-project">
			<Input
				type="text"
				name="name"
				label="Nome do serviço"
				placeholder="Insira o nome do serviço"
				handleChange={handleChange}
			/>
			<Input
				type="number"
				name="cost"
				label="Custo do serviço"
				placeholder="Insira o nome do serviço"
				handleChange={handleChange}
			/>
			<Input
				type="text"
				name="description"
				label="Descrição do serviço"
				placeholder="Escreva o serviço"
				handleChange={handleChange}
			/>
			<SubmitButton value={textBtn} />
		</form>
	);
}

export default ServiceForm;
