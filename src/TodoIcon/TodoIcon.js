import React from "react";
import { BsCheck } from "react-icons/bs";
import { TiDelete } from "react-icons/ti";
import "./TodoIcon.css"

const iconType = {
    'check': (color) => <BsCheck className="icon-svg" fill={color}/>,
    'delete': (color) => <TiDelete className="icon-svg" fill={color}/>
};

function TodoIcon({type, color, onClick}) {
    return (
    <span
        className={`position-${type} icon-${type}`}
        onClick={onClick}
    >
        {iconType[type](color)}
    </span>
    )
}

export { TodoIcon };