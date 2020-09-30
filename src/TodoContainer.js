import React from 'react';
import "./TodoContainer.css";
import Todo from "./Todo";

const TodoContainer = ({todos}) => {
    return (
        <div className="todoContainer">
            {todos.map(todo => (
                <Todo title= { todo } />
            ))}
        </div>
    );
}

export default TodoContainer;
