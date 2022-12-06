import React, {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import styles from "./AddToDo.module.css"

// const AddToDo = (props) => {
//     return (<div>
//         My name is {props.name}, I live in {props.home}
//     </div>)
// }
// Cách khác:
// const AddToDo = ({name, home}) => {
//     return (<div>
//         My name is {name}, I live in {home}.
//     </div>)
// }

const AddToDo = ({ onAdd }) => {
    const [text, setText] = useState("")
    const handleChange = (event) => {
        //change state
        setText(event.target.value)
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        // preventDefault ngăn không load lại trang của onSubmit bên dưới

        //thêm giá trị điều kiện vào onAdd phải nhập code trên prop onAdd
        if (text.trim().length === 0) {
            return; 
        }
        onAdd({id: uuidv4(), text: text, status:"active"});
        setText("")
    }
  return (
    <form className={styles.form} 
    onSubmit={handleSubmit}>
      <input className={styles.input}
        type="text"
        placeholder="Add To Do"
        value={text}
        onChange={handleChange}
      />
      <button className={styles.button}>Add</button>
    </form>
  );
};

export default AddToDo;
