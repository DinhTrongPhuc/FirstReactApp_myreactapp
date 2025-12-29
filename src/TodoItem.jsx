function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div className="todo-item">
      <span
        onClick={() => onToggle(todo.id)}
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
        }}
      >
        {todo.text}
      </span>

      <button onClick={() => onDelete(todo.id)}>❌</button>
    </div>
  );
}

export default TodoItem;
