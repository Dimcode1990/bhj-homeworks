let timerElement = document.getElementById("timer");

function timerBack() {
    let currentTime = parseInt(timerElement.textContent, 10);

    if (isNaN(currentTime)) {
        console.error("Значение таймера не является числом");
        clearInterval(intervalId);
        return;
    }

    if (currentTime <= 0) {
        alert("Вы победили в конкурсе!");
        clearInterval(intervalId);
        timerElement.textContent = 0;
        return;
    }

    timerElement.textContent = currentTime - 1;
    console.log(timerElement.textContent);
}

let intervalId = setInterval(timerBack, 1000);

intervalId;
