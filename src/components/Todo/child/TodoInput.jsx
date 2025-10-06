import React from "react";

const TodoInput = ({ addTodo, input, setInput }) => {
  return (
    <form onSubmit={addTodo} className="input-group">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a task..."
      />
      <button type="submit" onClick={addTodo}>
        Add
      </button>
    </form>
  );
};

export default TodoInput;
