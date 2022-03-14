import React, { useState } from 'react';
import './App.css';
import Todo from './components/Todo';

function App() {
  /*
  Bellow array destructure syntax is equivalent to;
  const newTodoStateArr = useState("")
  const newTodo = newTodoStateArr[0];
  const setNewTodo = newTodoStateArr[1];
  */
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleNewTodoSubmit = (event) => {
    event.preventDefault();

    if (newTodo.length === 0) {
      return;
    }

    const todoItem = {
      text: newTodo,
      complete: false
    }
    // setTodos and pass in a brand new array containing all current todos plus 1 more. 
    setTodos([...todos, todoItem]);
    setNewTodo("");
  }

  const handleTodoDelete = (delIdx) => {
    const filteredTodos = todos.filter((todo, i) => {
      return i !== delIdx;
    });
    setTodos(filteredTodos);
  }

  const handleToggleComplete = (idx) => {
    const updatedTodos = todos.map((todo, i) => {
      if (idx === i) {
        todo.complete = !todo.complete;
        // To avoid mutating the todo directly, do this;
        // const updateTodo = { ...todo, complete: !todo.complete };
        // return updateTodo;
      }
      return todo;
    })
    setTodos(updatedTodos);
  }

  return (
    <div style={{ textAlign: "center", padding: "0px" }}>
      <form onSubmit={(event) => {
        handleNewTodoSubmit(event);
      }}>
        <h2 style={{ padding: "9px" }} className="fw-lighter font-monospace">TODO-LIST APP</h2>
        <input onChange={(event) => { setNewTodo(event.target.value) }} type="text" value={newTodo} />
        <div style={{ margin: "10px" }}>
          <button className="btn btn-outline-primary bg-light py-1 mt-1 font-monospace" >Add Task Todo</button>
        </div>
      </form>

      <hr style={{ margin: "1.7rem" }} />


      {todos.map((todo, i) => {
        return (
          <Todo
            key={i}
            i={i}
            todo={todo}
            handleToggleComplete={handleToggleComplete}
            handleTodoDelete={handleTodoDelete} />
        )
      })}
    </div>
  );
}

export default App;