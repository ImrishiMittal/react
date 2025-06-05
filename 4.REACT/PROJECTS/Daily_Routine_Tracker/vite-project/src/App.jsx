import { useState } from "react";
import React from "react";
import styles from "./App.module.css";

function App() {
  const [task, setTask] = useState("");         // input value
  const [taskList, setTaskList] = useState([]); // all tasks
  const [isEditing, setIsEditing] = useState(false); // are we editing?
  const [currentIndex, setCurrentIndex] = useState(null); // which task

  function handleInputChange(e) {
    setTask(e.target.value);
  }

  function Add() {
    if (task.trim() === "") return;

    if (isEditing) {
      // update the task
      const updatedTasks = [...taskList];
      updatedTasks[currentIndex] = task;
      setTaskList(updatedTasks);
      setIsEditing(false);
      setCurrentIndex(null);
    } else {
      // add new task
      setTaskList([...taskList, task]);
    }

    setTask(""); // clear input
  }

  function handleDelete(indexToRemove) {
    const updatedTasks = taskList.filter((_, index) => index !== indexToRemove);
    setTaskList(updatedTasks);
  }

  function handleEdit(index) {
    setTask(taskList[index]);   // fill input with the task to edit
    setIsEditing(true);         // switch to edit mode
    setCurrentIndex(index);     // store index of task to edit
  }

  return (
    <>
      <h1 className={styles.heading}>DAILY ROUTINE TRACKER</h1>
      <div className={styles.details}>
        <div>
          <input
            type="text"
            placeholder="What to do?"
            value={task}
            onChange={handleInputChange}
          />
          <button className={styles.Add} onClick={Add}>{isEditing ? "UPDATE" : "ADD"}</button>
        </div>

        <ul className={styles.lists}>
          {taskList.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => handleEdit(index)}>edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
