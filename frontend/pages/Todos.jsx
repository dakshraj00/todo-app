import { useEffect, useState } from "react";
import axios from "axios";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  const token = localStorage.getItem("token");
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const res = await axios.get("http://localhost:8000/todos", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTodos(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const addTodo = async () => {
    if (!title.trim()) return;

    try {
      await axios.post(
        "http://localhost:8000/todos",
        { title },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setTitle("");
      fetchTodos();
    } catch (err) {
      console.error(err);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/todos/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchTodos();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 flex items-center justify-center">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl p-8">
        
        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-6">
          📝 My Todos
        </h2>

        {/* Add Todo */}
        <div className="flex gap-3 mb-6">
          <input
            type="text"
            placeholder="Enter a new todo..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            onClick={addTodo}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-semibold transition"
          >
            Add
          </button>
        </div>

        {/* Todo List */}
        {todos.length === 0 ? (
          <p className="text-center text-gray-500">
            No todos yet 🚀 Add one!
          </p>
        ) : (
          <ul className="space-y-3">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="flex items-center justify-between bg-gray-50 px-4 py-3 rounded-lg shadow-sm hover:shadow transition"
              >
                <span className="text-gray-700">{todo.title}</span>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="text-red-500 hover:text-red-700 transition text-lg"
                >
                  ❌
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Todos;
