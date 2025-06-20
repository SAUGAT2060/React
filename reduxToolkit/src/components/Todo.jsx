import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import {removeTodo} from '../features/Todo/todoSlice'
function Todo() {

 const todos = useSelector(state =>state.todos)
 const dispatch = useDispatch()
  return (
  <>
  <div className="text-2xl font-bold mb-4 text-gray-800">Todos</div>
  <ul className="space-y-2">
    {todos.map((todo) => (
      <li
        key={todo.id}
        className="flex justify-between items-center bg-white shadow-md rounded-lg px-4 py-2 hover:bg-gray-50 transition"
      >
        <span className="text-gray-700">{todo.text}</span>
        <button
          onClick={() => dispatch(removeTodo(todo.id))}
          className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600"
        >
          ×
        </button>
      </li>
    ))}
  </ul>
</>

  )
}

export default Todo