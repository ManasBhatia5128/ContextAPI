import React, { useState } from 'react'
import { useToDo } from '../contexts';

function TodoForm() {
    const [todo, setTodo] = useState("");
    const {addTodo} = useToDo();

    const add = (e) => {
        e.preventDefault();

        if(!todo) return;

        // addTodo({id: Date.now(), todo: todo, completed: false})// id is not required since it is handled in the defined method, also when key and value are same, you can write key only

        addTodo({todo, completed: false});
        setTodo(""); // setting the todo or the field again back to empty string
    }


    return (
        <form  className="flex">
            <input onSubmit={add}
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm