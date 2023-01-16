// difference between == and === operator
// equality coercion

var a = 222;
var b = "222";

console.log("== operator example "+ (a==b)); // true
console.log("=== operator example "+ (a===b)); // false


// implicit type coercion in js is the automatic conversion of value from 
// one data type to another., it takes place when the operands 
// of an expression are of different data type
// string coercion
//  when a number is added to a  string number type also converted into
// string
// type coercion
var first = 23;
var second = "78"
var third = "welcome";
console.log(first + second)//2378
console.log(typeof(first + second)) //string
console.log(first +first + third + first) //46welcome23
console.log(first - second) // -55
console.log(first - third) //NaN

// boolean coercion

var op1 = 0; // 0 , -0, NaN,"", false, undefined these are falsy values
var op2 = 29;
if(op1){
    console.log("Op1 = "+op1); // this code will not run as value of op1 = 0;
}
if(op2){
    console.log("Op2 = "+op2); // output = 29
}
// OR operator


var ope1 = 220;
var ope2 = "hello";
var ope3 = undefined;

console.log(ope1 || ope2) // 220
console.log(ope2 || ope1)  //hello
console.log(ope1 || ope3) //220
console.log(ope3 || ope2) //hello
console.log("&& operator "+(ope1 && ope2)) // returns hello since both the values are truthy
console.log("&& operator "+(ope1 && ope3))  // returns undefined

// isNan function
var val1 = NaN;
var val2 = 78;
console.log(isNaN(val1)) // true
console.log(isNaN(val2)) // false
// Note- isNaN() function converts the given value to a Number type, and then
// equates to NaN.
console.log(isNaN("Hello")) //true
console.log(isNaN(345)) //false
console.log(isNaN('1') ) //false , since '1' is converted to Number type which results in 0
console.log(isNaN(true) ) //false , since true converted to Number type results in 1 ( a numbber)
console.log(isNaN(false) ) //false
console.log(isNaN(undefined) ) //true