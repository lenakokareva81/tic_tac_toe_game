import styles from "./newGameButton.module.css";

export const NewGameButton = ({ setField, setIsGameEnded, setIsDraw }) => {
	const newGame = () => {
		setField(["", "", "", "", "", "", "", "", ""]);
		setIsGameEnded(false);
		setIsDraw(false);
	};
	return (
		<div className={styles.button} onClick={newGame}>
			начать новую игру
		</div>
	);
};
