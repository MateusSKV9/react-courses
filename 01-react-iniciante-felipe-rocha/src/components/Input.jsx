import PropTypes from "prop-types";

function Input(props) {
	return <input className="w-full rounded-md p-2 border border-slate-400" {...props} />;
}

Input.propTypes = {
	type: PropTypes.string,
	placeholder: PropTypes.string,
	value: PropTypes.string,
	onChange: PropTypes.func,
};

export default Input;
