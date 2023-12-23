import { IoMoonSharp } from "react-icons/io5"
import Button from "./Button"

const TitleHeader = () => {
  return (
    <div
        className="flex items-center justify-between"
    >
        <h1
            className="text-white text-2xl font-semibold tracking-[0.3em] uppercase">
                todo
        </h1>
        <Button icon={<IoMoonSharp className="text-2xl" color="white" />}/>
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