import React from 'react';
import './button.css'

const Button = (props) => {
    return (
        <div className="button__container">
            <button className={props.color}  onClick={() => props.onClick(props.id) }>{props.buttonName}</button>
        </div>
    );
}

export default Button;
