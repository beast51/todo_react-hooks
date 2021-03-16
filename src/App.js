import React, { useState } from "react";
import Items from "./Components/Items";
import Input from "./Components/Input";
import "./App.css";

function App() {
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

  const addTodo = (text) => {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: text,
        completed: false,
        edit: false,
      },
    ]);
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

  const editTodoOff = (id) => (text) => {
    todos.forEach((elem) => {
      if (elem.id === id) {
        if (text.trim() !== "") {
          elem.text = text;
          elem.edit = !elem.edit;
        } else {
          elem.edit = !elem.edit;
        }
      }
    });
    setTodos([...todos]);
  };

  return (
    <div className="todo">
      <h1 className="todo__title">Todo</h1>
      <Input
        className="todo__input"
        placeholder="Введите название дела"
        onEnter={addTodo}
        value={itemTodoText}
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
