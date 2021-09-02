const startTime = Date.now();

const getRandomNumber = (start, end) => {
  return Math.random() * end + start;
};

const printNumber = (i, next) => {
  const delay = getRandomNumber(1, 10) * 1000;
  setTimeout(() => {
    next(`Number ${i}`);
  }, delay);
};

let nArr = [];
for (let i = 1; i <= 100; i++) {
  let x = printNumber(i, (text) => {
    console.log(`Number : ${Math.ceil((Date.now() - startTime) / 1000)}`);
    let resNo = parseInt(text.split(" ")[1], 10);
    nArr.push(resNo);

    if (nArr.length === 100) {
      nArr.sort(function sortNumber(a, b) {
        return a - b;
      });

      nArr.forEach((val) => {
        console.log(val);
      });
    }
  });
}
