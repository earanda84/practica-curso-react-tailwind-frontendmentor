import { IoMoonSharp, IoSunnyOutline } from "react-icons/io5"
import Button from "./Button"
import { useEffect, useState } from "react"


const TitleHeader = () => {
    const [darkMode, setDarkMode ] = useState(false)
    
    useEffect(() => {
        if(darkMode){
            document.documentElement.classList.add('dark')
            localStorage.theme = 'dark'
        }else{
            document.documentElement.classList.remove('dark')
            localStorage.theme = 'light'
        }
    },[darkMode])

    const handleClickToggleTheme = () => {
        setDarkMode(!darkMode)
    }

  return (
    <div
        className="flex items-center justify-between"
    >
        <h1
            className="text-white text-2xl font-semibold tracking-[0.3em] uppercase">
                todo
        </h1>
        <Button handleClickToggleTheme={() => handleClickToggleTheme()}  icon={!darkMode ? <IoSunnyOutline className="text-2xl text-gray-100" /> : <IoMoonSharp className="text-2xl " style={{ color:'#1249'}} />}/>
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