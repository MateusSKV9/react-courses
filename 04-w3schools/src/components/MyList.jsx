import H1 from "./H1";

const fruitList = ["Apple", "Banana", "Cherry"];

function MyList() {
	return (
		<section>
			<H1 styles={{ color: "blue" }} title={"title frutas"}>
				Lista de frutas
			</H1>

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
