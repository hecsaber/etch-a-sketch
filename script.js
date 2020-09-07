function createBlocks(sizeOfBlock) {
    const container = document.querySelector("#container");
    const width = document.getElementById("container").clientWidth;

    const blocksToAdd = Math.floor(width / blockSize());

    // create the blocks
    for (i = 1; i <= blocksToAdd; i++) {
        var rowContainer = document.createElement("div");
        for (j = 1; j <= blocksToAdd; j++) {
            var blocks = document.createElement("div");
            blocks.style.backgroundColor = "white";
            blocks.style.width = `${sizeOfBlock-2}px`;
            blocks.style.height = `${sizeOfBlock-2}px`;
            blocks.style.border = "solid 1px grey";
            blocks.classList.add("thisBlock")
            rowContainer.appendChild(blocks);
        }
        container.appendChild(rowContainer);
    }
}

createBlocks(blockSize());

var sizeChanger = document.getElementById("blocksize");

sizeChanger.addEventListener("change", function() {
    var sizeChange = blockSize();
    location.reload();
    createBlocks(sizeChange);
})


const divs = document.querySelectorAll(".thisBlock");

divs.forEach(elem => elem.addEventListener("mouseover", function() {
    if (colorize() == "color"){
        hoverColor(elem);
    } else {
        hoverBlack(elem);
    }
}))

function hoverColor(blockAttribute) {
    blockAttribute.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()}`;
}

function hoverBlack(blockAttribute) {
    blockAttribute.style.backgroundColor = "black";
}

function colorize() {
    return document.getElementById("colorize").value;
}

function blockSize() {
    return document.getElementById("blocksize").value;
}

function randomColor() {
    return Math.floor(Math.random()*255);
}