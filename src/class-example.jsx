import * as React from 'react';

class TodoList2 extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            todos: ['Write a todo list', 'Complete the todo list']
        }
    }

    handleClick(todo) {
        this.setState({ todos: this.state.todos.filter(t => t !== todo) });
    }

    render() {
        return (
            <div>
                <h1>Class example:</h1>
                {this.state.todos.map((todo, index) => (
                    <div 
                        key={index}
                        onClick={() => this.handleClick(todo)}
                    >
                        {todo}
                    </div>
                ))}
            </div>
        );
    }
}

export default TodoList2;