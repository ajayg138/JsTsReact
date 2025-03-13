let a = null;
let b = 345;
let c = true;
let d = BigInt("567") + BigInt("3")
let e = "Harry";
let f = Symbol("I am a nice symbol");
let g = undefined;
console.assert(a,b,c,d,f,g)
console.log(typeof d);


//Objects are use to create key value pair
const item ={
    "Harry" : true,
    "Shubh" : false,
    "Lovish" : 67,
    "Rohan" : undefined
}

console.log(item["Shubh"]);