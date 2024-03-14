import React from "react";
import { TodoCounter } from "../TodoCounter/TodoCounter.js"
import { TodoSearch } from "../TodoSearch/TodoSearch.js"
import { TodoList } from "../TodoList/TodoList.js"
import { TodoItem } from "../TodoItem/TodoItem.js"
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton.js"
import { ContainerMain } from "../ContainerMain/ContainerMain.js"
import { TodosLoading } from "../TodosLoading/TodosLoading.js"
import { TodosError } from "../TodosError/TodosError.js"
import { EmptyTodos } from "../EmptyTodos/EmptyTodos.js"
import { TodoContext } from "../TodoContext/TodoContext.js";
import { Modal } from "../Modal/Modal.js";
import { TodoForm } from "../TodoForm/TodoForm.js"


function AppUI () {
  const {
    searchedTodos,
    completeTodo,
    deleteTodo,
    error,
    loading,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext)
  return (
      <>
      <ContainerMain>
        <TodoCounter />
        <TodoSearch />

                      <TodoList>
                      {loading && <TodosLoading />}
                      {error && <TodosError />}
                      {(!loading && !searchedTodos.length === 1) && <EmptyTodos />}
                      {searchedTodos.map((todo) => (
                        <TodoItem
                        key = {todo.text}
                        text = {todo.text}
                        completed = {todo.completed}
                        onComplete = {() => completeTodo(todo.text)}
                        onDelete = {() => deleteTodo(todo.text)}
                        />
                        ))}
                    </TodoList>

        <CreateTodoButton 
          setOpenModal={setOpenModal}
        />
      </ContainerMain>

      {openModal && (
              <Modal>
                <TodoForm />
              </Modal>
      )}
      </>
    );
}

export { AppUI }