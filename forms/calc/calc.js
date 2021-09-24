function Calculate(num1, num2) {
  let answer = num1 + num2
  return answer 
  }
let number1 = prompt('Enter a number: ')
let number2 = prompt('Enter a second number: ')
number1 = parseInt(number1)
number2 = parseInt(number2)

let newAnswer = Calculate(number1, number2)

console.log(`You chose numbers ${number1} and ${number2}`)
console.log(`The sum of ${number1} and ${number2} is ${newAnswer}`)