const fruitList = ["Apple", "Banana", "Cherry"];

function MyList() {
	return (
		<section>
			<h3>Lista de frutas</h3>

			<ul>
				{fruitList.map((fruit, index, array) => {
					return (
						<li key={fruit}>
							Number: <strong>{fruit}</strong>, index: <strong>{index}</strong>, array:{" "}
							<strong>{array.join("-")}</strong>
						</li>
					);
				})}
			</ul>
		</section>
	);
}

export default MyList;
