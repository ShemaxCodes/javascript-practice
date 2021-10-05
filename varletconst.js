var name = "Shema" //try not to use var 
let name = "Gizmo" // 'let' can be redeclared 
//let age = 6
// console.log(name)
let name = "Tre"
let age = 33
const person = {name, age}
person.name = "Toa"
console.log(person)

// Conditionals 

// In Ruby, if statements were like so:
// if condition
//statement
//end 
// In JS
//if (condition) {
  //  statement
//}
let num = 4 

//if (true) {
    //console.log("Hello")
//} else if (num === 3) {
    //console.log("Yes!")
// else { console.log("Num is none of these") 
//}

// Falsey and Truthy

// > null
//null
//> !!5
//true
//> !!"3"
//true
//> !!NaN
//false
//> !!{}
//true
//> !!""
//false
//2 == 2
//true
//> 2 === 2
///true
//> "2" == 2
//true
//> "2" === 2
//false
let num = 4 

switch(num) {
    case 1:
        console.log("Num is 1");

    case 2:
        console.log("Num is the same as Gizmo's age");
    default:
        console.log("It is none of these")
}

let students = ["Gizmo", "Toa", "Shema", "Reina", "TJ"]
students.splice(2,2)
