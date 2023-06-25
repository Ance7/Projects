const screenNumber = document.querySelector('.number');
const miniNumber = document.querySelector('.mini-number');
const clear = document.querySelector('.clear');
const multiplication = document.querySelector('.multiplication');
const delete_ = document.querySelector('.delete');
const division = document.querySelector('.division');
const subtraction = document.querySelector('.subtraction');
const adition = document.querySelector('.adition')
const coma = document.querySelector('.coma');
const equal = document.querySelector('.equal');
const numbers = document.querySelectorAll('.number');
const percent = document.querySelector('.percent');
const raiz = document.querySelector('.raiz');

let numArray = []
let nums = Array
let num = ''

numbers.forEach(number => {
  number.addEventListener('click', () => {

    if (screenNumber.textContent === '0') {
      screenNumber.textContent = ''
      screenNumber.innerHTML = number.textContent
      num += number.textContent
      miniNumber.innerHTML = ''
    } else {
      num += number.textContent
      screenNumber.innerHTML += number.textContent
    }
  })
});

adition.addEventListener('click', () => {
  addSymbol('+')
})

multiplication.addEventListener('click', () => {
  addSymbol('*')
})

subtraction.addEventListener('click', () => {
  addSymbol('-')
})

division.addEventListener('click', () => {
  if (screenNumber.textContent === '0') {
    miniNumber.innerHTML = 'Ingresar numero primero'
  } else {
    screenNumber.innerHTML += '÷'
    numArray.push(num)
    numArray.push('/')
    num = ''
  }
})

percent.addEventListener('click', () => {
  addSymbol('%')
})

coma.addEventListener('click', () => {
  if (screenNumber.textContent === '0') {
    screenNumber.textContent += '.'
    num += '0.'
  } else {
    screenNumber.innerHTML += '.'
    num += '.'
  }
})

raiz.addEventListener('click', () => {
 addSymbol('√')
})

clear.addEventListener('click', () => {
  screenNumber.textContent = '0'
  numArray = []
  num = ''
  miniNumber.innerHTML = ''
})

delete_.addEventListener('click', () => {

  if (screenNumber.textContent !== '+' || screenNumber.textContent !== '-' || screenNumber.textContent !== '*' || screenNumber.textContent !== '/' || screenNumber.textContent !== '√' || screenNumber.textContent !== '%') {
    screenNumber.textContent = screenNumber.textContent.slice(0, -1)
    num = numArray[0]
    numArray = []
  } else {
    if (screenNumber.textContent.length > 1) {
      screenNumber.textContent = screenNumber.textContent.slice(0, -1)
      num = num.slice(0, -1)  
    } else if (screenNumber.textContent.length === 1) {
      screenNumber.textContent = '0'
      num = ''
    } 
  }
})

equal.addEventListener('click', () =>{

  let numWait = num

  if (numWait === '') {
    miniNumber.innerHTML = 'Falta numero'
  } else if (numArray.length > 1) {
    numArray.push(num)
    miniNumber.innerHTML = ''
    calculated(numArray)
  } else {
    miniNumber.innerHTML = 'No hay suficientes numeros'
  }
})

function addSymbol(symbol) {
  if (screenNumber.textContent === '0') {
    miniNumber.innerHTML = 'Ingresar numero primero'
  } else { 
    screenNumber.innerHTML += symbol
    numArray.push(num)
    numArray.push(symbol)
    num = ''
  }
}

function calculated(numbers) {

  let numLength = numbers.length
  let result = 0

  if (numLength <= 3){
    for (let i = 0; i < 2; i++) {
      if (numbers[i+1] === '+') {
        result = parseFloat(numbers[i]) + parseFloat(numbers[i+2]) 
      } else if (numbers[i+1] === '-') {
        result = parseFloat(numbers[i]) - parseFloat(numbers[i+2])
      } else if (numbers[i+1] === '*') {
        result = parseFloat(numbers[i]) * parseFloat(numbers[i+2])
      } else if (numbers[i+1] === '/') {
        result = parseFloat(numbers[i]) / parseFloat(numbers[i+2])
      } else if (numbers[i+1] === '%') {
        result = parseFloat(numbers[i]) *(parseFloat(numbers[i+2])/100)
      } else if (numbers[i+1] === '√') {
        result = Math.sqrt(parseFloat(numbers[i]))
      }
      screenNumber.textContent = result
    }
  } else if (numLength > 3) {
    miniNumber.textContent = 'Maximo 2 numeros'
    screenNumber.textContent = '0'
  }

  numArray = []
  num = result
}
