// Hoisting is the default behaviour of javascript where all the variable and function
// declarations are moved on top.
// This means that irrespective of where the variables and functions are declared, they
// are moved on top of the scope. The scope can be both local and global.
 
age = 45;
name1 = "Ayesha"
console.log(name1)// outputs Ayesha even when the variable is declared after it
var name1;
var age;

example(); //Outputs " this is a hoisting function " even when the function is declared after

function example(){
    console.log("this is a hoisting function");
   

}

anotherExample()
function anotherExample(){

    // Note - Variable initializations are not hoisted, only variable declarations are
// hoisted:
// // Hoisting takes place in the local scope as well
    a = 34;
    console.log("Value of a = " + a)
     var a;

     console.log("Value of b = " + b); //// Outputs "undefined" since the initialization of "b" is not hoisted
     b = 'omg'
     var b;
}
// anotherExample()


