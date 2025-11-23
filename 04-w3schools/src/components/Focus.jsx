import { forwardRef, useRef } from "react";

const MyInput = forwardRef((props, ref) => <input ref={ref} {...props} />);

function Focus() {
	const inputRef = useRef();

	const focusInput = () => {
		inputRef.current.focus();
	};

	return (
		<div>
			<MyInput ref={inputRef} placeholder="Type here..." />
			<button onClick={focusInput} type="button">
				Focus input children
			</button>
		</div>
	);
}

export default Focus;
