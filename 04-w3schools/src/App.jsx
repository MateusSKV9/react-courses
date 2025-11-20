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
import Modal from "./components/Modal";
import { useState, useRef, useEffect } from "react";
import PortalButton from "./components/PortalButton";

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
	const [isOpen, setIsOpen] = useState(false);
	const [count1, setCount1] = useState(0);
	const [count2, setCount2] = useState(0);
	const divRef = useRef(null);
	const [target, setTarget] = useState(null);
	const [buttonIsOpen, setButtonIsOpen] = useState(false);

	useEffect(() => {
		setTarget(divRef.current);
	}, []);

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
			<div>
				<button onClick={() => setIsOpen(true)} type="button">
					Open Modal
				</button>
			</div>
			<Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
				This is a React Portal (Modal)
			</Modal>
			<div
				id="boxPortalButton"
				ref={divRef}
				style={{
					width: "300px",
					padding: "20px",
					border: "2px solid black",
					margin: "20px",
				}}
				onClick={() => setCount1((c) => c + 1)}
			>
				{count1}
				<button onClick={() => setButtonIsOpen(!buttonIsOpen)} type="button">
					Exibir
				</button>

				{target && (
					<PortalButton buttonIsOpen={buttonIsOpen} target={target} onClick={() => setCount2((c) => c + 1)}>
						Floating Button {count2}
					</PortalButton>
				)}
			</div>
		</>
	);
}

export default App;
