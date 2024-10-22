import React from "react";

const TodoItems =(props) => {
    return(
        <li className="todo-items">
          {props.completed ? <></>: <input  type="checkbox" name="" id="" />}
            <p>{props.text}</p>
            <p>...</p>
        </li>
    )
}
export default TodoItems;