function Car(props) {
	if (props.years && props.carInfor) {
		return (
			<h2>
				years={props.years}, carInfor={props.carInfor}, index[0]={props.years[1]}
			</h2>
		);
	}

	return (
		<h2>
			Nome: {props.name}, ano: {props.year}, cor: {props.color}
		</h2>
	);
}

export default Car;
