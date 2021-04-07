" use strict";
// object{}
let person = {
name: "Aidai",
last_name: "Tursunalieva",
year: 2002,
location: "KG Karakol"
};
for (let key in person){
    console.log(person[key]);
} 
console.log(person.last_name);
// array []
//              0         1       2
let array  = ["Apple","Iphone", "Pen"];
for(let key in array){
    console.log(array[key]);
}
