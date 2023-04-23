import React from "react";
import classes from "./Input.module.css";

// with the help of forwardRef we receive ref inside our custom component.

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* ...props will make sure that the all key value pairs in this input object which we receive on props input are added as props to input */}
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
