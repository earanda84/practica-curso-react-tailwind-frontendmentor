import Swal from 'sweetalert2'
import { useState } from 'react';
import PropTypes from 'prop-types'
import Button from "./Button";

const FormHeader = ({todoCreate}) => {
  const [todo, setTodo] = useState({
    title: ''
  });

  const {title} = todo;

  // Captura de los datos del input
  const handleSubmit = (e) => {
    e.preventDefault();

    // Evalúa input vacío
    if(!title.trim()){
      return Swal.fire({
        icon: 'warning',
        title: 'El campo no debe estar vacío',
        text: 'Debes completar el campo para crear una nueva tarea',
        timer: 2000
      })
    }
    // Crea la nueva tarea
    todoCreate(title)
    setTodo({
      title: ''
    })
    return Swal.fire({
      icon: 'success',
      title: 'La tarea se ha creado',
      text: `Haz creado la siguiente tarea: ${title}.`,
      timer:3000
    })
  }

  return (
    <div className="mb-5">
        <form 
          className="flex overflow-hidden bg-white rounded-md py-4 items-center gap-4 px-4 dark:bg-gray-800 transition-all duration-1000 ease-in-out"
          onSubmit={ handleSubmit }
        >
            <span 
                className="inline-block h-5 w-7 md:w-6 rounded-full border-2 border-gray-300">
            </span>
            <input
                className="outline-none w-full text-gray-400 bg-transparent dark:bg-gray-800  transition-all duration-1000 ease-in-out"
                type="text" 
                placeholder="Create a new Todo"
                value={title}
                onChange={(e) => setTodo({title: e.target.value})}
            />
            <Button type="submit" label='Agregar' className="text-gray-400 hover:text-blue-400 outline-none" />
        </form>
    </div>
  )
}

FormHeader.propTypes = {
  todoCreate: PropTypes.func
}
export default FormHeader