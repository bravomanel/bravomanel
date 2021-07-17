let slider = document.getElementById("gridSizeSlider");
let output = document.getElementById("slideShow")
let mainGrid = document.getElementById("mainGrid");
let resetBtn = document.getElementById("resetBtn");
let gridSize = 16;




function createArray(size) {
    for (let i = 0; i < size; i++) {
        let gridRow = document.createElement("div");
        gridRow.classList.add(`gridRows`)

        for (let j = 0; j < size; j++) {
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
}

function painting() {

}
    
function removeAllChildNodes() {
    while (mainGrid.firstChild) {
        mainGrid.removeChild(mainGrid.firstChild);
    }
}

resetBtn.addEventListener("click", function () {
    removeAllChildNodes();
    createArray(slider.value);
});

createArray(gridSize);

slider.oninput = function () {
    removeAllChildNodes();
    output.innerHTML = this.value;
    createArray(this.value);
}