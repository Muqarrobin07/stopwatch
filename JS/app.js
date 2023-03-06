const timerField = document.getElementById("timer-field");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const resetBtn = document.getElementById("reset-btn");
let count;
let timer;

const startWatch = () => {
  count = 0;
  timer = setInterval(() => {
    timerField.innerText = ++count;
  }, 1000);
};

startBtn.addEventListener("click", function () {
  startWatch();
});

stopBtn.addEventListener("click", function () {
  clearInterval(timer);
});
resetBtn.addEventListener("click", function () {
  count = 0;
  timerField.innerText = count;
});
