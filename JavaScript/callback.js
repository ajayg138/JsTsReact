// function greet(name, callback) {
//     console.log(`Hello, ${name}!`);
//     callback();  
// }

// function afterGreet() {
//     console.log('Greeting is complete!');
// }

// greet('Anjali', afterGreet);


function sum(a,b){
    console.log(a+b);
}

function calculator(a,b,sumCallback){
    sumCallback(a,b);
}

calculator(1,2,sum);