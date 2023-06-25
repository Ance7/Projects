const point = document.querySelectorAll('.point')
const button = document.getElementById('submit')
let numeroPoint;

point.forEach(points => {
    points.addEventListener('click', () =>{

        deleteSelected()
        
        points.classList.add('point-selected')

        numeroPoint = points.textContent
    })
});



function deleteSelected() {
    point.forEach(e => {
        e.classList.remove('point-selected')
    });
}


button.addEventListener('click', () => {
  if (Array.from(point).some(p => p.classList.contains('point-selected'))) {

    const pointSelected = document.getElementById('selected')

    pointSelected.innerHTML = `You selected ${numeroPoint} out of 5`

    window.location.href = './tanku.html';

  } else {
    alert('Por favor escoge una puntuacion :(');
  }
});


