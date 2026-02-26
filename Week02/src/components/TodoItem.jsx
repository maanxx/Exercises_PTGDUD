export default function TodoItem({ todo, deleteTodo }) {
  return (
    <div>
      <span>{todo.text}</span>
      <button onClick={() => deleteTodo(todo.id)}>Xoa</button>
    </div>
  );
}
