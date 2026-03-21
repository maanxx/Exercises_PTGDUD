import React, { useState, useCallback } from "react";

const TodoItem = React.memo(({ todo, onToggle, onDelete }) => {
  console.log("render item", todo.id);
  return (
    <li>
      <span
        onClick={() => onToggle(todo.id)}
        style={{
          textDecoration: todo.done ? "line-through" : "none",
          cursor: "pointer",
        }}
      >
        {todo.text},
      </span>
      <button onClick={() => onDelete(todo.id)}>X</button>
    </li>
  );
});

function Btap04() {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);

  const handleAdd = () => {
    if (!text) return;
    setTodo((prev) => [...prev, { id: Date.now(), text, done: false }]);
    setText("");
  };
  const handleDelete = useCallback((id) => {
    setTodo((prev) => prev.filter((t) => t.id !== id))
  }, []) 
  const handleToggle = useCallback((id) => {
    setTodo((prev) => prev.map((t) => 
        t.id === id ? {...t, done: !t.done} : t
    ))
  }, [])
  return <>
  <h2>Todo Performance</h2>
  <input
  type="text"
  placeholder="Enter you text"
  value={text}
  onChange={(e) => setText(e.target.value)}/>
  <button onClick={handleAdd}>Add</button>
  <ul>
    {todo.map(t => (<TodoItem
        key={t.id}
        todo={t}
        onDelete={handleDelete}
        onToggle={handleToggle}/>)
        
    )}
  </ul>
  </>;

  
}

export default Btap04;
