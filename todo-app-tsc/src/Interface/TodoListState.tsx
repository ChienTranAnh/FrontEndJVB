import React from "react";
import {Todo} from "./Todo";

export interface TodoListState {
    todos: Todo[];
    newTodo: string;
}
