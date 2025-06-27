const container = document.querySelector('#container');
const slider = document.querySelector('#slider');
const resetBtn = document.querySelector('#reset-btn');
const gridText = document.querySelector('#grid-text');
const colorPicker = document.querySelector('#color-picker');
const checkBox = document.querySelector('#random-color');

let isRandClr = false;

let cells = [];
let length = 10;
let width = 0;
let color = 'black';

function setContainerWidth() {
    width = container.clientWidth;
    console.log(width);
}

//removes grid from DOM and physically deletes cells array contents
function removeGrid() {
    document.querySelectorAll('.cell').forEach(cell => cell.remove());
    cells.length = 0;
}

//
function makeGrid() {
    if(isNaN(parseInt(length))) length = 50;
    if(length > 100) length = 100;
    if(length < 0) length = 0;
    

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



function updateSlider() {
    const match = gridText.value.match(/^\d+/); 
    if (match) {
        slider.value = match[0];
    }
}


function updateGridText() {
    gridText.value = slider.value;
}

function randomizeColor() {
    const letters = '0123456789ABCDEF';
    color = '#';
    for(let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
}

//could optimise event listeners by adding it only to #controls element
function init() {

    container.addEventListener('mouseover', (event) => {
        if(isRandClr) randomizeColor();
        console.log('event triggered');
        let target = event.target;
        if(cells.includes(target)) target.style.backgroundColor = color;
    });

    // colorPicker.addEventListener
    resetBtn.addEventListener('click', resetGrid);

    gridText.addEventListener('input', () => {
        length =  isNaN(parseInt(gridText.value)) ? 0 : parseInt(gridText.value);
        updateSlider();
        resetGrid();
    })

    slider.addEventListener('input', () => {
        length = parseInt(slider.value);
        updateGridText();
        resetGrid();
    })

    colorPicker.addEventListener('input', () => {
        color = `${colorPicker.value}`;
    })

    checkBox.addEventListener('change', () => {
        isRandClr = !isRandClr;
        console.log(isRandClr);
        
    })

    makeGrid();
    gridText.placeholder = 'Enter a number 1 - 100';
}

init();


