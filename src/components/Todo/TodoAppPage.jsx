import { useState } from "react";
import TodoInput from "./child/TodoInput";
import TodoList from "./child/TodoList";

export default function TodoAppPage() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);

  const addTodo = (e) => {
    e.preventDefault();
    if (input) {
      setTodos([...todos, { id: Date.now(), text: input }]);
      setInput("");
    } else {
      alert("Enter Some Values Before Adding.");
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const updateTodo = (id, text) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, text } : t)));
    setEditId(null);
  };

  return (
    <div className="app">
      <div className="container">
        <h1>Todo</h1>

        <TodoInput input={input} setInput={setInput} addTodo={addTodo} />

        <TodoList
          todos={todos}
          editId={editId}
          updateTodo={updateTodo}
          setEditId={setEditId}
          deleteTodo={deleteTodo}
        />

        {todos.length === 0 && <p className="empty">No tasks yet</p>}
      </div>
    </div>
  );
}
