// import { useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Form from "../../components/ProjectForm/Form/Form";
import "./NewProject.css";

function NewProject() {
	const navigate = useNavigate();

	const createPost = async (project) => {
		try {
			const response = await fetch("http://localhost:5000/projects", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(project),
			});

			if (!response.ok) throw new Error("Algo deu errado na crição");

			const data = await response.json();
			console.log(data);
		} catch (error) {
			console.error(error);
		}

		navigate("/projects", { state: { message: "Projeto criado com sucesso!" } });
	};

	return (
		<section className="new-project">
			<h1>Criar Projeto</h1>
			<p>Crie seu projeto para depois adicionar os serviços</p>

			<Form handleSubmit={createPost} btnText="Criar projeto" />
		</section>
	);
}

export default NewProject;
