import { useState } from "react";

function TodoInput({ addTodo }) {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim() === "") return;
    addTodo(input);
    setInput("");
  };

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <span>Nhap du lieu:</span>
      <input
        type="text"
        placeholder="Nhap du lieu..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAdd}>Them</button>
    </div>
  );
}

export default TodoInput;
