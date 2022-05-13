import React from 'react'

import { ITodo } from '../types/data'

interface INewTodo {
    todos: ITodo[],
    setTodos: ([id, title, complete]: ITodo[]) => void,
}

export const NewTodo: React.FC<INewTodo> = ({ setTodos, todos }) => {

    const [value, setValue] = React.useState('')
    const inputRef = React.useRef<HTMLInputElement>(null)

    const handleChangeInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value)
    }

    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === 'Enter') {
            addTodo()
        }
    }

    React.useEffect(() => {
        inputRef.current?.focus()
    }, [])

    const addTodo = () => {
        if (value) {
            setTodos([...todos, {
                id: Date.now(),
                title: value,
                complete: false,
            }])
            setValue('')
        }
    }

    return (
        <div>
            <input
                type="text"
                value={value}
                ref={inputRef}
                onChange={handleChangeInput}
                onKeyDown={handleKeyDown}
            />
            <button onClick={addTodo}>add</button>
        </div>
    )
}
