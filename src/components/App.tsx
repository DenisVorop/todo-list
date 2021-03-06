import React from 'react'

import { ITodo } from '../types/data'

import { NewTodo } from './NewTodo'
import { TodoList } from './TodoList'

export const App: React.FC = () => {

    const [todos, setTodos] = React.useState<ITodo[]>([])

    const removeTodo = (id: number): void => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const toggleTodo = (id: number): void => {
        setTodos(todos.map(todo => {
            if (todo.id !== id) {
                return todo
            }

            return {
                ...todo,
                complete: !todo.complete,
            }
        }))
    }

    return (
        <div style={{
            height: '100vh',
            width: '100vw',
            display: 'flex',
            justifyContent: 'center',
        }}
        >
            <div>
                <h2 style={{ textAlign: 'center' }}>Todo List</h2>
                <NewTodo
                    setTodos={setTodos}
                    todos={todos}
                />
                <TodoList
                    items={todos}
                    removeTodo={removeTodo}
                    toggleTodo={toggleTodo}
                />
            </div>
        </div>
    )
}
