import styled from "styled-components";

const Button = styled.button`
	padding: 10px 20px;
  margin: 2px 0px;
	border: none;
	border-radius: 4px;
	background-color: ${(props) => (props.btntype === "primary" ? "#007bff" : "#6c757d")};
	color: black;
	cursor: pointer;
  
`;

function ContainerButtonsStyled() {
	return (
		<>
			<br />
			<Button btntype="primary">Primary Button</Button>
			.
			<Button>Button Secondary</Button>
		</>
	);
}

export default ContainerButtonsStyled;
