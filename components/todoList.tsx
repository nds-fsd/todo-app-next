'use client';
import {useState} from "react";

const TodoList = () => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: "Learn React",
            completed: true
        },
        {
            id: 2,
            title: "Learn Next.js",
            completed: false
        },
        {
            id: 3,
            title: "Build a project",
            completed: false
        }
    ]);
    return (<>{todos.map((todo) => (
        <div key={todo.title} className="flex items-center justify-between w-full p-4 my-2 bg-gray-100 rounded-md">
            <span>{todo.title}</span>
            <button className="px-2 py-1 bg-red-500 text-white rounded-md">Delete</button>
        </div>
    ))}</>)
}

export default TodoList
