var boxes = document.getElementsByClassName("grid-item");
var place = 0;
var current = document.activeElement;

var bottomButton = document.getElementById("checkMyAnswer");

window.onload = function firstFocus () {
	document.getElementById("firstBox").focus();
}

function keyPresses(event) {
	var keyPressed = event.key;
	var keyCode = event.keyCode;

	//Rules/logic of keypresses (place is associated with the tab index of each cell)
	//Checks to see if the key pressed is an integer and not zero
	if (isFinite(keyPressed) && keyCode !== 48 && place !== 81) {
		event.currentTarget.textContent = keyPressed;
	}
	//Checks to see if the key press is any one of the arrow keys and if the selection is along the edge of the grid
	else if (keyCode === 39 && place !== 80 && place !== 82) {
		//right arrow
		place += 1;
	}
	else if (keyCode === 37 && place !== 0 && place !== 81) {
		//left arrow
		place -= 1;
	}
	else if (keyCode === 38 && place > 8) {
		//up arrow
		if (place === 82) {
			place = place - 2;
		}
		else 
			place = place - 9;
	}
	else if (keyCode === 40 && place < 72 && (place !== 81 || place !== 82)) {
		//down arrow
		place = place + 9;
	}
	else if (keyCode === 40 && place >= 72) {
		if (place >= 78)
			place = 82;
		else
			place = 81;
	}
	//Checks for enter press to solve the puzzle
	else if (keyCode === 13) {
		if (place === 82) {
			resetBoard();
		}
		else {
			solutionCheck();
		}
	}

	//Controls the navigation by using 'place' to give tabIndex a focusable context
	var focus = document.getElementsByTagName("td")[place + 1].focus();
}

function solutionCheck() {
	//this function should run through 4 rule-based functions that return true/false and if all 4 are true, the player wins
	//These console logs are to check dev
	console.log(`The board is full: ${fullBoard()}`);
	console.log(`The rows are unique: ${rowChecker()}`);
	console.log(`The columns are unique: ${columnChecker()}`);
	console.log(`The sections are unique: ${sectionChecker()}`);

	if (!fullBoard() || !rowChecker() || !columnChecker() || !sectionChecker()) {
		bottomButton.textContent = "TRY AGAIN";
	}
	else {
		document.getElementById("header").textContent = "W I N N E R !!!";
		bottomButton.textContent = "SOLVED";
	}

}


function resetBoard() {
	var cell;

	for (var parse = 1; parse < 81; parse++) {
		document.getElementsByTagName("td")[parse].textContent = "x";
	}
}

function fullBoard() {
	//this function will check to see if every square on the board is filled. Then, it passes true/false to the solve function
	var complete = false;
	var checker;

	//The board starts with "x"s filling each inactive cell, so if any of those remain, the board is incomplete and doesn't win
	for (var parse = 0; parse < 81; parse++) {
		checker = document.getElementsByTagName("td")[parse].textContent;
		if (checker === "x") {
			complete = false;
		}
		else {
			complete = true;
		}
		if (complete === false) {
			break;
		}
	}
	return complete;
}

function rowChecker() {
	//this function will check to see if every row has all unique numbers. Then, it passes true/false to the solve function
	var uniqueRow = true;
	var checker;
	var rowArray = [];
	var activeRow

	//This will scan through every row to check for duplicates
	for (var rowNumber = 1; rowNumber <= 9; rowNumber++) {
		//In index.HTML, we specify unique rows by ID. In order for the loop to progress, the active row uses this HTML ID.
		activeRow = document.getElementById(`row${rowNumber}`);

		//In any given row, this creates an array of all the numbers in said row
		for (var cellParse = 0; cellParse < 9; cellParse++) {
			rowArray[cellParse] = activeRow.getElementsByTagName("td")[cellParse].textContent;
		}
		//by working 'backwards', we can store and pop the active number and check for duplicates in the array
		for (var i = 8; i >= 0; i--) {
			checker = rowArray[i];
			//Once we pop active number, it won't return to the array since we've already checked the number and duplicates would stop the loop
			rowArray.pop();

			if (rowArray.includes(checker)) {
				uniqueRow = false;
			}
		}
		//If at any point the board fails to meet the requirements for a winning board, all checking stops and the function returns false
		if (uniqueRow === false) {
			break;
		}
	}
	//If true, the board is a potential winner. If false, the board loses.
	return uniqueRow;
}

function columnChecker() {
	//this function will check to see if every column has all unique numbers. Then, it passes true/false to the solve function
	var uniqueColumn = true;
	var checker;
	var columnArray = [];
	var activeColumn;

	//This function works in the same way as the rowCheck function, using HTML classes to determine the active column
	//and then individually checking each cell in that column for duplicates using an array
	for (var columnNumber = 1; columnNumber <= 9; columnNumber++) {
		activeColumn = document.getElementsByClassName(`column${columnNumber}`);

		for (var cellParse = 0; cellParse < 9; cellParse++) {
			columnArray[cellParse] = activeColumn[cellParse].textContent;
		}
		for (var i = 8; i >= 0; i--) {
			checker = columnArray[i];
			columnArray.pop();

			if (columnArray.includes(checker)) {
				uniqueColumn = false;
			}
		}

		if (uniqueColumn === false) {
			break;
		}
	}
	return uniqueColumn;
}

function sectionChecker() {
	//this function will check to see if every section has all unique numbers. Then, it passes true/false to the solve function
	var uniqueSection = true;
	var checker;
	var sectionArray = [];
	var activeSection;

	//This function works in the same way as the rowCheck function, using HTML classes to determine the active section (3x3 square)
	//and then individually checking each cell in that section for duplicates using an array
	for (var sectionNumber = 1; sectionNumber <= 9; sectionNumber++) {
		activeSection = document.getElementsByClassName(`section${sectionNumber}`);

		for (var cellParse = 0; cellParse < 9; cellParse++) {
			sectionArray[cellParse] = activeSection[cellParse].textContent;
		}
		for (var i = 8; i >= 0; i--) {
			checker = sectionArray[i];
			sectionArray.pop();

			if (sectionArray.includes(checker)) {
				uniqueSection = false;
			}
		}

		if (uniqueSection === false) {
			break;
		}
	}
	return uniqueSection;
}

for (var i = 0; i < boxes.length; i++) {
	boxes[i].addEventListener('keydown', keyPresses);
}