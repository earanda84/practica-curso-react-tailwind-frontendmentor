import { IoMoonSharp, IoSunnyOutline } from "react-icons/io5"
import Button from "./Button"
import { useEffect, useState } from "react"

const initalStateDarkMode = localStorage.getItem('theme') === 'dark';

const TitleHeader = () => {
    const [darkMode, setDarkMode ] = useState(initalStateDarkMode)

    // EN VEZ DE USAR EL DOM DE JAVASCRIPT, EN REACT USAR EL useRef()
    // const ref = useRef(null);
    
    useEffect(() => {
        
        if(darkMode){
            document.documentElement.classList.add('dark')
            // Lo que indica TailwindCSS
            // localStorage.theme = 'dark'
            // Lo que se debe hacer de manera tradicional
            localStorage.setItem('theme', 'dark')
        }else{
            document.documentElement.classList.remove('dark')
            // localStorage.theme = 'light'
            localStorage.setItem('theme', 'light')
        }
    },[darkMode])

    const handleClickToggleTheme = () => {
        setDarkMode(!darkMode)
    }

  return (
    <div
        className="flex items-center justify-between  transition-all duration-1000 ease-in-out" 
    >
        <h1
            className="text-white text-2xl font-semibold tracking-[0.3em] uppercase">
                todo
        </h1>
        <Button handleClickToggleTheme={() => handleClickToggleTheme()}  icon={darkMode ? <IoSunnyOutline className="text-2xl text-gray-100 transition-all duration-1000 ease-in-out" /> : <IoMoonSharp className="text-2xl transition-all duration-1000 ease-in-out" style={{ color:'#1249'}} />}/>
    </div>
  )
}

export default TitleHeader

{/* <button>
            <IoMoonSharp  
                className="text-2xl" 
                color="white" 
            />
        </button> */}