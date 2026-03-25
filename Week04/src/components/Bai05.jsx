import React, { useEffect, useState } from "react";

function Bai05() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [submit, setSubmit] = useState(false);
  // time to render
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  // get
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        setLoading(true);
        setError("");
        const res = await fetch("http://localhost:3000/todos");
        if (!res.ok) {
          throw new Error("API not found");
        }
        const data = await res.json();
        await delay(100);
        setTodos(data);
      } catch (error) {
        setError(error.messgae);
      } finally {
        setLoading(false);
      }
    };
    fetchTodos();
  }, []);

  // add
  const handleAdd = async () => {
    const maxId = todos.length
      ? Math.max(...todos.map((t) => Number(t.id)))
      : 0;

    const newObject = {
      id: maxId + 1,
      title: title,
    };
    if (!title) return;
    try {
      setSubmit(true);
      setError("");
      const res = await fetch("http://localhost:3000/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newObject),
      });
      if (!res.ok) {
        throw new Error("Add failed!");
      }
      const newTodo = await res.json();
      setTodos((prev) => [...prev, newTodo]);
      setTitle("");
    } catch (error) {
      setError(error.message);
    } finally {
      setSubmit(false);
    }
  };

  //delete
  const handleDelete = async (id) => {
    const oldTodos = [...todos];

    setTodos((prev) => todos.filter((id) => prev.id !== id));
    try {
      const res = await fetch(`http://localhost:3000/todos/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Delete failed");
      }
    } catch (error) {
      setError(error.message);
      setTodos(oldTodos);
    }
  };
  return (
    <div>
      <h3>Todos List</h3>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter todo...."
      />
      <button onClick={handleAdd} disabled={submit}>
        {submit ? "Adding..." : "Add"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        todos.map((t) => (
          <div key={t.id}>
            <p>Title: {t.title}</p>
            <button onClick={() => handleDelete(t.id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
}

export default Bai05;
