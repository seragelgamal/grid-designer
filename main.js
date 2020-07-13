// TITLE
const numberOfRows = 10;
const numberOfColumns = 10;
let container = document.getElementById('container');
let colourSelector = document.getElementById('colourSelector');
let grid = createGridArray();
let player = {
    row: 0,
    column: 0
}
createDivGrid(grid);

function createGridArray() {
    return [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 2, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]
}

function createDivGrid(grid) {
    for (let row = 0; row < numberOfRows; row++) {
        for (let column = 0; column < numberOfColumns; column++) {
            let divElement = document.createElement('div');
            divElement.dataset.row = row;
            divElement.dataset.column = column;
            divElement.id = '[' + row + '][' + column + ']';
            divElement.addEventListener('click', changeColour);
            if (grid[row][column] == 1) {
                divElement.classList.add('grey');
            } else if (grid[row][column] == 2) {
                divElement.classList.add('player');
                player.row = divElement.dataset.row;
                player.column = divElement.dataset.column;
            }
            container.append(divElement);
        }
    }
}

function changeColour(e) {
    if (colourSelector.value == 'grey') {
        e.target.classList.add('grey');
        grid[e.target.dataset.row][e.target.dataset.column] = 1;
    } else if (colourSelector.value == 'white') {
        e.target.classList.remove('grey');
        grid[e.target.dataset.row][e.target.dataset.column] = 0;
    }
}

document.addEventListener('keydown', keyDownHandler);

function keyDownHandler(e) {
    if ((e.key == 'ArrowUp' || e.key.toLowerCase() == 'w') && player.row != 0) {
        movePlayer(player.row - 1, Number(player.column));
    } else if ((e.key == 'ArrowLeft' || e.key.toLowerCase() == 'a') && player.column != 0) {
        movePlayer(Number(player.row), player.column - 1);
    } else if ((e.key == 'ArrowDown' || e.key.toLowerCase() == 's') && player.row != numberOfRows - 1) {
        movePlayer(player.row + 1, Number(player.column));
    } else if ((e.key == 'ArrowRight' || e.key.toLowerCase() == 'd') && player.column != numberOfColumns - 1) {
        movePlayer(Number(player.row), player.column + 1);
    }
}

function movePlayer(newRow, newColumn) {
    grid[player.row][player.column] = 0;
    document.getElementById('[' + player.row + '][' + player.column + ']').classList.remove('player');
    player.row = newRow;
    player.column = newColumn;
    grid[player.row][player.column] = 2;
    document.getElementById('[' + player.row + '][' + player.column + ']').classList.add('player');
}