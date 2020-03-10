// functions tut
// definition: group of code thay can be reused

// example 1

// function sayHello() {
//     console.log("Hello");
// }
// sayHello();

// example 2

// function sayHello() {
//     return "Hello there";
// }

// let result = sayHello(); /*assign var i.o.t. print*/
// console.log(result);

// function with no value sometimes called a procedure

// exercise 1: Create a function that returns a message and uses a variable called name

// function sayHello(name) {
//     var message = "Hello, " + name + "!";
//     return message;
// }

// console.log(sayHello("John"));

// example of using prompt within function


let name = prompt("please enter your name: ");
let surname = prompt("please enter your surname: ");

function sayHello(name, surname) {

    let message = 'Hello ' + name + " " + surname;
    return message

}

// let name = prompt("please enter your name: ");
// let surname = prompt("please enter your surname: ");
console.log(sayHello(name, surname));