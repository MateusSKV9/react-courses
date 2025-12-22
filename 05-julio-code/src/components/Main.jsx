import { useState } from "react";
import styles from "./../components/Main.module.css";

function Main() {
	const [name, setName] = useState("Sem nada");
	const [count1, setCount1] = useState(0);
	const [count2, setCount2] = useState(0);

	const onClickIncrement = () => setCount1(count1 + 1);

	const onClick = () => setName("Mateus");

	return (
		<main className="pad-20">
			<h1>Estudando React</h1>
			<p>
				Meu nome é <strong>Mateus Santos</strong>.
			</p>
			<button className={styles.myButton} onClick={onClickIncrement} type="button">
				Aumentar {count1}
			</button>
			<button
				className={styles.myButton}
				onClick={onClick}
				onMouseOver={() => {
					setName("Passou por cima");
				}}
				onMouseOut={() => {
					setName("Saiu");
				}}
				type="button"
			>
				Mudar parágrafo
			</button>
			<button
				className={styles.myButton}
				onClick={() => {
					setCount2(count2 - 1);
				}}
				type="button"
			>
				Diminuir {count2}
			</button>
			<p>{name}</p>
		</main>
	);
}

export default Main;
