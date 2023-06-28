import React from "react";
import { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

export default function TodoList() {
  //state array which hold all todos
  const [todos, setTodos] = useState([]);

  //Function to add a todo to list   
  const addtask = task => {
    if (!task.text) {
      return;
    }

    const newTodos = [task, ...todos];
    setTodos(newTodos);
  };

  //remove a todo from list
  const removeTask = id =>{
    let updatedTasks = [...todos].filter(task => task.id !== id)
    setTodos(updatedTasks)
  }


  //task is completed
  const completeTask = id => {
    let updatedTasks = todos.map(todo => {
        if(todo.id === id) {
            todo.isComplete = true;
        }
        return todo;
    })
    setTodos(updatedTasks)

  }
    
  return (<div>
      <TodoForm addtask={addtask}></TodoForm>
      <Todo todos={todos} completeTask={completeTask} removeTask={removeTask} ></Todo>
      </div>);
}
