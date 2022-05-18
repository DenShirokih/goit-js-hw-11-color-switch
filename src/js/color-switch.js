const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startBtnRef = document.querySelector('[data-action="start"]');
const stopBtnRef = document.querySelector('[data-action="stop"]');

const switcher = {
  intervalID: null,
  isActive: false,

  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.intervalID = setInterval(() => {
      updateBodyColor();
    }, 500);
  },
  stop() {
    clearInterval(this.intervalID);
    this.intervalID = null;
    this.isActive = false;
  },
};

startBtnRef.addEventListener('click', switcher.start.bind(switcher));
stopBtnRef.addEventListener('click', switcher.stop.bind(switcher));
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const updateBodyColor = () => {
  const randomColor = randomIntegerFromInterval(0, colors.length - 1);
  document.body.style.backgroundColor = colors[randomColor];
  console.log(randomColor);
};
