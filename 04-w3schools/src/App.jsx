import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

import { lazy, useState } from "react";
import Home from "./components/pages/Home";
import { BikeProducts, CarProducts } from "./components/pages/Products";
import Info from "./components/pages/Info";
import Search from "./components/pages/Search";
import SearchWithButton from "./components/pages/SearchWithButton";

const navLinkStyles = ({ isActive }) => ({
	color: isActive ? "#007bff" : "#333",
	textDecoration: isActive ? "none" : "underline",
	fontWeight: isActive ? "bold" : "normal",
	padding: "5px 10px",
});

function App() {
	const Products = lazy(() => import("./components/pages/Products"));
	const About = lazy(() => import("./components/pages/About"));
	const Contact = lazy(() => import("./components/pages/Contact"));
	const [user, setUser] = useState();

	return (
		<BrowserRouter>
			<nav style={{ display: "flex", gap: "20px" }}>
				<ul>
					<li>
						<NavLink to="/" style={navLinkStyles}>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to="/products" style={navLinkStyles}>
							Products
						</NavLink>
					</li>
					<li>
						<NavLink to="/about" style={navLinkStyles}>
							About
						</NavLink>
					</li>
					<li>
						<NavLink to="/contact" style={navLinkStyles}>
							Contact
						</NavLink>
					</li>
					<li>
						<NavLink to="/customer"> Info</NavLink>
						<ul>
							<li>
								<NavLink to="/customer/Emil">Emil</NavLink>
							</li>
							<li>
								<NavLink to="/customer/Tobias">Tobias</NavLink>
							</li>
							<li>
								<NavLink to={`/customer/${user}`}>User</NavLink>
							</li>
						</ul>
					</li>
					<li>
						<NavLink to="/search">Search useTransition</NavLink>
					</li>
					<li>
						<NavLink to="/search-with-button">Search With Button</NavLink>
					</li>
				</ul>
			</nav>

			<label htmlFor="user">
				User
				<input onChange={(e) => setUser(e.target.value)} value={user} type="text" name="user" id="user" />
			</label>

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/products" element={<Products />}>
					<Route path="car" element={<CarProducts />} />
					<Route path="bike" element={<BikeProducts />} />
				</Route>
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/customer" element={<Info />} />
				<Route path="/customer/:firstname" element={<Info />} />
				<Route path="/search" element={<Search />} />
				<Route path="/search-with-button" element={<SearchWithButton />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
