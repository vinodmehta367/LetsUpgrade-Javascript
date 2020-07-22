console.log("i'm assignment 3")

let marks= Number(prompt("please enter your marks"))

if(marks <= 20){
    console.log(`Marks are ${marks} and Student Failed`)
}
else if(marks <= 35){
    console.log(`Marks are ${marks} and Grade is C`)
}
else if(marks <=50){
    console.log(`Marks are ${marks} and Grade is B`)

}
else if(marks <= 65){
    console.log(`Marks are ${marks} and Grade is A`)
}
else if(marks <= 100){
    console.log(`Marks are ${marks} and Grade is A+`)
}
else{
    console.log("Invalid marks entered")
}