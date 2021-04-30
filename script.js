const gridContainer = document.querySelector("#grid-container");

let boxDimension = 500;
let userInput = boxDimension ** 2;
let pixelDimension = 100/boxDimension;
gridContainer.setAttribute('style',
    // updating the attribute with the following concatenated string:
    'grid-template-columns: repeat(' + boxDimension + ', 1fr)');

// for (let j  = 0;j<userInput;j++){
//     const gridRow = document.createElement("div")
//     gridRow.classList.add("grid-row");
    for (let i = 0;i<userInput;i++){
        const singleCell = document.createElement("div");
        singleCell.style.backgroundColor = "red";
        // let lengthAndWidthDimension = 10;
        // singleCell.style.width = lengthAndWidthDimension+"%";
        // singleCell.style.height = lengthAndWidthDimension+"%";
        // singleCell.style.border = "solid";

        singleCell.style.width = pixelDimension + "vh";
        singleCell.style.height = pixelDimension + "vh";
        singleCell.textContent = " ";
        singleCell.addEventListener("mouseover", function( event ) {
            // highlight the mouseover target
            event.target.style.backgroundColor = "orange";
    
          }, false);
        gridContainer.appendChild(singleCell);
    }
//     gridContainer.appendChild(gridRow);
// }

