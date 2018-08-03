var boxes = document.getElementsByClassName("grid-item");
var place = 0;
var current = document.activeElement;

var bottomButton = document.getElementById("checkMyAnswer");

//Below are the potential options for a starting board
//each array of 9 objects represents a row on the board
var boards = [
	[
		[
			{value: null, section: 1, interactive: true}, {value: null, section: 1, interactive: true}, {value: null, section: 1, interactive: true}, 
			{value: 2, section: 2, interactive: false}, {value: 6, section: 2, interactive: false}, {value: null, section: 2, interactive: true}, 
			{value: 7, section: 3, interactive: false}, {value: null, section: 3, interactive: true}, {value: 1, section: 3, interactive: false}
		],
		[
			{value: 6, section: 1, interactive: false}, {value: 8, section: 1, interactive: false}, {value: null, section: 1, interactive: true}, 
			{value: null, section: 2, interactive: true}, {value: 7, section: 2, interactive: false}, {value: null, section: 2, interactive: true}, 
			{value: null, section: 3, interactive: true}, {value: 9, section: 3, interactive: false}, {value: null, section: 3, interactive: true}
		],
		[
			{value: 1, section: 1, interactive: false}, {value: 9, section: 1, interactive: false}, {value: null, section: 1, interactive: true}, 
			{value: null, section: 2, interactive: true}, {value: null, section: 2, interactive: true}, {value: 4, section: 2, interactive: false}, 
			{value: 5, section: 3, interactive: false}, {value: null, section: 3, interactive: true}, {value: null,  section: 3, interactive: true}
		],
		[
			{value: 8, section: 4, interactive: false}, {value: 2, section: 4, interactive: false}, {value: null, section: 4, interactive: true}, 
			{value: 1, section: 5, interactive: false}, {value: null, section: 5, interactive: true}, {value: null, section: 5, interactive: true}, 
			{value: null, section: 6, interactive: true}, {value: 4, section: 6, interactive: false}, {value: null, section: 6, interactive: true}
		],
		[
			{value: null, section: 4, interactive: true}, {value: null, section: 4, interactive: true}, {value: 4,  section: 4, interactive: false}, 
			{value: 6, section: 5, interactive: false}, {value: null, section: 5, interactive: true}, {value: 2, section: 5, interactive: false}, 
			{value: 9, section: 6, interactive: false}, {value: null, section: 6, interactive: true}, {value: null, section: 6, interactive: true}
		],
		[
			{value: null, section: 4, interactive: true}, {value: 5, section: 4, interactive: false}, {value: null, section: 4, interactive: true}, 
			{value: null, section: 5, interactive: true}, {value: null, section: 5, interactive: true}, {value: 3, section: 5, interactive: false}, 
			{value: null, section: 6, interactive: true}, {value: 2, section: 6, interactive: false}, {value: 8, section: 6, interactive: false}
		],
		[
			{value: null, section: 7, interactive: true}, {value: null, section: 7, interactive: true}, {value: 9, section: 7, interactive: false}, 
			{value: 3, section: 8, interactive: false}, {value: null, section: 8, interactive: true}, {value: null, section: 8, interactive: true}, 
			{value: null, section: 9, interactive: true}, {value: 7, section: 9, interactive: false}, {value: 4, section: 9, interactive: false}
		],
		[
			{value: null, section: 7, interactive: true}, {value: 4, section: 7, interactive: false}, {value: null, section: 7, interactive: true}, 
			{value: null, section: 8, interactive: true}, {value: 5, section: 8, interactive: false}, {value: null, section: 8, interactive: true}, 
			{value: null, section: 9, interactive: true}, {value: 3, section: 9, interactive: false}, {value: 6, section: 9, interactive: false}
		],
		[
			{value: 7, section: 7, interactive: false}, {value: null, section: 7, interactive: true}, {value: 3, section: 7, interactive: false}, 
			{value: null, section: 8, interactive: true}, {value: 1, section: 8, interactive: false}, {value: 8, section: 8, interactive: false}, 
			{value: null, section: 9, interactive: true}, {value: null, section: 9, interactive: true}, {value: null, section: 9, interactive: true}
		]
	],
	[
		[
			{value: null, section: 1, interactive: true}, {value: null, section: 1, interactive: true}, {value: null, section: 1, interactive: true}, 
			{value: 7, section: 2, interactive: false}, {value: 9, section: 2, interactive: false}, {value: null, section: 2, interactive: true}, 
			{value: null, section: 3, interactive: true},{value: 5, section: 3, interactive: false}, {value: null, section: 3, interactive: true}
		],
		[
			{value: 3, section: 1, interactive: false}, {value: 5, section: 1, interactive: false}, {value: 2, section: 1, interactive: false}, 
			{value: null, section: 2, interactive: true}, {value: null, section: 2, interactive: true}, {value: 8, section: 3, interactive: false}, 
			{value: null, section: 3, interactive: true}, {value: 4, section: 3, interactive: false}, {value: null, section: 3, interactive: true}
		],
		[
			{value: null, section: 1, interactive: true}, {value: null, section: 1, interactive: true}, {value: null, section: 1, interactive: true}, 
			{value: null, section: 2, interactive: true}, {value: null, section: 2, interactive: true}, {value: null, section: 2, interactive: true}, 
			{value: null, section: 3, interactive: true}, {value: 8, section: 3, interactive: false}, {value: null, section: 3, interactive: true}
		],
		[
			{value: null, section: 4, interactive: true}, {value: 1, section: 4, interactive: false}, {value: null, section: 4, interactive: true}, 
			{value: null, section: 5, interactive: true}, {value: 7, section: 5, interactive: false}, {value: null, section: 5, interactive: true}, 
			{value: null, section: 6, interactive: true}, {value: null, section: 6, interactive: true}, {value: 4, section: 6, interactive: false}
		],
		[
			{value: 6, section: 4, interactive: false}, {value: null, section: 4, interactive: true}, {value: null, section: 4, interactive: true}, 
			{value: 3, section: 5, interactive: false}, {value: null, section: 5, interactive: true}, {value: 1, section: 5, interactive: false}, 
			{value: null, section: 6, interactive: true}, {value: null, section: 6, interactive: true}, {value: 8, section: 6, interactive: false}
		],
		[
			{value: 9, section: 4, interactive: false}, {value: null, section: 4, interactive: true}, {value: null, section: 4, interactive: true}, 
			{value: null, section: 5, interactive: true}, {value: 8, section: 5, interactive: false}, {value: null, section: 5, interactive: true}, 
			{value: null, section: 6, interactive: true}, {value: 1, section: 6, interactive: false}, {value: null, section: 6, interactive: true}
		],
		[
			{value: null, section: 7, interactive: true}, {value: 2, section: 7, interactive: false}, {value: null, section: 7, interactive: true}, 
			{value: null, section: 8, interactive: true}, {value: null, section: 8, interactive: true}, {value: null, section: 8, interactive: true}, 
			{value: null, section: 9, interactive: true}, {value: null, section: 9, interactive: true}, {value: null, section: 9, interactive: true}
		],
		[
			{value: null, section: 7, interactive: true}, {value: 4, section: 7, interactive: false}, {value: null, section: 7, interactive: true}, 
			{value: 5, section: 8, interactive: false}, {value: null, section: 8, interactive: true}, {value: null, section: 8, interactive: true}, 
			{value: 8, section: 9, interactive: false}, {value: 7, section: 9, interactive: false}, {value: 1, section: 9, interactive: false}
		],
		[
			{value: null, section: 7, interactive: true}, {value: 8, section: 7, interactive: false}, {value: null, section: 7, interactive: true}, 
			{value: null, section: 8, interactive: true}, {value: 3, section: 8, interactive: false}, {value: 7, section: 8, interactive: false}, 
			{value: null, section: 9, interactive: true}, {value: null, section: 9, interactive: true}, {value: null, section: 9, interactive: true}
		]
	],
	//interactive test board
	[
		[
			{value: null, section: 1, interactive: true}, {value: null, section: 1, interactive: true}, {value: null, section: 1, interactive: true}, 
			{value: null, section: 2, interactive: true}, {value: 5, section: 2, interactive: false}, {value: null, section: 2, interactive: true}, 
			{value: 9, section: 3, interactive: false}, {value: null, section: 3, interactive: true}, {value: 1, section: 3, interactive: false}
		],
		[
			{value: 9, section: 1, interactive: false}, {value: null, section: 1, interactive: true}, {value: null, section: 1, interactive: true}, 
			{value: 2, section: 2, interactive: false}, {value: null, section: 2, interactive: true}, {value: 1, section: 2, interactive: false}, 
			{value: null, section: 3, interactive: true}, {value: null, section: 3, interactive: true}, {value: null, section: 3, interactive: true}
		],
		[
			{value: 3, section: 1, interactive: false}, {value: null, section: 1, interactive: true}, {value: 8, section: 1, interactive: false}, 
			{value: null, section: 2, interactive: true}, {value: null, section: 2, interactive: true}, {value: null, section: 2, interactive: true}, 
			{value: 7, section: 3, interactive: false}, {value: null, section: 3, interactive: true}, {value: null, section: 3, interactive: true}
		],
		[
			{value: null, section: 4, interactive: true}, {value: null, section: 4, interactive: true}, {value: null, section: 4, interactive: true}, 
			{value: 3, section: 5, interactive: false}, {value: null, section: 5, interactive: true}, {value: null, section: 5, interactive: true}, 
			{value: 6, section: 6, interactive: false}, {value: null, section: 6, interactive: true}, {value: 5, section: 6, interactive: false}
		],
		[
			{value: null, section: 4, interactive: true}, {value: 5, section: 4, interactive: false}, {value: null, section: 4, interactive: true}, 
			{value: null, section: 5, interactive: true}, {value: 4, section: 5, interactive: false}, {value: null, section: 5, interactive: true}, 
			{value: null, section: 6, interactive: true}, {value: 2, section: 6, interactive: false}, {value: null, section: 6, interactive: true}
		],
		[
			{value: 8, section: 4, interactive: false}, {value: null, section: 4, interactive: true}, {value: 4, section: 4, interactive: true}, 
			{value: null, section: 5, interactive: true}, {value: null, section: 5, interactive: true}, {value: 7, section: 5, interactive: false}, 
			{value: null, section: 6, interactive: true}, {value: null, section: 6, interactive: true}, {value: null, section: 6, interactive: true}
		],
		[
			{value: null, section: 7, interactive: true}, {value: null, section: 7, interactive: true}, {value: 6, section: 7, interactive: false}, 
			{value: null, section: 8, interactive: true}, {value: null, section: 8, interactive: true}, {value: null, section: 8, interactive: true}, 
			{value: 5, section: 9, interactive: false}, {value: null, section: 9, interactive: true}, {value: 3, section: 9, interactive: false}
		],
		[
			{value: null, section: 7, interactive: true}, {value: null, section: 7, interactive: true}, {value: null, section: 7, interactive: true}, 
			{value: 9, section: 8, interactive: false}, {value: null, section: 8, interactive: true}, {value: 8, section: 8, interactive: false}, 
			{value: null, section: 9, interactive: true}, {value: null, section: 9, interactive: true}, {value: 4, section: 9, interactive: false}
		],
		[
			{value: 1, section: 7, interactive: false}, {value: null, section: 7, interactive: true}, {value: 4, section: 7, interactive: false}, 
			{value: null, section: 8, interactive: true}, {value: 3, section: 8, interactive: false}, {value: null, section: 8, interactive: true}, 
			{value: null, section: 9, interactive: true}, {value: null, section: 9, interactive: true}, {value: null, section: 9, interactive: true}
		]
	],
	//column checker board
	/*[
		[null, 2, 3, 4, 5, 6, 7, 8, 9],
		[null, 3, 4, 5, 6, 7, 8, 9, 1],
		[3, 4, 5, 6, 7, 8, 9, 1, 2],
		[4, 5, 6, 7, 8, 9, 1, 2, 3],
		[5, 6, 7, 8, 9, 1, 2, 3, 4],
		[6, 7, 8, 9, 1, 2, 3, 4, 5],
		[7, 8, 9, 1, 2, 3, 4, 5, 6],
		[8, 9, 1, 2, 3, 4, 5, 6, 7],
		[9, 1, 2, 3, 4, 5, 6, 7, 8]
	],
	//section checker board
	[
		[{value: null, section: 1}, {value: 4, section: 1}, {value: 7, section: 1}, {value: 1, section: 2}, {value: 4, section: 2}, {value: 7, section: 2}, {value: 1, section: 3}, {value: 4, section: 3}, {value: 7, section: 3}],
		[{value: null, section: 1}, {value: 5, section: 1}, {value: 8, section: 1}, {value: 2, section: 2}, {value: 5, section: 2}, {value: 8, section: 2}, {value: 2, section: 3}, {value: 5, section: 3}, {value: 8, section: 3}],
		[{value: 3, section: 1}, {value: 6, section: 1}, {value: 9, section: 1}, {value: 3, section: 2}, {value: 6, section: 2}, {value: 9, section: 2}, {value: 3, section: 3}, {value: 6, section: 3}, {value: 9, section: 3}],
		[{value: 4, section: 4}, {value: 7, section: 4}, {value: 1, section: 4}, {value: 4, section: 5}, {value: 7, section: 5}, {value: 1, section: 5}, {value: 4, section: 6}, {value: 7, section: 6}, {value: 1, section: 6}],
		[{value: 5, section: 4}, {value: 8, section: 4}, {value: 2, section: 4}, {value: 5, section: 5}, {value: 8, section: 5}, {value: 2, section: 5}, {value: 5, section: 6}, {value: 8, section: 6}, {value: 2, section: 6}],
		[{value: 6, section: 4}, {value: 9, section: 4}, {value: 3, section: 4}, {value: 6, section: 5}, {value: 9, section: 5}, {value: 3, section: 5}, {value: 6, section: 6}, {value: 9, section: 6}, {value: 3, section: 6}],
		[{value: 7, section: 7}, {value: 1, section: 7}, {value: 4, section: 7}, {value: 7, section: 8}, {value: 1, section: 8}, {value: 4, section: 8}, {value: 7, section: 9}, {value: 1, section: 9}, {value: 4, section: 9}],
		[{value: 8, section: 7}, {value: 2, section: 7}, {value: 6, section: 7}, {value: 8, section: 8}, {value: 2, section: 8}, {value: 5, section: 8}, {value: 9, section: 9}, {value: 2, section: 9}, {value: 5, section: 9}],
		[{value: 9, section: 7}, {value: 3, section: 7}, {value: 5, section: 7}, {value: 9, section: 8}, {value: 3, section: 8}, {value: 6, section: 8}, {value: 8, section: 9}, {value: 3, section: 9}, {value: 6, section: 9}],
	]*/
];

