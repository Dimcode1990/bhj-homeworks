let clickerCounter = document.getElementById("clicker__counter");
let element = document.getElementById("clicker"); // замените на нужный id
let image = document.getElementById("cookie");

function isEven(num) {
    return num % 2 === 0;
}

let isFirstClick = true;

image.onclick = function click() {
    let currentClick = parseInt(clickerCounter.textContent, 10);
    if (isFirstClick) {
        image.width = image.width * 1.5;
        isFirstClick = false;
    } else {
        if (isEven(currentClick)) {
            image.width = image.width * 1.5;
        } else {
            image.width = image.width / 1.5;
        }
    }
    console.log(clicker__counter.textContent);
    clicker__counter.textContent = currentClick + 1;
}
