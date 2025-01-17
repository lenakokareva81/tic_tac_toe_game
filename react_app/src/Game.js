import { GameLauout } from "./GameLayout";
import { useState } from "react";

export const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState("x");
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isdraw, setIsDraw] = useState(false);
	const [field, setField] = useState(["", "", "", "", "", "", "", "", ""]);
	const WIN_PATTERNS = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	const arrayInFieldCurrentPlayer = [];
	const prevCurrentPlayer = currentPlayer === "0" ? "x" : "0";

	const arrayInarraw = (inArraw, array) => {
		let find = true;
		inArraw.forEach((elem) => {
			find = find && array.includes(elem);
		});
		return find;
	};

	field.forEach((item, index) => {
		if (item === prevCurrentPlayer) {
			arrayInFieldCurrentPlayer.push(index);
		}
	});

	let findWin = false;
	WIN_PATTERNS.forEach((winArray) => {
		findWin = findWin || arrayInarraw(winArray, arrayInFieldCurrentPlayer);
	});

	const allcell = field.some((item) => {
		return item === "";
	});

	if (!isGameEnded) {
		if (findWin) {
			setIsGameEnded(true);
			setCurrentPlayer(prevCurrentPlayer);
		} else if (allcell === false) {
			setIsGameEnded(true);
			setIsDraw(true);
		}
	}

	return (
		<>
			<GameLauout
				currentPlayer={currentPlayer}
				isGameEnded={isGameEnded}
				isdraw={isdraw}
				field={field}
				setField={setField}
				setCurrentPlayer={setCurrentPlayer}
				setIsGameEnded={setIsGameEnded}
				setIsDraw={setIsDraw}
			></GameLauout>
		</>
	);
};

export default Game;
