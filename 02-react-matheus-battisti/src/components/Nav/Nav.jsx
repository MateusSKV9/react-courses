import { Link, NavLink } from "react-router-dom";

import "./Nav.css";

function Nav() {
	return (
		<header>
			<Link to="/">
				<h1 id="logo">🪙Costs</h1>
			</Link>

			<nav>
				<ul>
					<li>
						<NavLink to="/" end>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to="/newproject">Projetos</NavLink>
					</li>
					<li>
						<NavLink to="/contact">Contato</NavLink>
					</li>
					<li>
						<NavLink to="/company">Empresa</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Nav;
