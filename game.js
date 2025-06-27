const container = document.querySelector('#container');
const slider = document.querySelector('#slider');
const resetBtn = document.querySelector('#reset-btn');
const gridText = document.querySelector('#grid-text');

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

function resetGrid() {
    removeGrid();
    makeGrid();
}

container.addEventListener('mouseover', (event) => {
    console.log('event triggered');
    let target = event.target;
    if(cells.includes(target)) target.style.backgroundColor = 'orange';
});

resetBtn.addEventListener('click', resetGrid);

function updateSlider() {
    const match = gridText.value.match(/^\d+/); // Match one or more digits at the start
    if (match) {
        slider.value = match[0];
    }
}


function updateGridText() {
    gridText.value = slider.value;
}

gridText.addEventListener('input', () => {
    console.log('change event');
    // length =  isNaN(parseInt(gridText.value)) ? 0 : parseInt(gridText.value);
    if(isNaN(parseInt(gridText.value))) {
        length = 0;
    }
    else {
        length = parseInt(gridText.value);
        updateSlider();
    }


    console.log(length);
    // updateSlider();
    resetGrid();
})

slider.addEventListener('input', () => {
    length = parseInt(slider.value);
    updateGridText();
    resetGrid();
})

// //value updater through slider
// slider.oninput = function() {
//     length = this.value;
//     // console.log(length);
//     resetGrid();
// }



makeGrid();
gridText.placeholder = 'Enter a number 1 - 100';


