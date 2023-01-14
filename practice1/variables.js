// all primitivi data types in js

var name1 = "Rajnikant";
var names = 'Akshay Kumar';
console.log(name1);
console.log(names);
console.log(typeof(name1));
var num1 = 3.2
var num2 = 4
console.log(num1)
console.log("Type of = "+ typeof(num1))
console.log(num2)
console.log("Type of = "+ typeof(num2))
var value1 = 23;
var value2 = 34;
var value3 = 23;
console.log(value1 == value3)
console.log(value1 == value2)
var value4 = "Hi"
var value5 = "hi"
var value6 = "hi"
console.log(value4 == value5)
console.log(value5 == value6)
console.log(value1 == value6)

var x
console.log("x value = "+ x)
console.log("type of x = "+ typeof(x))

var z = null;
console.log("z value = "+ z)
console.log("type of z = "+ typeof(z))



console.log("type of symbol = "+ typeof Symbol('hi'))

// all non - primitive data types in js

// objects are used to store collection of data 
//  also called collections of data store in key value pair

var obj1 = {
    name2 : "john",
    age : 23,
    gender: 'M',
    fun : function(){
        console.log("inside function")
        return this.age;
        
    }


}

console.log(obj1)

// collection of different types of of data stored in order list

var array = [12, "good night",true,4.5];
console.log(array)
// * note any data type that is not a primitive type is of object type in javascript