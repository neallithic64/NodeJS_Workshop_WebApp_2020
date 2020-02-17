let a = 10;
var b = 11;

a = 12;
b = 13;

a = 'string';
a = 10 / 2;
a = 10.5;

const FINAL = 1;
// const HELLO; <-- error must have an initial value


// differences between let and var

// variable hoisting
console.log(d);
var c = 10;

for (var d = 0; d < 3; d++) {
    console.log(d);
}
console.log(d);

// use let to lessen the problem of variable hoisting