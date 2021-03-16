import React from "react";
import { useState } from "react";

function Input(props) {
  const [inputValue, setInputValue] = useState("" || props.value);

  const onKeyPressHandler = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      props.onEnter(inputValue);
      setInputValue("");
    }
  };

  const inputChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const onBlurHandler = () => {
    if (props.onBlur) {
      props.onBlur(inputValue);
    }
  };

  return (
    <input
      type="text"
      className={props.className}
      placeholder={props.placeholder}
      onChange={inputChangeHandler}
      onKeyPress={onKeyPressHandler}
      onBlur={onBlurHandler}
      value={inputValue}
      autoFocus={props.autoFocus}
    />
  );
}

export default Input;
