import React from 'react';

const Todo = (props) => {
    const todoClasses = ["bold", "italic"];
    if (props.todo.complete) {
        todoClasses.push("line-through");
    }

    return (
        <div>
            <span className={todoClasses.join(" ")} style={{ margin: "10px" }}>{props.todo.text}</span>
            <input onChange={(event) => {
                props.handleToggleComplete(props.i);
            }} checked={props.todo.complete} type="checkbox" />
            <button style={{ margin: "7.5px" }} className="btn btn-outline-danger bg-light text-danger font-monospace fs-6 py-0" onClick={(event) => {
                props.handleTodoDelete(props.i)
            }}>Remove Task</button>
        </div>
    );
}

export default Todo;
