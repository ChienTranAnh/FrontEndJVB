import React, {ChangeEvent, FormEvent} from 'react';
import {Todo} from "../Interface/Todo";
import {TodoListState} from "../Interface/TodoListState";

class TodoApp extends React.Component<{}, TodoListState> {
    state: TodoListState = {
        todos: [],
        newTodo: ''
    };

    handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
        this.setState({newTodo: event.target.value});
    };

    formSubmitNewTodo = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();

        if (this.state.newTodo.trim() === '') {
            return (
                alert('TodoApp empty!')
            );
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

        console.log('New todo!');
    };

    completeTodo = (id: number): void => {
        this.setState((prevState) => ({
            todos: prevState.todos.map((todo) =>
                todo.id === id ? {...todo, completed: !todo.completed} : todo
            ),
        }));
        console.log('TodoApp Done!');
    };

    removeTodo = (id: number): void => {
        this.setState((prevState) => ({
            todos: prevState.todos.filter((todo) => todo.id !== id),
        }));
        console.log('TodoApp removed!');
    };

    render() {
        console.log('Render bao nhieu lan nao?');
        return (
            <div className="App">
                <h1>Todo</h1>
                <form onSubmit={this.formSubmitNewTodo}>
                    <input
                        type="text"
                        value={this.state.newTodo}
                        onChange={this.handleInputChange}
                        placeholder="Add a new todo"
                    />
                    <button type="submit">Add</button>
                </form>
                <div className="container">
                    <table>
                        <tbody>
                        {this.state.todos.map((todo) => (
                            <tr key={todo.id} className="App-link">
                                <td>
                                    <input
                                        type="checkbox"
                                        checked={todo.completed}
                                        onChange={() => this.completeTodo(todo.id)}
                                    />
                                </td>
                                <td>
                                <span style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
                                    {todo.text}
                                </span>
                                </td>
                                <td>
                                <span onClick={() => this.removeTodo(todo.id)}>
                                    <img src="./images/remove-trash.svg" alt="remove-bold.svg"/>
                                </span>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    };
}

export default TodoApp;
