import "./Input.css";

function Input({ type, htmlFor, label, name, id, placeholder, handleOnChange, value }) {
	return (
		<div className="form-group">
			<label htmlFor={htmlFor}>{label}</label>
			<input type={type} name={name} id={id} placeholder={placeholder} onChange={handleOnChange} value={value} />
		</div>
	);
}
export default Input;
