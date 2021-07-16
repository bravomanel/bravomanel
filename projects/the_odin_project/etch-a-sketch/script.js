let slider = document.getElementById("gridSizeSlider");
let output = document.getElementById("slideShow")
let mainGrid = document.getElementById("mainGrid");

slider.oninput = function() {
    output.innerHTML = this.value;
  }

let gridSize = 16;


    
    
for (let i = 0; i < gridSize; i++) {
    let gridRow = document.createElement("div");
    gridRow.classList.add(`row${i+1}`, `gridRows`)
    for (let j = 0; j < gridSize; j++) {
        let gridDiv = document.createElement("div");
        gridDiv.classList.add(`divPixel`)
        gridDiv.id = `pixel${i}x${j}`;
        gridDiv.addEventListener("mouseover", function() {
            let pixel = document.getElementById(`pixel${i}x${j}`);
            pixel.style.backgroundColor = "red";
        });
        gridRow.appendChild(gridDiv);
    }
    mainGrid.appendChild(gridRow);
}



// let mainGrid = document.getElementById("mainGrid");

// for (let i = 0; i < gridSize; i++) {
//     let gridRow = document.createElement("div");
//     gridRow.classList.add(`row${i+1}`, `gridRows`)
//     for (let j = 0; j < gridSize; j++) {
//         let gridDiv = document.createElement("div");
//         gridDiv.classList.add(`divPixel`)
//         gridDiv.id = `pixel${i}x${j}`;

//         gridDiv.addEventListener("mouseover", function() {
//             let pixel = document.getElementById(`pixel${i}x${j}`);
//             pixel.style.backgroundColor = "red";
//         });

//         gridRow.appendChild(gridDiv);
//     }
//     mainGrid.appendChild(gridRow);
// }