import React from "react";
import "./TodoForm.css"
import { TodoContext } from "../TodoContext/TodoContext.js"

function TodoForm () {
    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext)

    const [newTodoValue,  setNewTodoValue] = React.useState("")

    const onSubmit = (event) => {
        event.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(false)
    }

    const onCancel = () => {
        setOpenModal(false)
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }

    return (
        <form onSubmit={(onSubmit)}>
            <label className="containerTitle-Form">
                <p>Escribe tu nuevo TODO</p>
            </label>
            <textarea
                placeholder="Cortar Cebolla para el almuerzo"
                value = {newTodoValue}
                onChange={onChange}
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="submit"
                    className="TodoForm-style TodoForm-container--add"
                >Añadir</button>
                <button
                    type="button"
                    onClick={onCancel}
                    className="TodoForm-style TodoForm-container--cancel"
                >Canelar</button>
            </div>
        </form>
    )
}

export { TodoForm }





