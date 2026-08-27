console.log("Hello World")
console.log("This is console webpage.")
console.log(true)

let num = 10
console.log(num)

let first_name = 'G'
let last_name = 'Bhupathe'
console.log(`My name is ${last_name}`)

let boolean = true
const pi = 3.1456
console.log(`PI: ${pi}`)
console.log('boolean value is', boolean)

let x
let a = null
console.log('Null datatype:', a)
console.log('Undefined Datatype:', x)

let age = 20
if(age >= 18)
    console.log('Eligible for voting')
else
    console.log('Not eligible for voting') 

for(let i=1; i<5; i++){
    console.log(i)
}
do{
    console.log("Hello")
}while(false)

let array = [10, 20, 30, 'hello', 3.14, true, null]
console.log(array)

array.push(50)
console.log(array)
array.pop()
console.log(array)

array.forEach((value, index) =>{
    console.log(value);
});