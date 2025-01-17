import styles from "./FieldLayout.module.css";
import { Zero } from "./Zero";
import { Cross } from "./Cross";

export const FieldLayout = ({
	currentPlayer,
	field,
	setField,
	setCurrentPlayer,
	isGameEnded,
}) => {
	const createnewField = (indexForChange) => {
		let newfield = field;
		newfield.forEach((element, index, arr) => {
			indexForChange === index
				? (arr[index] = currentPlayer)
				: (arr[index] = arr[index]);
		});
		console.log(newfield);
		setField(newfield);
		currentPlayer === "x" ? setCurrentPlayer("0") : setCurrentPlayer("x");
	};

	return (
		<>
			<div className={styles.container}>
				{field.map((cell, index) => {
					return (
						<>
							{cell === "" && isGameEnded ? (
								<div className={`${styles.cellInactive}`}></div>
							) : (
								""
							)}
							{cell === "" && !isGameEnded ? (
								<div
									className={`${styles.cell} ${styles.active}`}
									onClick={() => createnewField(index)}
									key={index}
								></div>
							) : (
								""
							)}
							{cell === "0" ? (
								<div className={styles.cell} key={index}>
									<Zero size="zero__inCell"></Zero>
								</div>
							) : (
								""
							)}
							{cell === "x" ? (
								<div className={styles.cell} key={index}>
									<Cross Cross size="cross__inCell"></Cross>
								</div>
							) : (
								""
							)}
						</>
					);
				})}
			</div>
		</>
	);
};
