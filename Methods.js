const startTime = Date.now();

const getRandomNumber = (start, end) => {
  return Math.random() * end + start;
};

const printNumber = (i, next) => {
  const delay = getRandomNumber(1, 10) * 1000;
  setTimeout(() => {
    next(`Time ${i}`);
  }, delay);
};

var points = new Array(100);
const delay = getRandomNumber(1, 10) * 1000;
for (var i = 0; i < 100; i++) {
  points[i] = i + 1;
}
delay;

for (var i = 0; i < points.length; i++) {
  console.log(`${Math.ceil((Date.now() - startTime) / 1000)} -${points[i]}`);
}
