import React from "react";

const TodoList = ({ todos, editId, updateTodo, setEditId, deleteTodo }) => {
  return (
    <div className="todo-list">
      {todos.map((t) => (
        <div key={t.id} className="todo-item">
          {editId === t.id ? (
            <>
              <input className="edit-input" defaultValue={t.text} />
              <button
                onClick={(e) =>
                  updateTodo(t.id, e.target.previousSibling.value)
                }
                className="save"
              >
                Save
              </button>
              <button onClick={() => setEditId(null)} className="cancel">
                Cancel
              </button>
            </>
          ) : (
            <>
              <span>{t.text}</span>
              <div className="actions">
                <button onClick={() => setEditId(t.id)} className="edit">
                  Edit
                </button>
                <button onClick={() => deleteTodo(t.id)} className="delete">
                  Delete
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
