const internalStyles = {
	fontSize: "1.1rem",
	fontWeight: "400",
};

function H1({ styles, children, ...rest }) {
	return (
		<h1 style={{ ...styles, ...internalStyles }} {...rest}>
			{children}
		</h1>
	);
}

export default H1;
