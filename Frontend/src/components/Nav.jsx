import React from "react"
import { ThemeToggle } from "react-theme-snap"
export const Nav = ({isDark,toggleTheme}) => {
  return (
    <div className="w-full flex mx-auto items-center justify-between p-4">
       <span className="font-bold text-2xl">XERO 
         <span className="dark:text-orange-300 text-beige">TODO</span>  
         </span>
       
      
           <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
    </div>
  )
}
