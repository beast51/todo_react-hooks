import React, { useState } from "react";
import Items from "./Components/Items";
import "./App.css";

function App() {
  const [todoText, setTodoText] = useState("");
  const [itemTodoText, setItemTodoText] = useState("");
  const [todos, setTodos] = useLocalState("todoList");
  

  function useLocalState(localItem) {
    const [loc, setState] = useState(
      JSON.parse(localStorage.getItem(localItem) || "[]")
    );
    function setLoc(newItem) {
      localStorage.setItem(localItem, JSON.stringify(newItem));
      setState(newItem);
    }
    return [loc, setLoc];
  }

  const addTodo = (event) => {
    if (event.key === "Enter" && todoText.trim() !== "") {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text: todoText,
          completed: false,
          edit: false,
        },
      ]);
      setTodoText("");
    }
  };

  const deleteTodo = (id) => {
    setTodos([...todos.filter((elem) => elem.id !== id)]);
  };

  const completeTodo = (id) => {
    todos.forEach((elem) => {
      if (elem.id === id) {
        elem.completed = !elem.completed;
      }
    });
    setTodos([...todos]);
  };

  const editTodoToggler = (id) => {
    todos.forEach((elem) => {
      if (elem.id === id) {
        elem.edit = !elem.edit;
        setItemTodoText(elem.text);
      }
    });
    setTodos([...todos]);
  };

  const editTodoOff = (id, event) => {
    if (event.key === "Enter") {
      todos.forEach((elem) => {
        if (elem.id === id) {
          elem.edit = !elem.edit;
          if (itemTodoText.trim() !== "") {
            elem.text = itemTodoText;
          }
        }
      });
      setTodos([...todos]);
    }
  };

  return (
    <div className="todo">
      <h1 className="todo__title">Todo</h1>
      <input
        className="todo__input"
        type="text"
        placeholder="Введите название дела"
        onChange={(event) => setTodoText(event.target.value)}
        onKeyPress={addTodo}
        value={todoText}
      />
      <div className="todo-out">
        <p className="todo-out__title">
          {todos.length > 0 ? "Список дел:" : "Запланируй что-то)"}
        </p>
        <Items
          todos={todos}
          itemTodoText={itemTodoText}
          setItemTodoText={setItemTodoText}
          deleteTodo={deleteTodo}
          completeTodo={completeTodo}
          editTodoToggler={editTodoToggler}
          editTodoOff={editTodoOff}
        />
      </div>
    </div>
  );
}

export default App;
