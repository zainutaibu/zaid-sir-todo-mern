import { ThemeProvider } from 'react-theme-snap'
import { Home } from './page/Home'
import {Toaster}from 'react-hot-toast'


function App() {
  const token ={
    light:{
      Home:"text-orange bg-white",
    },
    dark:{
    Home:"text-beige bg-black",
    }
  }

  return (
    <>
    <ThemeProvider tokens={token} storageKey='theme'>
      <Toaster position='top-center'/> 
   <Home/>
    </ThemeProvider>
    </>
  )
}

export default App
