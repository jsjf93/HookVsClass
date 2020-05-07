import * as React from 'react';
import { useState } from 'react';
import './todolist.scss';

function TodoList() {
    const initialList = ['Write a todo list', 'Complete the todo list'];
    const [todos, setTodos] = useState(initialList);

    function handleClick(todo) {
        setTodos(todos.filter(t => t !== todo));
    }

    return (
        <div className="todoList">
            <h1>Hooks example:</h1>
            {todos.map((todo, index) => (
                <div 
                    key={index}
                    onClick={() => handleClick(todo)}
                >
                    {todo}
                </div>
            ))}
        </div>
    );
}

export default TodoList;