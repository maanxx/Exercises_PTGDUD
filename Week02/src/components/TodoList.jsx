import TodoItem from "./TodoItem";

function TodoList({ todos, deleteTodo }) {
  return (
    <div>
      <h1>Danh sach Todos:</h1>
      {todos.map((todo) => (
        <TodoItem 
        key={todo.id}
        todo={todo}
        deleteTodo={deleteTodo}/>
      ))}
    </div>
  );
}

export default TodoList;
