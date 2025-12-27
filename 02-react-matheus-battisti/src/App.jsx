import "./App.css";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home/Home";
import Company from "./pages/Company/Compant";
import Contact from "./pages/Contact/Contact";
import Project from "./pages/Project/Project";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import NewProject from "./pages/NewProject/NewProject";

function App() {
	return (
		<Router>
			<Nav />

			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/company" element={<Company />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/projects" element={<Project />} />
					<Route path="/newproject" element={<NewProject />} />
				</Routes>
			</main>

			<Footer />
		</Router>
	);
}

export default App;
