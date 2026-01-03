import LinkButton from "../../components/LinkButton/LinkButton";
import Message from "../../components/Message/Message";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Projects.module.css";
import { useEffect, useState } from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Loading from "../../components/Loading/Loading";

function Projects() {
	const location = useLocation();
	const [projects, setProjects] = useState([]);
	const [loading, setLoading] = useState(true);
	const [message, setMessage] = useState("");

	const navigate = useNavigate();

	useEffect(() => {
		if (location.state?.message) {
			setMessage(location.state.message);
			navigate(location.pathname, { replace: true });
		}
	}, [location, navigate]);

	useEffect(() => {
		const fetchProjects = async () => {
			try {
				const response = await fetch("http://localhost:5000/projects", {
					method: "GET",
					headers: { "Content-Type": "application/json" },
				});

				if (!response.ok) throw new Error("Algo deu errado ao buscar os projetos");

				const data = await response.json();
				setProjects(data);
				console.log(data);
			} catch (error) {
				console.error(error);
			} finally {
				setLoading(false);
			}
		};

		setTimeout(fetchProjects, 1000);
	}, []);

	const handleRemoveProject = async (id) => {
		try {
			const response = await fetch(`http://localhost:5000/projects/${id}`, {
				method: "DELETE",
				headers: { "Content-Type": "application/json" },
			});

			if (!response.ok) throw new Error("Algo deu errado na remoção.");

			setProjects(projects.filter((project) => project.id != id));
			setMessage("Projeto removido com sucesso!");
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<section className={styles.start}>
			<div className={styles.wrapper}>
				<h1>Projetos</h1>
				<LinkButton to="/newproject">Novo Projeto</LinkButton>
			</div>
			{message && <Message type="success" message={message} />}

			<div className={styles.container_projects}>
				{loading ? (
					<Loading />
				) : projects.length > 0 ? (
					projects.map((project) => (
						<ProjectCard
							key={project.id}
							id={project.id}
							name={project.name}
							budget={project.budget}
							category={project.category?.name}
							handleRemove={handleRemoveProject}
						/>
					))
				) : (
					<p>Nenhum projeto encontrado</p>
				)}
			</div>
		</section>
	);
}

export default Projects;
