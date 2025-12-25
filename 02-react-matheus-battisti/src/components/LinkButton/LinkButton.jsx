import { Link } from "react-router-dom";

import "./LinkButton.css";

function LinkButton({ to, children }) {
	return (
		<Link className="linkButton" to={to}>
			{children}
		</Link>
	);
}

export default LinkButton;
