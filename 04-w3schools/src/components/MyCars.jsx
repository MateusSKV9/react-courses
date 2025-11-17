function MyCars() {
	const cars = [
		{ id: 1001, brand: "Ford" },
		{ id: 1002, brand: "BMW" },
		{ id: 1003, brand: "Audi" },
	];

	return (
		<>
			<h1>My Cars:</h1>
			<ul>
				{cars.map((car) => (
					<li key={car.id}>{car.brand}</li>
				))}
			</ul>
		</>
	);
}

export default MyCars;
