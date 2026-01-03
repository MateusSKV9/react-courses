import { useEffect, useState } from "react";
import Input from "../Input/Input";
import Select from "../Select/Select";
import SubmitButton from "../SubmitButton/SubmitButton";
import "./ProjectForm.css";

function ProjectForm({ btnText, handleSubmit, projectData }) {
	const [categories, setCategories] = useState([]);
	const [project, setProject] = useState(projectData || {});

	useEffect(() => {
		async function fetchCategories() {
			try {
				const response = await fetch("http://localhost:5000/categories");

				if (!response.ok) throw new Error("Erro ao buscar categorias");

				const data = await response.json();
				setCategories(data);
			} catch (error) {
				console.error(error);
			}
		}

		fetchCategories();
	}, []);

	const submit = (e) => {
		e.preventDefault();
		handleSubmit(project);
	};

	const handleChange = (e) => {
		setProject((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleCategory = (e) => {
		setProject((prev) => ({
			...prev,
			category: {
				id: e.target.value,
				name: e.target.options[e.target.selectedIndex].text,
			},
		}));
	};

	return (
		<form onSubmit={submit} className="form-project">
			<Input
				type="text"
				id="iname"
				name="name"
				value={project.name || ""}
				handleOnChange={handleChange}
				label="Nome do projeto"
				placeholder="Insira o nome do projeto"
				htmlFor="iname"
			/>

			<Input
				type="number"
				id="ibudget"
				name="budget"
				value={project.budget || ""}
				handleOnChange={handleChange}
				placeholder="Insira o orçamento do projeto"
				label="Orçamento do projeto"
				htmlFor="ibudget"
			/>

			<Select
				options={categories}
				value={project.category ? project.category.id : ""}
				name="category"
				id="icategory"
				label="Selecione a categoria"
				htmlFor="icategory"
				handleOnChange={handleCategory}
			/>

			<SubmitButton value={btnText} />
		</form>
	);
}

export default ProjectForm;
