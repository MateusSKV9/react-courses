import { useState } from "react";

function MyForm() {
	const [name, setName] = useState("Mateus");

	function handleChange(e) {
		setName(e.target.value);
	}

	return (
		<form>
			<label htmlFor="name">
				<input onChange={handleChange} type="text" name="name" value={name} id="name" />
			</label>
			<p>Current value {name}</p>
		</form>
	);
}

export default MyForm;
