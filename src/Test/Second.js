import React, { useState, useReducer } from "react";
// import "./Todo.css";
const reducer = (todos, action) => {
  if (action.type === "add") {
    //add todo item in list
    todos = [...todos];
    let newtodo = {
      id: todos.length + 1,
      item: action.value,
    };
    // todos.push(newtodo);
    todos=[...todos,newtodo]
    return todos;
  }
  if (action.type === "delete") {
    //delete todo item from list
    todos = todos.filter((todo) => todo.id !== action.id);
    return todos;
  }
  if (action.type === "edit") {
    //edit todo list item
    console.log(action);
    let text = prompt("Enter name", action.name.item);
    if (text === null) {
      text = action.name.item;
    }
    action.name.item = text;
    todos = [...todos];
    return todos;
  }
  return todos;
};
const TodoApp = () => {
  const [singleTodo, addTodo] = useState("");
  const [todos, dispatch] = useReducer(reducer, []);
  return (
    <>
      <h2>Todo App</h2>
      <div className="todo-input">
        <input
          type="text"
          placeholder="Enter new task"
          onChange={(e) => addTodo(e.target.value)}
        />
        <button onClick={() => dispatch({ type: "add", value: singleTodo })}>
          Add Item
        </button>
      </div>
      {todos.length !== 0 ? (
        <div className="display-todos">
          <h3>Todos list</h3>
          {todos.map((item, index) => (
            <div className="separate-todo" key={item.id}>
              <span className="txt"> {item.item}</span>
              <div className="buttons">
                <button onClick={() =>{ 
                    
                    dispatch({ type: "edit", name: item })}}>
                  Edit
                </button>
                <button
                  onClick={() => dispatch({ type: "delete", id: item.id })}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
    </>
  );
};
export default TodoApp;