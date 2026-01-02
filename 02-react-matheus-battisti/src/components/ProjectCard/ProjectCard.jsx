import LinkButton from "../LinkButton/LinkButton";
import styles from "./ProjectCard.module.css";

function ProjectCard({ id, name, budget, category, handleRemove }) {
	const handleClick = () => handleRemove(id);

	return (
		<article className={styles.card}>
			<h2 className={styles.name}>{name}</h2>

			<p className={styles.budget}>Orçamento R${budget}</p>
			<p className={styles.category_text}>
				<span className={`${styles.dot} ${styles[category]}`}></span>
				<span>{category}</span>
			</p>
			<div className={styles.containerbuttons}>
				<LinkButton to={`/project/${id}`}>Editar</LinkButton>
				<button className={styles.button} type="button" onClick={handleClick}>
					Remover
				</button>
			</div>
		</article>
	);
}

export default ProjectCard;
