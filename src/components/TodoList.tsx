import { ITodo } from '../types/data'

import { TodoItem } from './TodoItem'

interface ItodoList {
    items: ITodo[],
    removeTodo: (id: number) => void,
    toggleTodo: (id: number) => void,
}

export const TodoList: React.FC<ItodoList> = ({ items, removeTodo, toggleTodo }) => {
    return <div>
        {items.map(todo => {
            return <TodoItem
                key={todo.id}
                {...todo}
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
            />
        })}
    </div>
}
