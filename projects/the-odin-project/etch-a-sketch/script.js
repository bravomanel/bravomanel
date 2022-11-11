let slider = document.getElementById("gridSizeSlider");
let output = document.getElementById("slideShow")
let mainGrid = document.getElementById("mainGrid");
let resetBtn = document.getElementById("resetBtn");
let color = "red";
let penActive = false;
let gridSize = 16;

let redBtn = document.getElementById("red");
let blackBtn = document.getElementById("black");
let blueBtn = document.getElementById("blue");

let pickColor = document.getElementById("pickColor")
let pickBtn = document.getElementById("pick");

alert(`This game is only usable with a mouse, not mobile supported! 
\nSó é possível usar este site com um mouse, não há suporte para dispositivos móveis!`);

mainGrid.addEventListener('click', function() { activatePen()});

redBtn.onclick = function() {
    color = "red";
}
blackBtn.onclick = function() {
    color = "black";
}
blueBtn.onclick = function() {
    color = "blue";
}
pickColor.onclick = function() {
    color = pickColor.value;
}
pickColor.addEventListener("input", function() {
    color = pickColor.value;
});


function createArray(size) {
    for (let i = 0; i < size; i++) {
        let gridRow = document.createElement("div");
        gridRow.classList.add(`gridRows`)

        for (let j = 0; j < size; j++) {
            let gridDiv = document.createElement("div");
            gridDiv.classList.add(`divPixel`)
            gridDiv.id = `pixel${i}x${j}`;
            gridDiv.addEventListener("mouseover", function() {
                if (penActive == true) {
                    paint(i, j);
                }
            });

            gridRow.appendChild(gridDiv);
        }
        mainGrid.appendChild(gridRow);
    }
}

function paint(i, j) {
    let pixel = document.getElementById(`pixel${i}x${j}`);
    pixel.style.backgroundColor = color;
}

function activatePen() {
    if(!penActive) {
        mainGrid.addEventListener('mouseleave', activatePen);
        penActive = true;
    } else {
        mainGrid.removeEventListener('mouseleave', activatePen);
        penActive = false;
    }
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

slider.oninput = function () {
    removeAllChildNodes();
    output.innerHTML = this.value;
    createArray(this.value);
}

createArray(gridSize);