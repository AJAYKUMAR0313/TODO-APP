/* eslint-disable react/prop-types */
export function Todos({todos}){

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