import { useEffect, useState } from "react";
import styles from "./Project.module.css";
import { Form, useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import ProjectForm from "../../components/ProjectForm/ProjectForm/ProjectForm";
import Message from "../../components/Message/Message";

function Project() {
	const [project, setProject] = useState(null);
	const [loading, setLoading] = useState(true);
	const [editProjectForm, setEditProjectForm] = useState(false);
	const [message, setMessage] = useState();
	const [typeMessage, setTypeMessage] = useState();
	const { id } = useParams();

	useEffect(() => {
		fetchProject(id);

		setTimeout(fetchProject, 1000);
	}, [id]);

	const fetchProject = async (id) => {
		try {
			const response = await fetch(`http://localhost:5000/projects/${id}`, {
				method: "GET",
				headers: { "Content-Type": "application/json" },
			});

			if (!response.ok) throw new Error("Algo deu errado ao buscar o projeto.");

			const data = await response.json();
			setProject(data);
			console.log(data);
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	const toggleProjectForm = () => setEditProjectForm(!editProjectForm);

	const editPost = async (project) => {
		try {
			setLoading(true);

			if (project.budget < project.cost) {
				setMessage("O orçamento não pode ser menor que o custo do projeto!");
				setTypeMessage("error");
				return false;
			}

			const response = await fetch(`http://localhost:5000/projects/${project.id}`, {
				method: "PATCH",
				headers: { "Content-Type": "Application/json" },
				body: JSON.stringify(project),
			});

			if (!response.ok) throw new Error("Algo deu errado na alteração");

			const data = await response.json();
			fetchProject(project.id);
			setMessage("Projeto atualizado!");
			setTypeMessage("success");
			setEditProjectForm(false);
			console.log(data);
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			{loading ? (
				<Loading />
			) : project ? (
				<section className={styles.start}>
					{message && <Message type={typeMessage} message={message} />}
					<div className={styles.wrapper}>
						<h2 className={styles.name}>{project.name}</h2>
						<button className={styles.button} onClick={toggleProjectForm} type="button">
							{!editProjectForm ? "Editar" : "Fechar"}
						</button>
					</div>

					{!editProjectForm ? (
						<div className={styles.details}>
							<p>
								<strong>Categoria:</strong> {project.category.name}
							</p>
							<p>
								<strong>Total de orçamento:</strong> R${project.budget}
							</p>
							<p>
								<strong>Total utilizado:</strong> {project.cost}
							</p>
						</div>
					) : (
						<div className={styles.form}>
							<h3>Detalhes do projeto</h3>
							<ProjectForm handleSubmit={editPost} btnText="Concluir edição" projectData={project} />
						</div>
					)}
				</section>
			) : (
				<p style={styles}>Projeto não encontrado</p>
			)}
		</>
	);
}

export default Project;
