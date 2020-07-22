console.log("And we switch")
let marks = Number(prompt("enter your marks"));
console.log(marks, typeof marks)

switch(true){
    case (marks<20 ):
        console.log(`Marks are ${marks} and student failed! `)
        break;
    case (marks<=35):
        console.log(`Marks are ${marks} and grade is C `)
        break;
    case (marks<=50):
        console.log(`Marks are ${marks} and grade is B `)
        break;
    case (marks<=65):
        console.log(`Marks are ${marks} and grade is A `)
        break;
    case (marks<=100):
        console.log(`Marks are ${marks} and grade is A+ `)
        break;
    default:
        console.log('enter valid marks')    

}
