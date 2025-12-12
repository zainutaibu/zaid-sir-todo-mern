import React, { useEffect, useState } from 'react'
import { Nav } from '../components/Nav'
import { useDarkTheme } from 'react-theme-snap';
import TodoDisplay from '../components/TodoDisplay';
import TodoForm from '../components/TodoForm';
import { axiosInstance } from '../lib/AxiosInstance.js';

export const Home = () => {
    const {themeClasses,isDark,toggleTheme}=useDarkTheme();


    //states liye hai save karne k liye

    const [todos,setTodos]=useState([]);

  const getTodos = async()=>{
    try{
const res =await axiosInstance.get('/get');
 const data =res.data?.data;
 console.log(data)
 setTodos(data)
    }catch(error){
      console.log(error);
    }
  }
  useEffect(()=>{
  
  getTodos();
},[])


  return (
    <div  className={`min-h-screen ${themeClasses.Home}`}>
        <Nav isDark={isDark} toggleTheme={toggleTheme}/>
        <TodoDisplay todos={todos}/>
        <TodoForm todos={todos} getTodos={getTodos}/>
    </div>
  )
}
