import { InformationLayout } from "./InformationLayout.js";

export const Information = ({ currentPlayer, isGameEnded, isdraw }) => {
	return (
		<>
			<InformationLayout
				currentPlayer={currentPlayer}
				isGameEnded={isGameEnded}
				isdraw={isdraw}
			></InformationLayout>
		</>
	);
};
