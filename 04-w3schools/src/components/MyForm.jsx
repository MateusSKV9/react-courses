import { useState } from "react";

function MyForm() {
	const [name, setName] = useState("Mateus");

	function handleChange(e) {
		setName(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		alert(name);
	}

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="name">
				<input onChange={handleChange} type="text" name="name" value={name} id="name" />
			</label>
			<p>Current value {name}</p>
			<input type="submit" value="Enviar" />
		</form>
	);
}

export default MyForm;
