import Input from "../Input/Input";
import Select from "../Select/Select";
import SubmitButton from "../SubmitButton/SubmitButton";
import "./Form.css";

function Form({ btnText }) {
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

			<Select name="category" id="icategory" label="Selecione a categoria" htmlFor="icategory" />

			<SubmitButton value={btnText} />
		</form>
	);
}

export default Form;
