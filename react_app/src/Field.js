import { FieldLayout } from "./FieldLayout";

export const Field = ({
	currentPlayer,
	field,
	setField,
	setCurrentPlayer,
	setIsGameEnded,
	isGameEnded,
}) => {
	return (
		<>
			<FieldLayout
				currentPlayer={currentPlayer}
				field={field}
				setField={setField}
				setCurrentPlayer={setCurrentPlayer}
				setIsGameEnded={setIsGameEnded}
				isGameEnded={isGameEnded}
			></FieldLayout>
		</>
	);
};
