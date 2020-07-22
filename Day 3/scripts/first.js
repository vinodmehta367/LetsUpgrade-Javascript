let checker = function(number){
    if(number % 2 === 0)
    console.log(`entered number ${number}is even`)
    else if(number % 2 !== 0)
    console.log(`Entered number ${number} is odd`)
    else if (number === 0)
    console.log("Zero unacceptable")
    else
    console.log("please enter a number")

}
let num= +prompt("please enter a number","0")
checker(num);
