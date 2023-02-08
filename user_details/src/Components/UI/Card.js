import React from "react";
import classes from './Card.module.css';

// className is props name passing from add user component

const Card = (props) => {
    return (
        <div className={`${classes.card} ${props.className}`} >{props.children} </div> 
    );
}

export default Card;