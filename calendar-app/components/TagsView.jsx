/* eslint-disable no-undef */
'use client'

import styles from '@/app/page.module.css'
import React, { useState, useEffect } from 'react'

const TagsView = ({ tags, setTags, colorTag, setColorTag }) => {
  const [newTag, setNewTag] = useState('')
  const [newColorTag, setNewColorTag] = useState('')
  const [showAddTag, setShowAddTag] = useState(false)
  const [hoveredTagIndex, setHoveredTagIndex] = useState(null)

  useEffect(() => {
    if (localStorage.getItem('tags')) {
      setTags(JSON.parse(localStorage.getItem('tags')))
    }
    if (localStorage.getItem('colorTag')) {
      setColorTag(JSON.parse(localStorage.getItem('colorTag')))
    }
  }, [])

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
    localStorage.setItem('tags', JSON.stringify([...tags, newTag]))
    localStorage.setItem('colorTag', JSON.stringify([...colorTag, newColorTag]))
  }

  const deleteTag = (tag) => {
    return () => {
      const newTags = tags.filter((tags) => tags !== tag)
      const newColorTags = colorTag.filter((tags) => tags !== tag)
      setTags(newTags)
      setColorTag(newColorTags)
      localStorage.setItem('tags', JSON.stringify(newTags))
      localStorage.setItem('colorTag', JSON.stringify(newColorTags))
    }
  }

  return (
    <div className={styles.tagsContainer}>
      <h3>Tags</h3>
      <div className={styles.tagsBody}>
        <div className={styles.tags}>
          {
            tags && tags.map((tag, index) => {
              return (
                <div key={index} onMouseEnter={() => setHoveredTagIndex(index)} onMouseLeave={() => setHoveredTagIndex(null)} onClick={deleteTag(tag)}>
                  <p style={{ cursor: 'pointer', backgroundColor: colorTag[index], margin: '0.4rem', padding: '0.2rem 1.2rem', borderRadius: '15px', minWidth: '4.5rem', textAlign: 'center' }}>
                    {hoveredTagIndex === index ? 'X' : tag}
                  </p>
                </div>
              )
            })
          }

      </div>
        {
          tags && tags.length < 7
            ? <button className={styles.btnAddTag} onClick={() => setShowAddTag(true)}>+</button>
            : null
        }
      </div>
      {showAddTag && (
        <>
          <div className={styles.addTagOverlay} onClick={() => setShowAddTag(false)} />

          <div className={styles.addTagContainer}>
            <h3 style={{ fontSize: '1.6rem', textDecoration: 'underline', color: '#D6AD60' }}>Nuevo Tag</h3>
            <div className={styles.addTagBody}>
              <div>
                <span>Nombre:</span>
                <span>Color:</span>
              </div>

              <div>
                <input type='text' maxLength={8} onChange={handleNewTag} />
                <input type='color' onChange={handleNewColorTag} />
              </div>
            </div>
              <button
                className={styles.btnNewTag}
                disabled={!newTag || !newColorTag}
                onClick={() => {
                  addTag()
                  setShowAddTag(false)
                }}
              >
                Agregar
              </button>
          </div>
        </>
      )}
    </div>
  )
}

export default TagsView
