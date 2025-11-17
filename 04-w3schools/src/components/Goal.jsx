import { MadeGoal, MissedGoal } from "./MissedGoal";

function Goal({ pIsGoal }) {
	const isGoal = pIsGoal;

	if (isGoal) {
		return (
			<>
				{isGoal ? <MadeGoal /> : <MissedGoal />}
				<MadeGoal />
			</>
		);
	}

	return (
		<>
			<>
				{isGoal ? <MadeGoal /> : <MissedGoal />}
				<MissedGoal />
			</>
		</>
	);
}

export default Goal;
