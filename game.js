const container = document.querySelector('#container');

let cells = [];
let length = 10;

for(let i = 0; i < length**2; i++) {
    let cell = document.createElement('div');
    cell.classList.add('cell');
    
    let width = container.clientWidth;
    cell.style.flexBasis = `${width / length}px`;
    cells.push(cell);
    container.appendChild(cell);
}

