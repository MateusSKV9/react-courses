import "./header.css";

function Header() {
	return (
		<header className="pad-20">
			<h1 className="logo">Mateus Santos</h1>

			<nav>
				<ul>
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#">Sobre</a>
					</li>
					<li>
						<a href="#">Projetos</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