var boardNumber =  0;//Math.floor(Math.random()*boards.length);
var boardArray = boards[boardNumber];

function sectionChecker() {

	//this function will check to see if every section has all unique numbers. Then, it passes true/false to the solve function
	for (var count = 1; count < 10; count++) {
		if (!oneSection(count)) {
			return false;
		}
	}

	return true;
}

function oneSection(sectionNumber) {
	var checker;
	var sectionArray = [];
	var uniqueSection = true;

	for (var row = 0; row <= 8; row++) {
			for (var cellParse = 0; cellParse < 9; cellParse++) {
				var object = boardArray[row][cellParse];
				
				if (object.section === sectionNumber) {
					//console.log(object.value);

					sectionArray.push(object.value);
				}
			}

			if (uniqueSection === false) {
				break;
			}
		}

		for (var i = 8; i >= 0; i--) {
			checker = sectionArray[i];
			sectionArray.pop();

			if (sectionArray.includes(checker)) {
				uniqueSection = false;
			}
		}
	return uniqueSection;
}

function updateBoard() {
	var rowPlace = Math.floor(place/9);
	var cellPlace = (place % 9);
	var update = -1;
	var board = document.getElementsByClassName("grid-item");

	console.log(rowPlace, cellPlace);

	for (var rowNumber = 0; rowNumber < 9; rowNumber++) {
		for (var cellParse = 0; cellParse < 9; cellParse++) {
			update++;
			board[update].textContent = boardArray[rowNumber][cellParse].value;

			if (boardArray[rowNumber][cellParse].interactive === false)
				document.querySelector(`#row${rowNumber + 1} .column${cellParse + 1}`).classList.add('noninteractive');
		}
	}

		
}

