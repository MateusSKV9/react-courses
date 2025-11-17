import { useState } from "react";

function MyForm2() {
	const [inputs, setInputs] = useState({
		firstname: "John",
		lastname: "Doe",
	});

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setInputs((values) => ({ ...values, [name]: value }));
	};

	function handleSubmit(e) {
		e.preventDefault();
		alert(`Form: ${JSON.stringify(inputs)}`);
	}

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="firstName">
				First Name:
				<input onChange={handleChange} value={inputs.firstname} type="text" name="firstname" id="firstname" />
			</label>

			<label htmlFor="lastName">
				Last Name:
				<input onChange={handleChange} value={inputs.lastname} type="text" name="lastname" id="lastname" />
			</label>

			<p>
				Current values: {inputs.firstname} {inputs.lastname}
			</p>
			<input type="submit" value="Enviar" />
		</form>
	);
}

export default MyForm2;
