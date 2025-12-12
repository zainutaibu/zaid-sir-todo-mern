import React, { useState } from 'react'
import {Plus} from 'lucide-react'
import TodoCrad from './TodoCrad'
import toast from 'react-hot-toast'
import { axiosInstance } from '../lib/AxiosInstance'

const TodoForm = ({todos,getTodos}) => {
  const [title,setTitle]=useState("");
//create todo
  const handleCreateTodos = async (e,title)=>{
    e.preventDefault();
    try{
      await axiosInstance.post("/create",{title});
      toast.success("Todo added successfully");
      getTodos();
      setTitle('')
    }catch(error){
      console.log(error);
      toast.error("error adding todos ")
    }
  }
//delete todos 
const handleDeleteTodo= async (id)=>{
  try{
    await axiosInstance.delete(`${id}`);
    getTodos();
    toast.success("todo delete successfully");
  }catch(error){
    toast.error("error deleteing todo")
  }
};

// updatetodo

const handleTodostatus =async (id,status)=>{
  try{
    await axiosInstance.put(`/status/${id}`);
    getTodos();
    toast.success("todo update successfully")
  }catch(error){
    toast.error('error update todo')
  }
};

  return (
    <>
    <form onSubmit={(e)=>{handleCreateTodos(e,title);

    }} className='w-1/3 mx-auto mt-10  flex items-center gap-5 justify-between'>
        
      <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" placeholder='Write Your next tasks'  className='w-full bg-stone-900 rounded-xl p-3 focus:outline-beige'/>
      <button className='size-12 cursor-pointer rounded-full shrink-0 bg-orange text-black flex items-center justify-center '>
        <Plus size={26}/>
      </button>




      </form>
   <div className='w-1/3 mt-10 mx-auto flex flex-col items-center justify-center gap-5'>
    {todos.length ===0 ? (
    <div className="div">No Todos to Show</div>
    ):(
        todos.map((todo,index)=> <TodoCrad handleDeleteTodo={handleDeleteTodo} handleTodostatus={handleTodostatus} todo={todo} key={todo._id}/>)
    )}

</div>
    
    </>
  )
}






export default TodoForm



