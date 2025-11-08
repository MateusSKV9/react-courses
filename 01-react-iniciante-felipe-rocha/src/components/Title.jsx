import PropTypes from "prop-types";

function Title(props) {
	return <h1 className="text-slate-100 font-bold text-center text-3xl">{props.children}</h1>;
}

Title.propTypes = {
	children: PropTypes.node,
};

export default Title;
