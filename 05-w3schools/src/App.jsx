import Counter from "./components/Counter";
import Greeting from "./components/Greeting";
import MyList from "./components/MyList";
import UserList from "./components/UserList";

const person = {
	name: "Eliza",
	age: 24,
};

function App() {
	return (
		<>
			<MyList />
			<UserList />
			<Greeting name="Mateus" age={21} />
			<Greeting name={person.name} age={person.age} />
			<Greeting person={person} />
			<Counter />
		</>
	);
}

export default App;
