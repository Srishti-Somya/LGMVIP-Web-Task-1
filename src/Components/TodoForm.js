import React, { useState } from "react";

export default function TodoForm(props) {
  //state
  const [input, setInput] = useState("");

  const handleChange = e => {
    setInput(e.target.value)
  }  

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addtask({
        id: Math.floor(Math.random() * 1000000),
        text: input,
        isComplete: false
    })
    setInput('')
  }
  

  return (
    <form className="todo-form">
      <input type="text" placeholder="New task" onChange={handleChange} className="todo-input" value={input} name="text" id="" />
      <button type="submit" onClick={handleSubmit} className="todo-btn">Add Todo</button>
    </form>
  );
}
