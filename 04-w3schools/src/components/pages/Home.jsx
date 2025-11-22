import Car from "./../Car";
import Counter from "./../Counter";
// import Greeting from "./../Greeting";
import MyList from "./../MyList";
import UserList from "./../UserList";
import H1 from "./../H1";
import Goal from "./../Goal";
import MyCars from "./../MyCars";
import MyForm from "./../MyForm";
import MyForm2 from "./../MyForm2";
import MyForm3 from "./../MyForm3";
import Modal from "./../Modal";

import { useState, useRef, useEffect, Suspense, lazy } from "react";
import PortalButton from "./../PortalButton";

// IMPORTAÇÃO CSS
import "./../stylesExternal.css";

// Importação com módulo
import styleModule from "./../Style.module.css";

import styleButton from "./../Button.module.css";
import ContainerButtonsStyled from "./../ContainerButtonsStyled";

const person = {
	name: "Eliza",
	age: 24,
};

const styleLoading = {
	height: "200px",
	background: "black",
	fontSize: "2rem",
	color: "white",
	padding: "20px",
};

const x = [1950, 1950, 1970];
const y = { name: "Ford", model: "Mustang" };

function shoot() {
	alert("Great Soot");
}

const shoot2 = (a) => alert(a);

const shoot3 = (a, b) => alert("a: " + a + " b: " + b.type);
const Greeting = lazy(() => import("./../Greeting"));

function Home() {
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
			<Counter />
			<Suspense fallback={<div style={styleLoading}>Loading...</div>}>
				<Greeting name="Mateus" age={21} />
				<Greeting name={person.name} age={person.age} />
				<Greeting person={person} />
			</Suspense>
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
			.
			<MyForm2 />
			.
			<MyForm3 styles={styleModule.form} />
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
					position: "relative",
					width: "300px",
					padding: "20px",
					border: "2px solid black",
					margin: "20px",
				}}
				onClick={() => setCount1((c) => c + 1)}
			>
				{count1}
				<button
					onClick={() => {
						setButtonIsOpen(!buttonIsOpen);
					}}
					type="button"
				>
					Exibir
				</button>

				{target && (
					<PortalButton buttonIsOpen={buttonIsOpen} target={target} onClick={() => setCount2((c) => c + 1)}>
						Floating Button {count2}
					</PortalButton>
				)}
			</div>
			<button className={`${styleButton.mybutton} ${styleButton.primary}`} type="button">
				Button Primary
			</button>
			.
			<button className={`${styleButton.secondary}`} type="button">
				Button Secondary
			</button>
			.
			<ContainerButtonsStyled />
		</>
	);
}

export default Home;
