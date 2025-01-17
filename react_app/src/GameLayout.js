import styles from "./GameLauout.module.css";
import { Information } from "./Informaton";
import { Field } from "./Field";
import { NewGameButton } from "./newGameButton";

export const GameLauout = ({
	currentPlayer,
	isGameEnded,
	isdraw,
	field,
	setField,
	setCurrentPlayer,
	setIsGameEnded,
	setIsDraw,
}) => {
	return (
		<div className={styles.container}>
			<Information
				currentPlayer={currentPlayer}
				isGameEnded={isGameEnded}
				isdraw={isdraw}
			></Information>

			<br></br>
			<Field
				field={field}
				setField={setField}
				currentPlayer={currentPlayer}
				setCurrentPlayer={setCurrentPlayer}
				setIsGameEnded={setIsGameEnded}
				isGameEnded={isGameEnded}
			></Field>

			<NewGameButton
				setField={setField}
				setIsGameEnded={setIsGameEnded}
				setIsDraw={setIsDraw}
			></NewGameButton>
		</div>
	);
};

export default GameLauout;
