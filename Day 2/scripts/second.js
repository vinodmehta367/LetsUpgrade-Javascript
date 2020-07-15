console.log("here")
let str = "This is just a sample string of normal nature there is no relation b/w this string and any other strings ,if it is so it is just exception";

console.log(str.slice(5,7))

console.log(str.slice(-18,-2))

console.log(str.substring(6))

console.log(str.substr(5,9))

console.log(str.replace(" is","was"))

//console.log(str.replaceAll("is","was"))

var days=["mon","tues","wed"];
 days.splice(2,0,"sun","sat");
console.log(days); 


let unsorted = ["aa","bb","ff","xx","gg","zz"]
console.log(unsorted.sort());
console.log(unsorted.reverse())
