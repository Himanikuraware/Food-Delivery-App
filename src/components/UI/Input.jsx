import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* ...props will make sure that the all key value pairs in this input object which we receive on props input are added as props to input */}
      <input {...props.input} />
    </div>
  );
};

export default Input;
