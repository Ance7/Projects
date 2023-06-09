'use client'

import { set } from 'date-fns';
import styles from '../app/page.module.css'
import React from 'react';
import { useState } from 'react';

const Tags = () => {

  const [tags, setTags] = useState(['Work', 'Personal', 'Urgent'])
  const [colorTag, setColorTag] = useState(['#00b8d8','#ff7cb3','#00a772'])
  const [newTag, setNewTag] = useState('')
  const [newColorTag, setNewColorTag] = useState('')
  const [showAddTag, setShowAddTag] = useState(false);

  // const addEvent = () => {
  //   return (
  //     <div className={styles.createEventContainer}>
  //       <h3>Create event</h3>
  //       <div className={styles.createEventBody}>
  //         <div className={styles.createEventText}>
  //           <div className={styles.createEventInputs}>
  //             <span>Name</span>
  //             <input type='text' />
  //           </div>
  //           <div className={styles.createEventInputs}>
  //             <span>Date</span>

  //           </div>
  //           <div className={styles.createEventInputs}>
  //             <span>Time</span>

  //           </div>
  //           <div className={styles.createEventInputs}>
  //             <span>Tag</span>

  //           </div>
  //           <div className={styles.createEventInputs}>
  //             <span>Repeat</span>

  //           </div>
  //           <div className={styles.createEventInputs}>
  //             <span>Location</span>
  //           </div>
  //           <div className={styles.createEventInputs}>
  //             <span>Description</span>
  //             <input type='text' />
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   )
  // }

  const handleNewTag = (e) => {
    setNewTag(e.target.value)
  }

  const handleNewColorTag = (e) => {
    setNewColorTag(e.target.value)
  }

  const addTag = () => {
    setTags([...tags, newTag])
    setColorTag([...colorTag, newColorTag])
    setNewTag('')
    setNewColorTag('')
    setShowAddTag(false)
  }

  return (
    <div className={styles.tagsContainer}>
      <h3>Tags</h3>
      <div className={styles.tagsBody}>
        <div className={styles.tags}>
          {
            tags.map((tag, index) => {
              return (
                <div key={index}>
                  <p style={{backgroundColor: colorTag[index], margin: '0.4rem', padding: '0.2rem 1rem', borderRadius: '15px'}}>
                    {tag}
                  </p>
                </div>
              )
            })
          }

      </div>
        {
          tags.length < 7 
          ? <button className={styles.btnAddTask} onClick={() => setShowAddTag(true)}>+</button>
          : null
        }
      </div>
      {showAddTag && (
        <>
          <div className={styles.addTagOverlay} onClick={() => setShowAddTag(false)} />

          <div className={styles.addTagContainer}>
            <h3 style={{fontSize: '1.6rem', textDecoration: 'underline', color: '#D6AD60'}}>Nuevo Tag</h3>
            <div className={styles.addTagBody}>
              <div>
                <span>Nombre:</span>
                <span>Color:</span>
              </div>

              <div>
                <input type='text' onChange={handleNewTag} />
                <input type='color' onChange={handleNewColorTag} />
              </div>
            </div>
              <button className={styles.addTagBtn} onClick={() => {addTag()}} disabled={!newTag || !newColorTag}>Agregar</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Tags;
