const array = [2, 4, 7, 5, 4, 3, 8];

const arraynew=array.filter(function (x, i, self) { return self.indexOf(x) === i; });

console.log(arraynew);


function leap_Year(西暦) {
  const year = [2020, 2021];
  if (year / 4 === 0 && year / 100 !== 0 || year / 400 === 0) {
    console.log(year + "年はうるう年です");
  } else {
    console.log(year + "年はうるう年ではありません");
  }
  return year;
}

console.log(leap_Year);