const number = document.getElementById('number') 
const buttonDecrease = document.querySelector('.decrease') 
const buttonReset = document.querySelector('.reset') 
const buttonIncrease = document.querySelector('.increase') 

let num = 0

number.innerHTML = num

function modifyNumber(action) {
  if (action === 'decrease') {
    num--
  } else if (action ==='increase') {
    num++
  } else if (action ==='reset') {
    num = 0
  }

  number.innerHTML = num
}

buttonDecrease.addEventListener('click', () =>{
  modifyNumber('decrease')
})

buttonReset.addEventListener('click', () =>{
  modifyNumber('reset')
})

buttonIncrease.addEventListener('click', () =>{
  modifyNumber('increase')
})
