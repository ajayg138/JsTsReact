// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50
//   };
  
//   // Destructuring
//   let {firstName, lastName} = person;

let [fst, , ...last] = ["a", "b", "c", "d"];

console.log(fst);
console.log(last);
