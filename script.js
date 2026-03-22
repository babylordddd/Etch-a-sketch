const container = document.getElementById('grid-container');
const resizeBtn = document.getElementById('resize-btn');

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function createGrid(size) {
    container.innerHTML = '';

    const squareSize = 100 / size;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');

        square.style.width = `${squareSize}%`;
        square.style.height = `${squareSize}%`;
        square.dataset.opacity = 0;
        
        square.addEventListener('mouseover', draw);

        container.appendChild(square);
    }
}

function draw(e) {
    const square = e.target;
    square.style.backgroundColor = getRandomColor();

    let currentOpacity = parseFloat(square.dataset.opacity);

    if (currentOpacity < 1) {
        currentOpacity += 0.1;
        square.dataset.opacity = currentOpacity;
        square.style.opacity = currentOpacity;
    }
    
}

resizeBtn.addEventListener('click', () => {
    let newSize = prompt("Enter new grid size (max 100): ");

    if (newSize === null) return;

    newSize = parseInt(newSize);

    if (isNaN(newSize) || newSize <= 0 || newSize > 100) {
        alert("Invalid input! Please enter a number between 1 and 100.");
        return;
    }

    createGrid(newSize);
})

createGrid(16);