import { useState } from "react";
import "./Todo.css"
export default function Todo() {
       const [task,setTask] = useState("");
       const [tasks , setTasks]  = useState([]);

       const add = () => {
        if(task.trim() ===  "") return ;
        setTasks([...tasks,{text: task , complete: false}]);
        setTask("");
       };

       const deletetask = (Index) => {
        const newtasks = tasks.filter((_,i)=> i != Index);
        setTasks(newtasks);
       };
     const togglechange = (Index) => {
        const update = [...tasks];
        update[Index].complete = !update[Index].complete;
        setTasks(update);
     };


 return (

    <>
    <div className="container">
        <h1>todo-list</h1>
        <div className="input-box">

        <input type="text" value={task} onChange={(e)=> setTask(e.target.value)} />

       <button className="" onClick={add}>add</button>
</div>
       <ul>
        {  tasks.map((t,Index) => 
        (

            <li key = {Index}>
                
                <span onClick={()=> togglechange(Index)} className={t.complete?"done":""}>{t.text}</span>
                 <button className="" onClick={() => deletetask(Index)}> ✖ </button>
            </li>



        ))

        }
        
       </ul> 

      
               

    </div>
    </>
 );

}