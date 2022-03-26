import { useState } from "react";

export default function ToDoList() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState<string[]>([]);
  const onChange = (event:React.ChangeEvent<HTMLInputElement>) => setToDo(event.target.value);
  const onSubmit = (event:React.FormEvent)=> {
    event.preventDefault();
    if (toDo=== "") {
      return;
    } 
    setToDo("");
    setToDos((currentList)=> [toDo, ...currentList])
  }
  console.log(toDos);
  return (
    <div>
      <h1>My To Do List({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input 
        onChange={onChange} 
        value={toDo} 
        type="text" 
        placeholder="Write your to do..." />
        <button>Add To Do</button>
      </form>
      <hr/>
      <ul>
      {toDos.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
      
  </div>
  );
}