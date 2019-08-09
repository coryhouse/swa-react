import React from "react";

function TextInput(props) {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <br />
      <input
        type="text"
        onChange={props.onChange}
        id={props.id}
        value={props.value}
      />
    </div>
  );
}

export default TextInput;
