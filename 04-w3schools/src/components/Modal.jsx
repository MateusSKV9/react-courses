import { createPortal } from "react-dom";

const stylesDiv = {
	position: "fixed",
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	backgroundColor: "rgba(0, 0, 0, 0.5)",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
};

function Modal({ isOpen, onClose, children }) {
	if (!isOpen) return null;

	return createPortal(
		<div style={stylesDiv}>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexDirection: "column",
					background: "white",
					padding: "20px",
					borderRadius: "8px",
				}}
			>
				{children}
				<br />
				<button onClick={onClose} type="button">
					Close
				</button>
			</div>
		</div>,
		document.body
	);
}

export default Modal;
