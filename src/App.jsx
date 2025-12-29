import { useState, useEffect } from "react";

import {
    getTodos,
    addTodo,
    toggleTodo,
    deleteTodo,
} from "./api/todoApi";

import TodoItem from "./TodoItem";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [darkMode, setDarkMode] = useState(false);

    //LOAD DATA KHI MỞ APP  
    useEffect(() => {
    fetchTodos();
    }, []);

    const fetchTodos = async () => {
    const res = await getTodos();
    setTodos(res.data);
    };//end
  
    useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        setDarkMode(true);
    }
    }, []);

    useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
    }, [darkMode]);


  // Load từ localStorage
  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // Lưu localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

//   const handleAddTodo = () => {
//         if (todo.trim() === "") return;
//             setTodos([
//             ...todos,
//             {
//                 id: Date.now(),
//                 text: todo,
//                 completed: false,
//             },
//         ]);
//     setTodo("");
//   };

    const handleAddTodo = async (text) => {
        if (!text.trim()) return;

        try {
            const res = await addTodo(text);
            setTodos((prev) => [...prev, res.data]);
        } catch (error) {
            console.error("Add todo failed", error);
        }
    };


  
    const toggleTodo = (id) => {
        setTodos(
            todos.map((todo) =>
            todo.id === id
                ? { ...todo, completed: !todo.completed }
                : todo
            )
        );
    };

    const handleToggle = async (id) => {
        await toggleTodo(id);
        setTodos(
            todos.map((t) =>
            t.id === id ? { ...t, completed: !t.completed } : t
            )
        );
    };
    
    const handleDeleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const handleDelete = async (id) => {
        await deleteTodo(id);
        setTodos(todos.filter((t) => t.id !== id));
    };



    const filteredTodos = todos.filter((todo) => {
        if (filter === "active") return !todo.completed;
        if (filter === "completed") return todo.completed;
        return true; // all
    });

    const totalCount = todos.length;
    const completedCount = todos.filter((t) => t.completed).length;
    const activeCount = totalCount - completedCount;


    return (
    <div className={`app ${darkMode ? "dark" : ""}`}>
        <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "☀️" : "🌙"}
        </button>

        <div className="todo-card">
        <h1 className="title">Todo Dashboard</h1>

        <div className="todo-input">
            <input
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                placeholder="Nhập công việc..."
            />
            <button onClick={() => handleAddTodo(todo)}>
                Add
            </button>
        </div>

        {/* Filter Section */}
        <div className="filter">
        <button
            className={filter === "all" ? "active" : ""}
            onClick={() => setFilter("all")}
        >
            All
        </button>

        <button
            className={filter === "active" ? "active" : ""}
            onClick={() => setFilter("active")}
        >
            Active
        </button>

        <button
            className={filter === "completed" ? "active" : ""}
            onClick={() => setFilter("completed")}
        >
            Completed
        </button>
        </div>

        {/* Counter Section */}
        <div className="counter">
        <div>
            <strong>{totalCount}</strong>
            <span>Total</span>
        </div>

        <div>
            <strong>{activeCount}</strong>
            <span>Active</span>
        </div>

        <div>
            <strong>{completedCount}</strong>
            <span>Completed</span>
        </div>
        </div>

        {/* Todo List Section */}     
        <ul className="todo-list">
            {filteredTodos.map((item) => (
            <TodoItem
                key={item.id}
                todo={item}
                onToggle={() => toggleTodo(item.id)}
                onDelete={() => handleDeleteTodo(item.id)}
            />
            ))}
        </ul>
        </div>
    </div>
    );
}

export default App;
