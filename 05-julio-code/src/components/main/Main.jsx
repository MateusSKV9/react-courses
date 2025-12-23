import { useState } from "react";
import styles from "./Main.module.css";
import programmerImage from "../../assets/programmer.png";

function Main() {
	const [article, setArticle] = useState("");

	const showDescription = () => setArticle("Sou uma programador com foco em desenvolviment web.");

	return (
		<main className="pad-20">
			<section>
				<h1>
					Meu nome é <stsrong>Mateus Santos</stsrong>.
				</h1>
				<h3>Estudando React</h3>
				<button onClick={showDescription} className={styles.myButton} type="button">
					Saiba mais
				</button>
				<article>{article}</article>
			</section>

			<img className={styles.illustration} src={programmerImage} alt="Programmer imagem" />
		</main>
	);
}

export default Main;
