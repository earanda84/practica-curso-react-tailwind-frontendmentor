import Button from "./Button"
import {  IoCloseOutline } from "react-icons/io5";
import { MdRadioButtonUnchecked  } from "react-icons/md";
import { IoIosCheckmarkCircleOutline   } from "react-icons/io";

import PropTypes from 'prop-types'

const Article = ({id, title, completed,removeTodo, updateTodo}) => {

  return (
    <article className="flex gap-4 py-4 items-center border-b border-gray-300 dark:border-gray-600 px-4 text-gray-400 dark:bg-gray-800 rounded-md">
        <Button 
          className='flex-none'
          icon={!completed ? <MdRadioButtonUnchecked className="text-2xl"/> : <IoIosCheckmarkCircleOutline className="text-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full fill-current" color="white"/>}
          updateTodo={updateTodo}
          id={id}
          action='update'
        />
        <p className={`flex-grow font-medium ${completed ? 'line-through' : ''}`}>{title}</p>
        <Button 
          className="flex-none" 
          icon={<IoCloseOutline className="text-3xl"/>}
          removeTodo={removeTodo}
          id={id}
          action='delete'
        />
    </article>
  )
}

Article.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  completed: PropTypes.bool,
  removeTodo: PropTypes.func,
  updateTodo: PropTypes.func,
}
export default Article