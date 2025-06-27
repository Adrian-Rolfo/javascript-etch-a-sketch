const container = document.querySelector('#container');
const slider = document.querySelector('#slider');

let cells = [];
let length = 10;
let width = 0;

function setContainerWidth() {
    width = container.clientWidth;
    console.log(width);
}

//removes grid from DOM and physically deletes cells array contents
function removeGrid() {
    document.querySelectorAll('.cell').forEach(cell => cell.remove());
    // cells = cells.filter(cell => cell !== document.querySelector('.cell'));
    // [...cells].array.forEach(cell => 
        
    //     cell.remove());
    cells.length = 0;
}

//
function makeGrid() {
    cells.length = 0;
    cells.length = length;
    // setContainerWidth();
    for(let i = 0; i < length**2 ; i++) {
        let cell = document.createElement('div');
        cell.classList.add('cell')
        cell.style.width = `${(1/length)*100}%`;
        cells.push(cell);
        container.appendChild(cell);
    };
}

container.addEventListener('mouseover', (event) => {
    console.log('event triggered');
    let target = event.target;
    if(cells.includes(target)) target.style.backgroundColor = 'orange';
});


//value updater through slider
slider.oninput = function() {
    length = this.value;
    console.log(length);
    removeGrid();
    makeGrid();
}



makeGrid();


