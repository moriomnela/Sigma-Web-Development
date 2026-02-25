

let random = Math.random()
let a = prompt("Enter First number")
let c = prompt("Enter Operator")
let b = prompt("Enter Second number")

let obj = {
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"*",
}

if(random >0.1){
    alert(`The result is ${eval (`${a} ${c} ${b}`)}`)
}
else{
    c= obj[c]
    alert(`The result is ${eval (`${a} ${c} ${b}`)}`)
}