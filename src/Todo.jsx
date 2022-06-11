import React from 'react'

const Todo = ({ todo, toggleTodo }) => {

    const Todoclick = () => {
        toggleTodo(todo.id);
    };
    return (

        <div>
            <label>
                <input type="checkbox" checked={todo.completed} readOnly onChange={Todoclick} />
            </label>
            {todo.name}
        </div>
    )
}

export default Todo