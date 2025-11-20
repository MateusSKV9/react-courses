import { useState } from "react";

function MyForm3({ styles }) {
	const [selectedFruit, setSelectedFruit] = useState("banana");

	const handleChange = (event) => {
		setSelectedFruit(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		alert(`Your favorite fruit is ${selectedFruit}`);
	};

	return (
		<form className={styles} onSubmit={handleSubmit}>
			<p>Select your favorite fruit:</p>

			<label htmlFor="apple">
				<input
					onChange={handleChange}
					checked={selectedFruit === "apple"}
					value="apple"
					type="radio"
					name="apple"
					id="apple"
				/>
				Apple
			</label>

			<label htmlFor="banana">
				<input
					onChange={handleChange}
					checked={selectedFruit === "banana"}
					value="banana"
					type="radio"
					name="banana"
					id="banana"
				/>
				Banana
			</label>

			<label htmlFor="charry">
				<input
					onChange={handleChange}
					checked={selectedFruit === "charry"}
					value="charry"
					type="radio"
					name="charry"
					id="charry"
				/>
				Charry
			</label>

			<input type="submit" value="Enviar" />
		</form>
	);
}

export default MyForm3;
