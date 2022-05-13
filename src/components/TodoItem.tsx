import { ITodo } from '../types/data'

interface ITodoItem extends ITodo {
    removeTodo: (id: number) => void
    toggleTodo: (id: number) => void
}

export const TodoItem: React.FC<ITodoItem> = ({ id, title, complete, removeTodo, toggleTodo }) => {
    return (
        <div style={{
            border: '.5px solid #000',
            marginBottom: '10px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        }}>
            <div>
                <input type="checkbox" checked={complete} onChange={() => toggleTodo(id)} />
                <span style={{
                    display: 'inline-block',
                    margin: '0px 10px',
                }}
                >{title}</span>
            </div>
            <button
                onClick={() => removeTodo(id)}
                style={{
                    background: 'transparent',
                    border: 'none',
                    outline: 'none',
                    color: 'red',
                }}
            >X</button>
        </div>
    )
}
