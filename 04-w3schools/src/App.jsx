import Car from "./components/Car";
import Counter from "./components/Counter";
import Greeting from "./components/Greeting";
import MyList from "./components/MyList";
import UserList from "./components/UserList";
import H1 from "./components/H1";
import Goal from "./components/Goal";
import MyCars from "./components/MyCars";
import MyForm from "./components/MyForm";
import MyForm2 from "./components/MyForm2";
import MyForm3 from "./components/MyForm3";

const person = {
	name: "Eliza",
	age: 24,
};

const x = [1950, 1950, 1970];
const y = { name: "Ford", model: "Mustang" };

function shoot() {
	alert("Great Soot");
}

const shoot2 = (a) => alert(a);

const shoot3 = (a, b) => alert("a: " + a + " b: " + b.type);

function App() {
	return (
		<>
			<MyList />
			<UserList />
			<Greeting name="Mateus" age={21} />
			<Greeting name={person.name} age={person.age} />
			<Greeting person={person} />
			<Counter />
			<Car name="Uno" year={2000} color="Red" />
			<Car years={x} carInfor={JSON.stringify(y)} />
			<H1></H1>
			<button onClick={shoot} type="button">
				Take the Shot()
			</button>
			<button onClick={() => shoot2("Goal!")} type="button">
				Shoot 2
			</button>
			<button onClick={(event) => shoot3("Goal", event)} type="button">
				Shoot 3
			</button>
			<Goal pIsGoal={false} />
			-
			<Goal pIsGoal={true} />
			<Car brand={"Ford"} />
			<MyCars />
			<MyForm />
			<MyForm2 />
			<MyForm3 />
		</>
	);
}

export default App;
