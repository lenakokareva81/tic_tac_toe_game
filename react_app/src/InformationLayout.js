import styles from "./InformationLayout.module.css";
import { Zero } from "./Zero";
import { Cross } from "./Cross";

export const InformationLayout = ({ currentPlayer, isGameEnded, isdraw }) => {
	const drawFigure = (currentPlayer) => {
		return currentPlayer === "x" ? (
			<Cross size="cross__small"></Cross>
		) : (
			<Zero size="zero__small"></Zero>
		);
	};
	return (
		<>
			<div className={styles.container}>
				{isdraw === true ? (
					<div className={styles.text}>ничья</div>
				) : (
					""
				)}

				{isdraw === false && isGameEnded === true ? (
					<>
						<div className={styles.text}>победа</div>
						{drawFigure(currentPlayer)}
					</>
				) : (
					""
				)}
				{isdraw === false && isGameEnded === false ? (
					<>
						<div className={styles.text}>сейчас ходят </div>
						{drawFigure(currentPlayer)}
					</>
				) : (
					""
				)}
			</div>
		</>
	);
};
