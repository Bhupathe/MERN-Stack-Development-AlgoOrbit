array = [50, 20, 30, 40, 10]
console.log(array)

// selection sort
function selectionSort(array, order='a'){
    if(order == 'd'){
        for(let i=0; i<array.length-1; i++){
        let index = i
        for(let j=i+1; j<array.length; j++)
            if(array[index] < array[j])
                index = j
            let temp = array[index];
            array[index] = array[i];
            array[i] = temp;
        }
    }else{
        for(let i=0; i<array.length-1; i++){
        let index = i
        for(let j=i+1; j<array.length; j++)
            if(array[index] > array[j])
                index = j
            let temp = array[index];
            array[index] = array[i];
            array[i] = temp;
        }
    }

    return array
}

console.log(selectionSort(array, 'd'))

// Arrow Function
const greeting = (userName) => `Hello, ${userName}`
console.log(greeting('bhupathe'))

let student = {
    name: 'Bhupathe',
    age: 20,
}
console.log(student)
student.branch = "ML"
console.log(student)
delete student.age
console.log(student)

console.log('\n')
for(let key in student){
    console.log(student[key])
}


// for each -- object
Object.keys(student).forEach((key) => {
    console.log(student[key])
})

console.log(Object.keys(student))
console.log(Object.values(student))
console.log(Object.entries(student))

console.log('\n')
Object.entries(student).forEach((key, value) => {
    console.log(`${key}: ${value}`)
})

