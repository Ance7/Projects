'use client'

import React, { useState } from "react"

const Task = () => {
  const [tasks, setTask] = useState([])

  const addNewTask = (newTask) => {
  setTask([...tasks, newTask])
  }

  return (
    [task]
  );
}

export default Task


