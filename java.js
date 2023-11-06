const hello = "hello, world!!!"

console.log(hello)

function saluda(nombre){
    console.log("hello " + nombre)
}
console.log(saluda("mario"))


const expression = function (quemas){
    let quemas = "como estas?"

    console.log("pepe " + quemas)
}

//arrow funcion

const arrow = (nombree) => {
    console.log("hi " + nombree)
}

console.log(arrow("pepe"))


//function

do{
    let num = 30
    num = num - 1;

    console.log(num)
}while(num > 0)

let j = 30

while(j > 15){
    j = - 1
    console.log(j)
}

for(i = 80; i >0; i= i - 1){
    console.log(i + " segundos")
}


let k = 40
switch(true){
    case (k > 20):
        console.log("tu valor es mayor")
    break

    case(k < 20):
        console.log("tu valor es menor")
    break
}

const array = [34, 70, "queso"]

function arrayFuntion(){
    let suma = 0

    for (let i = 0; i < array.length; i++){
        array[i]       
    }
}