window.onload = function firstFocus () {
	updateBoard();
	document.getElementById("firstBox").focus();

	
}

function keyPresses(event) {
	var keyPressed = event.key;
	var keyCode = event.keyCode;
	var row = Math.floor(place/9);
	var cell = (place % 9);

	//Rules/logic of keypresses (place is associated with the tab index of each cell)
	//Checks to see if the key pressed is an integer and not zero
	if (isFinite(keyPressed) && keyCode !== 48 && place !== 81 && boardArray[row][cell].interactive) {
		boardArray[row][cell].value = keyPressed;

		updateBoard();
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
	for (var rowNumber = 0; rowNumber < 9; rowNumber++) {
		for (var cellParse = 0; cellParse < 9; cellParse++) {
			if (boardArray[rowNumber][cellParse].interactive)
				boardArray[rowNumber][cellParse].value = null;
		}
	}

	updateBoard();
}

function fullBoard() {
	//this function will check to see if every square on the board is filled. Then, it passes true/false to the solve function
	var complete = true;
	var checker;

	//The board starts with null filling each inactive cell, so if any of those remain, the board is incomplete and doesn't win
	for (var rowNumber = 0; rowNumber < 9; rowNumber++) {
		for (var cellParse = 0; cellParse < 9; cellParse++) {
			checker = boardArray[rowNumber][cellParse].value;
			if (checker == null) {
				complete = false;
			}

			if (complete === false) {
				break;
			}
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
	for (var rowNumber = 0; rowNumber <= 8; rowNumber++) {
		activeRow = boardArray[rowNumber];

		//In any given row, this creates an array of all the numbers in said row so we can manipulate/pop to check
		for (var cellParse = 0; cellParse < 9; cellParse++) {
			rowArray[cellParse] = activeRow[cellParse].value;
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

	for (var columnPlace = 0; columnPlace <= 8; columnPlace++) {
		for (activeColumn = 0; activeColumn <= 8; activeColumn++){
			columnArray[activeColumn] = boardArray[activeColumn][columnPlace].value;
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



for (var i = 0; i < boxes.length; i++) {
	boxes[i].addEventListener('keydown', keyPresses);
}