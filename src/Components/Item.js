import React from "react";
import Input from "./Input";

function Item(props) {
  return (
    <li className="todo-out__item item" key={props.item.id}>
      <div className="item-input">
        <input
          className="item-input__checkbox"
          type="checkbox"
          onChange={() => props.completeTodo(props.item.id)}
          checked={props.item.completed}
          value={props.item.completed}
        />
        {!props.item.edit ? (
          <span
            onDoubleClick={() => props.editTodoToggler(props.item.id)}
            className="item-input__text"
          >
            {props.item.text}
          </span>
        ) : (
          <Input
            className="item-input__input"
            value={props.item.text}
            onBlur={props.editTodoOff}
            onEnter={props.editTodoOff}
            autoFocus
          />
        )}
      </div>
      <button
        className="item-input__button"
        onClick={() => {
          props.deleteTodo(props.item.id);
        }}
      >
        {" "}
        Удалить
      </button>
    </li>
  );
}

export default Item;
