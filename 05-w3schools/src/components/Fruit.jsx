function Fruit() {
	const x = 5;
	let y = "Apple";
	let z = "Rice";

	if (x < 10) {
		y = "Banana";
	}

	return (
		<>
			<h2>{y}</h2>
			<h3>{z == "Rice" ? "Yes" : "No"}</h3>
		</>
	);
}

export default Fruit;
