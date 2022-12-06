import React, { useState } from "react";
import AddToDo from "../AddToDo/AddToDo";
import Todo from "../Todo/Todo";
import styles from "./TodoList.module.css"


const TodoList = ({filter}) => {
  const [todos, setTodos] = useState([
    { id: "1", text: "Drink Coffee", status: "active" },
    { id: "2", text: "Eat Chicken", status: "active" },
    { id: "3", text: "Watch Netflix", status: "active" },
  ]);
  // Each child in a list should have a unique "key" prop => add thêm id vào mỗi object trong array
  // console.log(todos);

  const handleAdd = (todo) => {
    //update new todo in todos
    console.log(todo);
    setTodos([...todos, todo]);
  };

  const handleUpdate = (newObject) => {
    //update status
    setTodos(
      todos.map((todo) => (todo.id === newObject.id ? newObject : todo))
    );
  };

  const handleDelete = (deleteObject) => {
    //Delete todo
    setTodos(todos.filter((todo) => todo.id !== deleteObject.id));
  };

  const filteredTodos = getFilteredTodos(todos, filter)
  function getFilteredTodos(todos, filter) {
    if(filter === 'active') {
      return todos.filter((item) => item.status === "active") 
    } else if (filter === "completed") {
      return todos.filter((item) => item.status === "completed")
    } else{
      return todos;
    }
  }

  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filteredTodos.map((item) => {
          return (
            <Todo
              key={item.id}
              todo={item}
              onUpdateStatus={handleUpdate}
              onDeleteTodo={handleDelete}
            />
          );
        })}
      </ul>

      <AddToDo onAdd={handleAdd} />
    </section>
  );
};

export default TodoList;
