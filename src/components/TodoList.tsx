import { ITodo } from '../types/data'

import { TodoItem } from './TodoItem'

interface ItodoList {
    items: ITodo[],
    removeTodo: (id: number) => void,
    toggleTodo: (id: number) => void,
}

export const TodoList: React.FC<ItodoList> = ({ items, removeTodo, toggleTodo }) => {
    return (
        <div style={{
            padding: '10px',
            border: '.5px solid #000',
        }}>
            {items.map(todo => {
                return <TodoItem
                    key={todo.id}
                    {...todo}
                    removeTodo={removeTodo}
                    toggleTodo={toggleTodo}
                />
            })}
        </div>
    )
}
