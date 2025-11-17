import { useState } from "react";

function MyForm() {
	const [name, setName] = useState("Mateus");
	const [txtArea, setTxtArea] = useState("Text");

	function handleChange(e) {
		setName(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		alert(`input: ${name} \n txtArea: ${txtArea}`);
	}

	function handleTextAreaChange(e) {
		setTxtArea(e.target.value);
	}

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="name">
				<input onChange={handleChange} type="text" name="name" value={name} id="name" />
			</label>
			<p>Current value {name}</p>

			<textarea onChange={handleTextAreaChange} value={txtArea} name="mytxt" id="mytxt" />

			<input type="submit" value="Enviar" />
		</form>
	);
}

export default MyForm;
