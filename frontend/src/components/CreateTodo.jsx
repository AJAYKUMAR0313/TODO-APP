import { useState } from 'react'
export function CreateTodo(){
    //react-query
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");
    return <div>
        <input id="title" style={{
            padding:10,
            margin:10
        }
        } type="text" placeholder="title" onChange={function(e){
            const value=e.target.value;
            setTitle(value)
        }}></input><br></br>
        <input id="description" style={{
            padding:20,
            margin:20
        }
        } type="description" placeholder="description" onChange={function(e){
            const value=e.target.value;
            setDescription(value)
        }}></input><br></br>
        <button onClick={()=>{
            fetch("http://localhost:3000/todos",{
                method:"POST",
                body:JSON.stringify({
                    title:title,
                    description:description,
                    completed:false

                }),
                header:{
                    "content-Type":"application/json"
                }
            }).then(async function(){
                alert("Todo Added");
            })
        }}>Add a Todo</button>
    </div>
}