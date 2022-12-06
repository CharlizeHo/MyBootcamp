import React from "react";
import { FaTrash } from "react-icons/fa";
import styles from "../Todo/ToDo.module.css"


const ToDo = ({ todo, onUpdateStatus, onDeleteTodo }) => {
  const handleChange = (event) => {
    // console.log(event);
    const newStatus = event.target.checked ? "completed" : "active";
    onUpdateStatus({ ...todo, status: newStatus });
  };
  const handleDelete = () => {
    onDeleteTodo(todo);
    // event.preventDefault();
  };
  return (
    <li className={styles.todo}>
      <input className={styles.checkbox}
        type="checkbox"
        id="checkbox"
        checked={todo.status === "completed"}
        onChange={handleChange}
      />
      <label className={styles.text} htmlFor="checkbox">{todo.text}</label>
      <span className={styles.icon}>
      <button onClick={handleDelete}>
        <FaTrash />
      </button>
      </span>
    </li>
  );
};

export default ToDo;
