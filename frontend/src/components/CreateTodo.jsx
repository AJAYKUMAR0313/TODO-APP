export function CreateTodo(){
    return <div>
        <input style={{
            padding:10,
            margin:10
        }
        } type="text" placeholder="title"></input><br></br>
        <input style={{
            padding:20,
            margin:20
        }
        } type="description" placeholder="description"></input><br></br>
        <button>Add a Todo</button>
    </div>
}