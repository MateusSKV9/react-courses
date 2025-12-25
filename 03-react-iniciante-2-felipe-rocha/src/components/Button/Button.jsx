import "./Button.css";

function Button({ children, onClick }) {
	return (
		<button onClick={onClick} className="button" type="button">
			{children}
		</button>
	);
}

export default Button;
