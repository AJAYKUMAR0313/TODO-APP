import { useState } from 'react'
export function Todos(){
    const [todos,setTodos]=useState([])
   fetch("http://localhost:3000/todos").then(async function(res){
    const json=await res.json();
    setTodos(json.todos);
  })
    return <div>
        {todos.map(function(todo,index){
            return <div key={index}>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button>{todo.completed==true ? "completed":"Mark as Complete"}</button>
            </div>
            })}
    </div>
}