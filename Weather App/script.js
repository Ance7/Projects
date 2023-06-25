const clima = document.querySelector('.clima')
const temp = document.querySelector('.temp')
const temp2 = document.querySelector('.temp-2')
const range = document.getElementById('range')
const time = document.querySelector('.time')
const bodyTemp = document.querySelector('.body')

const url = 'https://api.open-meteo.com/v1/forecast?latitude=-33.46&longitude=-70.65&hourly=temperature_2m'
let dataTemp;

fetch(url)
  .then(response => response.json())
  .then(data =>{
    temp.innerHTML = data.hourly.temperature_2m[0]
    temp2.innerHTML = data.hourly.time[0]
    if (dataTemp <= 15) {
      clima.style.backgroundColor = '';
      bodyTemp.style.backgroundColor = '';
      time.style.backgroundColor = '';
    } else {
      clima.style.backgroundColor = 'rgb(223, 90, 90)';
      bodyTemp.style.backgroundColor = 'rgb(124, 48, 48)';
      time.style.backgroundColor = 'rgb(124, 48, 48)';
    }
  })
  .catch(error => {console.error(`Error:, ${error}`)});


function changeTime (i){
  fetch(url)
  .then(response => response.json())
  .then(data =>{
    temp.innerHTML = data.hourly.temperature_2m[i]
    temp2.innerHTML = data.hourly.time[i]
  })
}

range.addEventListener('click', () =>{
  changeTime(range.value)

  fetch(url)
      .then(response => response.json())
      .then(data =>{
        dataTemp = data.hourly.temperature_2m[range.value]
      
        if (dataTemp <= 15) {
          clima.style.backgroundColor = '';
          bodyTemp.style.backgroundColor = '';
          time.style.backgroundColor = '';
        } else {
          clima.style.backgroundColor = 'rgb(223, 90, 90)';
          bodyTemp.style.backgroundColor = 'rgb(124, 48, 48)';
          time.style.backgroundColor = 'rgb(124, 48, 48)';
        }
      })
})


