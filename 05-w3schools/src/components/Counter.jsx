import { useState } from "react";

function Counter() {
	const [count, setCount] = useState(0);

	function changeValue() {
		setCount((prev) => (prev < 10 ? prev + 1 : prev));
	}

	return (
		<button
			disabled={count === 10}
			className={`counter  ${count == 10 && "block"} `}
			onClick={changeValue}
			type="button"
		>
			{count}
		</button>
	);
}

export default Counter;
