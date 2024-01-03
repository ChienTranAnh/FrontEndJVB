import React, {ChangeEvent, FormEvent} from 'react';
import './App.css';

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

interface TodoListState {
    todos: Todo[];
    newTodo: string;
}

class TodoList extends React.Component<{}, TodoListState> {
    state: TodoListState = {
        todos: [],
        newTodo: ''
    };


    handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
        this.setState({newTodo: event.target.value});
    };

    handleFormSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();

        if (this.state.newTodo.trim() === '') {
            return;
        }

        const newTodo: Todo = {
            id: Date.now(),
            text: this.state.newTodo,
            completed: false,
        };

        this.setState((prevState) => ({
            todos: [...prevState.todos, newTodo],
            newTodo: '',
        }));
    };

    handleToggleTodo = (id: number): void => {
        this.setState((prevState) => ({
            todos: prevState.todos.map((todo) =>
                todo.id === id ? {...todo, completed: !todo.completed} : todo
            ),
        }));
    };

    handleRemoveTodo = (id: number): void => {
        this.setState((prevState) => ({
            todos: prevState.todos.filter((todo) => todo.id !== id),
        }));
    };

    render() {
        return (
            <div className="App">
                <h1>Todo List</h1>
                <form onSubmit={this.handleFormSubmit}>
                    <input
                        type="text"
                        value={this.state.newTodo}
                        onChange={this.handleInputChange}
                        placeholder="Add a new todo"
                    />
                    <button type="submit">Add</button>
                </form>
                <ul className="App-header">
                    {this.state.todos.map((todo) => (
                        <li key={todo.id} className="App-link">
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => this.handleToggleTodo(todo.id)}
                            />
                            <span style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
                                {todo.text}
                            </span>
                            <button onClick={() => this.handleRemoveTodo(todo.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default TodoList;
