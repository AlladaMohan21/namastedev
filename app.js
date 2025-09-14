require("./xyz.js")
console.log("MOhan");
var name="mohan";
console.log(name);
console.log(globalThis===global)
const {x,calculateSum}=require("./sum.js");
calculateSum(3,4);
console.log(x);