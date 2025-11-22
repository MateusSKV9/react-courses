import { NavLink, Outlet } from "react-router-dom";

import "./../navLink.css";

function CarProducts() {
	return (
		<div>
			<h2>Cars</h2>
			<ul>
				<li>Audi</li>
				<li>BMW</li>
				<li>Volvo</li>
			</ul>
		</div>
	);
}

function BikeProducts() {
	return (
		<div>
			<h2>Bikes</h2>
			<ul>
				<li>Yamaha</li>
				<li>Suzuki</li>
				<li>Honda</li>
			</ul>
		</div>
	);
}

export default function Products() {
	return (
		<>
			<h1>Products Page</h1>
			<nav>
				<NavLink to="/products/car" className={({ isActive }) => (isActive ? "linkActive" : "link")}>
					Cars
				</NavLink>{" "}
				|{" "}
				<NavLink to="/products/bike" className={({ isActive }) => (isActive ? "linkActive" : "link")}>
					Bikes
				</NavLink>
			</nav>
			<Outlet />
		</>
	);
}

export { CarProducts, BikeProducts };
