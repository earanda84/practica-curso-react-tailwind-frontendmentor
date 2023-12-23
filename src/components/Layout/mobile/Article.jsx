import Button from "./Button"
import {  IoCloseOutline } from "react-icons/io5";
import PropTypes from 'prop-types'

const Article = ({title}) => {
  return (
    <article className="flex gap-4 py-4 items-center border-b border-gray-300 px-4 text-gray-400">
        <Button 
          className="inline-block h-5 w-5 rounded-full border-2 flex-none" 
        />
        <p className="flex-grow">{title}</p>
        <Button 
          className="flex-none" 
          icon={<IoCloseOutline className="text-2xl"/>}
        />
    </article>
  )
}

Article.propTypes = {
  title: PropTypes.string
}
export default Article