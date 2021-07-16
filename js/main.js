const array = [3,4,5,4,4,5];

const arraynew=array.filter(function (x, i, self) { return self.indexOf(x) === i; });

console.log(arraynew);

function tax(price) {
  var tax = price * 1.08;
  return tax;
}

console.log(tax(100));


const products = {
    'f1' : {'name' : 'みかん', 'price' : 100, 'isFood' : true},
    'f2' : {'name' : 'りんご', 'price' : 200, 'isFood' : true},
    'f3' : {'name' : '牛肉', 'price' : 300, 'isFood' : true},
    'o1' : {'name' : 'スポンジ', 'price' : 100, 'isFood' : false},
    'o2' : {'name' : '布団', 'price' : 300, 'isFood' : false},
}

const buy = function (number, quantity) {
  if (products === (isFood===true))
    return console.log(price * 1.1);
  if (products === (isFood===false)) return console.log(price * 1.08);
}
console.log(buy('o1', 10));
console.log(buy('f1', 10));
