import React from "react";
import Item from "./Item";

function Items(props) {
  return (
    <ul className="todo-out__items">
      {props.todos.map((item) => {
        return (
          <Item
            key={item.id}
            item={item}
            itemTodoText={props.itemTodoText}
            setItemTodoText={props.setItemTodoText}
            deleteTodo={props.deleteTodo}
            completeTodo={props.completeTodo}
            editTodoToggler={props.editTodoToggler}
            editTodoOff={props.editTodoOff(item.id)}
          />
        );
      })}
    </ul>
  );
}
export default Items;
