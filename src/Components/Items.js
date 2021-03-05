import React from "react";

function Items(props) {
  return (
    <ul className="todo-out__items">
      {props.todos.map((item) => {
        return (
          <li className="todo-out__item item" key={item.id}>
            <label className="item-input">
              <input
                className="item-input__checkbox"
                type="checkbox"
                onChange={() => props.completeTodo(item.id)}
                checked={item.completed}
              />

              {!item.edit 
                ? 
              ( <span
                  onDoubleClick={() => props.editTodoToggler(item.id)}
                  className="item-input__text"
                >
                  {item.text}
                </span>) 
                : (
                <input
                  className="item-input__input"
                  value={props.itemTodoText}
                  onChange={(event) => props.setItemTodoText(event.target.value)}
                  onKeyPress={(event) => props.editTodoOff(item.id, event)}
                  onBlur={() => {props.editTodoToggler(item.id)}}
                  autoFocus
                />
              )}
            </label>
            <button
              className="item-input__button"
              onClick={() => {props.deleteTodo(item.id)}}
            > Удалить
            </button>
          </li>
        );
      })}
    </ul>
  );
}
export default Items;
