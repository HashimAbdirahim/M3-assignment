// GLOBAL VARIABLES
let firstNum
let secondNum

// ASK USER TO ASSIGN INTERGERS
firstNum = parseInt(prompt('Please enter the first number:'))
secondNum = parseInt(prompt('Please enter the second number:'))

if (firstNum > secondNum) {
    document.write(`The larger number is: ${firstNum}<br>`)
} else if (secondNum > firstNum){
    document.write(`The larger number is: ${secondNum}<br>`)
}
else {
    document.write('The two numbers are equal<br>')
}