
function sum() {
  let add = this.num1 + this.num2;
  console.log("Addition is " + add);
}
function subtraction() {
    let difference = this.num1 - this.num2;
    console.log("Differenece is :" +difference);
  }
function multi() {
  let multiplication = this.num1 * this.num2;
  console.log("Multiplication of " + multiplication);
}

function div() {
    let division = this.num1 % this.num2;
    console.log("Division  is :" +division);
  }
var obj1 = {
  num1: 20,
  num2: 10,
};

sum.call(obj1);
multi.call(obj1);
subtraction.call(obj1);
division.call(obj);


function sum1() {
  var reslut = 0;
  for (var i = 0; i < arguments_array.length; i++) {
    reslut = reslut + arguments_array[i];
  }
  console.log(this.key);
  console.log(res);
}
var obj2 = {
  key: " Apply Method adding numbers!",
};
var obj3 = {
  key: "Apply Method multiplying numbers!",
};
function multi1() {
  var reslut = 1;
  for (var i = 0; i < arguments_array.length; i++) {
    reslut = reslut * arguments_array[i];
  }
  console.log(this.key);
  console.log(res);
}
var arguments_array = [1, 2, 3, 4, 5];
sum1.apply(obj2, arguments_array);
multi1.apply(obj3, arguments_array);



function sum2() {
    var reslut =this.num1+this.num2;
    console.log(reslut);
}
var obj4 = {
    num1 : 100,
    num2 : 200
}

let bind_fun = sum2.bind(obj4);
bind_fun();