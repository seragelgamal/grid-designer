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
    return [ [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
             [0, 0, 0, 2, 0, 0, 0, 0, 0, 0], 
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ]
}

function createDivGrid(grid) {
    for (let row = 0; row < numberOfRows; row++) {
        for (let column = 0; column < numberOfColumns; column++) {
            let divElement = document.createElement('div');
            divElement.dataset.row = row;
            divElement.dataset.column = column;
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