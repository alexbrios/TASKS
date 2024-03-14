import React from "react"
import "./TodoSearch.css"
import { TodoContext } from "../TodoContext/TodoContext"

function TodoSearch () {

    const {
        searchValue,
        setSearchValue
    } = React.useContext(TodoContext)

    return (
        <div className="container-search">
            <input
                placeholder="Search"
                value = {searchValue}
                onChange={(event) => {
                    setSearchValue(event.target.value)
                }}
            ></input>
        </div>
    )
}

export { TodoSearch }