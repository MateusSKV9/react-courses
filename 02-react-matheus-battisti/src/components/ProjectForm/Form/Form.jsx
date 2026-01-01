import { useEffect, useState } from "react";
import Input from "../Input/Input";
import Select from "../Select/Select";
import SubmitButton from "../SubmitButton/SubmitButton";
import "./Form.css";

function Form({ btnText }) {
	const [categories, setCategories] = useState([]);
	const [category, setCategory] = useState();

	const handleOnChange = (e) => setCategory(e.target.value);

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

	return (
		<form className="form-project">
			<Input
				type="text"
				id="iname"
				name="name"
				label="Nome do projeto"
				placeholder="Insira o nome do projeto"
				htmlFor="iname"
			/>

			<Input
				type="number"
				name="budget"
				id="ibudget"
				placeholder="Insira o orçamento do projeto"
				label="Orçamento do projeto"
				htmlFor="ibudget"
			/>

			<Select
				options={categories}
				value={category}
				name="category"
				id="icategory"
				label="Selecione a categoria"
				htmlFor="icategory"
				handleOnChange={handleOnChange}
			/>

			<SubmitButton value={btnText} />
		</form>
	);
}

export default Form;
