import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Company from "./pages/Company/Compant";
import Contact from "./pages/Contact/Contact";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import NewProject from "./pages/NewProject/NewProject";
import Projects from "./pages/Projects/Projects";
import Project from "./pages/Project/Project";

function App() {
	return (
		<Router>
			<Nav />

			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/company" element={<Company />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/newproject" element={<NewProject />} />
					<Route path="/project/:id" element={<Project />} />
				</Routes>
			</main>

			<Footer />
		</Router>
	);
}

export default App;
