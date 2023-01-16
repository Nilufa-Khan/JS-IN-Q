// passed by value 

// in js all primitive types are passed by value
var example1 = 22;

var example2 = example1;
example1 = "hello new value";

console.log(example2) // output 22 , since example2 points a new memory location
// in this example example1 assignment operator allocates some space in the memory, stores the value 22
// and returns its locations
// example2 will store 22 but it will return a new location as a separate new memory will create and
//it will store the value 22 

//passed by referrance
// in this case referance of obj is passing to obj1
// that means if any changes occur in obj it will reflect inside obj1


var obj = { name: "Vivek", surname: "Bisht" };
var obj1 = obj;
console.log("Before changes ")
console.log(obj1);//{name: 'Vivek', surname: 'Bisht'}
obj.name = "RRR"
console.log("After changes ")
console.log(obj1);//{name: 'RRR', surname: 'Bisht'}
// because in this case both variables referring to the same memory address