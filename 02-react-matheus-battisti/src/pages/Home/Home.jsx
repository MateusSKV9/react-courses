import "./Home.css";

import imageHome from "./../../assets/bitcoin.svg";
import LinkButton from "../../components/LinkButton/LinkButton";

function Home() {
	return (
		<section className="home">
			<h1>
				Bem-vindo ao <span>Costs</span>
			</h1>
			<h3>Comece a gerenciar seus projetos agora mesmo!</h3>
			<LinkButton to="/newproject">Criar projeto</LinkButton>
			<img src={imageHome} alt="" />
		</section>
	);
}

export default Home;
