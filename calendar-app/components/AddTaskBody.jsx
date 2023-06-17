import React, { useState } from 'react'
import styles from '@/app/page.module.css'
import { miniArrowLeft, miniArrowRight } from '@/app/icons';
const AddTaskBody = () => {
  const [initHour, setInitHour] = useState(8);
  const [finishHour, setFinishHour] = useState(15);

  const handleInitHour = (ope) => {
    if (ope === 'inc') {
      if(initHour === 22) return
      if(initHour === finishHour - 1) return
      setInitHour(initHour + 1)
    } else if (ope === 'dec') {
      if(initHour === 5) return
      setInitHour(initHour - 1)
    }
  }

  const handleFinishHour = (ope) => {
    if (ope === 'inc') {
      if(finishHour === 23) return 
      setFinishHour(finishHour + 1)
    } else if (ope === 'dec') {
      if(finishHour === initHour + 1) return
      setFinishHour(finishHour - 1)
    }
  }

  return (
    <div className={styles.addTaskContainer}>
      <h3 style={{fontSize: '1.7rem', color: '#B68D40'}}>Crea un evento</h3>
      <form className={styles.addTaskBody}>
        <div>
          <label>Nombre</label>
          <input type="text" placeholder='Ingresa el nombre' maxLength={10} />
        </div>
        <div>
          <label>Fecha</label>
          <input type="date"/>
        </div>
        <div style={{}}>
          <label>Hora</label>
          <div className={styles.addTaskHourInput}>
            <div>
              <span onClick={() => handleInitHour('dec')}>{miniArrowLeft}</span>
              <p>{initHour}{initHour >= 12 ? ':00 PM' : ':00 AM'}</p>
              <span onClick={() => handleInitHour('inc')}>{miniArrowRight}</span>
            </div>
            <div>
              <span onClick={() => handleFinishHour('dec')}>{miniArrowLeft}</span>
              <p>{finishHour}{finishHour >= 12 ? ':00 PM' : ':00 AM'}</p> 
              <span onClick={() => handleFinishHour('inc')}>{miniArrowRight}</span>
            </div>
          </div>
        </div>
        <div>
          <label>Tag</label>
          <div style={{}}>
            
          </div>
        </div>
        <div>
          <label>Repetir</label>
          <select>
            <option value="1">Todos los dias</option>
            <option value="1">Solo un dia</option>
            <option value="1">Cada semana</option>
            <option value="1">Cada mes</option>
          </select>
        </div>
        <div>
          <label>Descripcion</label>
          <textarea type="text" placeholder='Ingresa la descripcion' maxLength={50}/>
        </div>

        <div className={styles.addTaskLine} />

        <button className={styles.btnCreateTask}>Crear</button>
      </form>
    </div>
  );
}

export default AddTaskBody
