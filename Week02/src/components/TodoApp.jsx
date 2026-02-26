import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

export default function TodoApp() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
    };

    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    const newTodo = todos.filter((todos) => todos.id !== id);

    setTodos(newTodo);
  };
}
