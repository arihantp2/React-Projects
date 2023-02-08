import React from "react";
import classes from "./Button.module.css";
//button type = if props.type is undefined then fallback 'button' is use which is build in type.

//addUser.js

const Button = (props) => {
  return (
    <button
      className={classes.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
