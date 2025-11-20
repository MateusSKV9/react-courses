import { createPortal } from "react-dom";

function PortalButton({ buttonIsOpen, target, onClick, children }) {
	if (!buttonIsOpen || !target) return null;

	return createPortal(
		<button
			onClick={onClick}
			type="button"
			style={{
				position: "absolute",
				bottom: "20px",
				right: "20px",
				padding: "10px",
				background: "blue",
				color: "white",
			}}
		>
			{children}
		</button>,
		target
	);
}

export default PortalButton;
