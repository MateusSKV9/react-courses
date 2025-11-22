import { useState } from "react";

function MyForm2() {
	const [inputs, setInputs] = useState({
		firstname: "John",
		lastname: "Doe",
		tomato: true,
		onion: false,
	});

	const handleChange = (e) => {
		const target = e.target;
		const name = target.name;
		const value = target.type === "checkbox" ? target.checked : target.value;
		setInputs((values) => ({ ...values, [name]: value }));
	};

	function handleSubmit(e) {
		e.preventDefault();
		alert(`Form: ${JSON.stringify(inputs)}`);

		let fillings = "";
		if (inputs.tomato) fillings += "Tomato";
		if (inputs.onion) {
			if (inputs.tomato) fillings += " and ";
			fillings += "onion";
		}

		if (fillings == "") fillings = "no fillings";
		alert(`${inputs.firstname} wants a burguer with ${fillings}`);
	}

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="firstname">
				First Name:
				<input onChange={handleChange} value={inputs.firstname} type="text" name="firstname" id="firstname" />
			</label>

			<label htmlFor="lastname">
				Last Name:
				<input onChange={handleChange} value={inputs.lastname} type="text" name="lastname" id="lastname" />
			</label>

			<p>
				<label htmlFor="tomato">
					Tomato:
					<input onChange={handleChange} checked={inputs.tomato} type="checkbox" name="tomato" id="tomato" />
				</label>
				<label htmlFor="onion">
					Onion:
					<input onChange={handleChange} checked={inputs.onion} type="checkbox" name="onion" id="onion" />
				</label>
			</p>

			<p>
				Current values: {inputs.firstname} {inputs.lastname}
			</p>
			<input type="submit" value="Enviar" />
		</form>
	);
}

export default MyForm2;
