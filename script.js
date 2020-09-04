const container = document.querySelector("#container");

const width = document.getElementById("container").clientWidth;
console.log(width);


const blocksToAdd = width / 16;

// create the blocks
for (i = 1; i <= blocksToAdd; i++) {
    var rowContainer = document.createElement("div");
    for (j = 1; j <= blocksToAdd; j++) {
        var blocks = document.createElement("div");
        blocks.style.backgroundColor = "white";
        blocks.style.width = "14px";
        blocks.style.height = "14px";
        blocks.style.border = "solid 1px blueviolet";
        blocks.classList.add("thisBlock")
        rowContainer.appendChild(blocks);
    }
    container.appendChild(rowContainer);
}

const divs = document.querySelectorAll(".thisBlock");

divs.forEach(elem => elem.addEventListener("mouseover", function() {
    hoverBlock(elem);
}))

function hoverBlock(blockAttribute) {
    blockAttribute.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()}`;
}

function randomColor() {
    return Math.floor(Math.random()*255);
}