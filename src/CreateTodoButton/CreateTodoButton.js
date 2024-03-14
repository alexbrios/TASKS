import "./CreateTodoButton.css"
import { TodoContext } from "../TodoContext/TodoContext"
import React from "react"

function CreateTodoButton () {
    const {
        setOpenModal,
        openModal
    } = React.useContext(TodoContext)
    return (
        <div className="container-button">
            <button onClick={() => setOpenModal(!openModal)}>+</button>
        </div>
    )
}

export { CreateTodoButton }