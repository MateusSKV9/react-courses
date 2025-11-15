import H1 from "./H1";

function Greeting({ name, age, person }) {
	if (person) {
		return (
			<H1 styles={{ color: "green" }}>
				Hello, I'm {person.name} and {person.age} years old
			</H1>
		);
	}

	return (
		<H1 styles={{ color: "red" }} title={"Title Pessoas"}>
			Hello, I'm {name} and {age} years old
		</H1>
	);
}

export default Greeting;
