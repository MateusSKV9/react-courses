import { useParams } from "react-router-dom";

function Info() {
	const { firstname } = useParams();

	return (
		<>
			<h1>Info Page</h1>

			{firstname && <h3>{firstname}</h3>}
		</>
	);
}

export default Info;
