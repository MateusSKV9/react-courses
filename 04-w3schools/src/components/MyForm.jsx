import { useState } from "react";

function MyForm() {
	const [name, setName] = useState("Mateus");
	const [txtArea, setTxtArea] = useState("Text");
	const [myCar, setMyCar] = useState("Fiat");

	function handleChange(e) {
		setName(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		alert(`input: ${name} \n txtArea: ${txtArea} \n select: ${myCar}`);
	}

	function handleTextAreaChange(e) {
		setTxtArea(e.target.value);
	}

	function handleSelectChange(e) {
		setMyCar(e.target.value);
	}

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="name">
				<input onChange={handleChange} type="text" name="name" value={name} id="name" />
			</label>
			<p>Current value {name}</p>

			<textarea onChange={handleTextAreaChange} value={txtArea} name="mytxt" id="mytxt" />

			<br />

			<select onChange={handleSelectChange} value={myCar} name="select" id="select">
				<option value="Ford">Ford</option>
				<option value="Volvo">Volvo</option>
				<option value="Fiat">Fiat</option>
			</select>

			<br />
			<input type="submit" value="Enviar" />
		</form>
	);
}

export default MyForm;
