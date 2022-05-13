import { ITodo } from '../types/data'

interface ITodoItem extends ITodo {
    removeTodo: (id: number) => void
    toggleTodo: (id: number) => void
}

export const TodoItem: React.FC<ITodoItem> = ({ id, title, complete, removeTodo, toggleTodo }) => {
    return <div>
        <input type="checkbox" checked={complete} onClick={() => toggleTodo(id)} />
        <span
            style={{
                display: 'inline-block',
                margin: '0px 10px',
            }}
        >{title}</span>
        <button
            onClick={() => removeTodo(id)}
            style={{
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: 'red',
            }}
        >x</button>
    </div>
}
