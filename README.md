# Etch-A-Sketch

A fun, interactive drawing application built with HTML, CSS, and JavaScript. Draw pixelated trails on a dynamic grid that responds to your mouse movements!

## Features

- **Dynamic Grid Creation**: Start with a 16x16 grid that you can instantly resize
- **Interactive Drawing**: Hover over grid squares to draw with random colors
- **Progressive Darkening**: Each interaction increases the opacity, creating a darker effect over 10 interactions
- **Customizable Grid Size**: Use the "Change Grid Size" button to create grids from 1x1 to 100x100 squares
- **Responsive Design**: Grid maintains its 450x450px size regardless of square count
- **Smooth Interactions**: Clean hover effects with visual feedback

## How to Use

1. **Open the Application**
   - Simply open `index.html` in your web browser

2. **Draw on the Grid**
   - Hover your mouse over the grid squares to draw
   - Each square displays a random color on first hover
   - Continue hovering over the same square to darken it progressively

3. **Resize the Grid**
   - Click the "Change Grid Size" button
   - Enter a number between 1 and 100 (default is 16)
   - The new grid will instantly replace the old one

## Project Structure

```
etch-a-sketch/
├── index.html      # HTML structure and layout
├── styles.css      # Styling and Flexbox layout
├── script.js       # Grid creation and interaction logic
└── README.md       # This file
```

## Technical Details

### HTML (`index.html`)
- Header section with resize button
- Grid container that holds all the dynamically created squares
- Links to CSS and JavaScript files

### CSS (`styles.css`)
- **Flexbox Layout**: Uses `flex-wrap` to arrange squares in rows
- **Grid Container**: 450x450px container with black border
- **Square Styling**: Boxes with 1px black borders and white backgrounds

### JavaScript (`script.js`)
- **`createGrid(size)`**: Dynamically creates a grid with the specified size
- **`getRandomColor()`**: Generates random RGB colors for visual variety
- **`draw(e)`**: Handles hover events and applies color + opacity changes
- **Event Listeners**: Manages grid resizing via button click

## Key Features Explained

### Random Colors
Each time you hover over a square, it displays a new random RGB color:
```javascript
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
```

### Progressive Darkening (Extra Credit)
Opacity increases by 10% with each hover, reaching full opacity (darkness) after 10 interactions:
```javascript
let currentOpacity = parseFloat(square.dataset.opacity);
if (currentOpacity < 1) {
    currentOpacity += 0.1;
    square.dataset.opacity = currentOpacity;
    square.style.opacity = currentOpacity;
}
```

## Browser Compatibility

Works on all modern browsers (Chrome, Firefox, Safari, Edge) that support:
- ES6 JavaScript
- CSS Flexbox
- DOM manipulation APIs

## Future Enhancements

Possible improvements:
- Add a color picker to choose your own drawing color
- Implement a clear grid button
- Add drawing modes (pen, eraser, etc.)
- Save and download your drawings
- Undo/redo functionality

## Credits

Created as part of The Odin Project curriculum to practice DOM manipulation and CSS Flexbox skills.
