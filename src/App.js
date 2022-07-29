import React, { useState } from 'react';
 import "./style.css";
  import Todo from './Todo';
function App() {
   const [text,setText]=useState("");
   const [todos,setTodos]=useState([]);
    const addTodo=()=>{
        setTodos((prev)=>{
           return [...prev,text];
        });
        setText("");
    }
     
    const delTodo=(id)=>{
          setTodos((prev)=>{
                return prev.filter((arrelement,index)=>{
                  return index!==id;
                });
          });
          
    };
           
  return (
        <>
           <div className='main_div'>
           
             <div className='center_div'>
              <h1>ToDoList</h1>
             <input type="text" value={text} className='input' placeholder="write your note" maxLength={20} onChange={(e)=>setText(e.target.value)}/>
             <button onClick={addTodo} className='add_btn'>+</button>
               <ol>
                {
                  todos.map((value,index)=>{
                     return <Todo
                     key={index} 
                     id={index}
                     values={value}
                     del={delTodo}
                     /> 
                     
                     
                 })
              }
              </ol>

             </div>
             
           </div>


        </>
  )
}

export default App