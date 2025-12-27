import Form from "../../components/ProjectForm/Form/Form";
import "./NewProject.css";

function NewProject() {
	return (
		<section className="new-project">
			<h1>Criar Projeto</h1>
			<p>Crie seu projeto para depois adicionar os serviços</p>

			<Form btnText="Criar projeto" />
		</section>
	);
}

export default NewProject;
