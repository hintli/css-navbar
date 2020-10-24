
// //expression function

// let sayHello = function() {
//     console.log("sayHello")
// }

// sayHello();





// //declarative cuntion

// function sayHello() {
//     console.log("sayHello")
// }

// sayHello();





// //arrow function

// let sayHello = () => {
//     console.log("sayHello");
// }

// sayHello();


//callback functions

let sayHello = function(callback) {
    console.log("sayHello starting");
    callback();
}

sayHello(function() {
    console.log("sayHello finishing")
})
