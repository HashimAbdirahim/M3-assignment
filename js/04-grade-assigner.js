// GLOBAL VARIABLES
let grade

// GET GRADE FROM USER
grade = parseInt(prompt('What is your Grade:'))

if (grade > 100 || grade <= 0) {
    console.log('Only numbers between 1 and 100 are accepted')
} else if (grade >= 90){
    console.log('You received an A')
}
else if (grade >= 80){
    console.log('You received an B')
}
else if (grade >= 70){
    console.log('You received an C')
}
else if (grade >= 60){
    console.log('You received an D')
}
else if (grade < 60){
    console.log('You received an F')
}