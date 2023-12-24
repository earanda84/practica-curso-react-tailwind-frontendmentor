import PropTypes from 'prop-types'
// import Button from "./Button"
import ButtonClearTodos from './ButtonClearTodos'

const SectionMain = ({ uncompletedTodos, clearTodos }) => {
  return (
    <section className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-md mb-8 transition-all duration-1000 ease-in-out">
      <span className={`text-gray-400 font-medium`}>{`${uncompletedTodos} items left`}`</span>
      <div className='space-x-3'>
        <ButtonClearTodos className="text-gray-400 font-medium" label={'Clear Completed'} clearTodos={clearTodos} action='clear' />
      </div>
    </section>
  )
}

SectionMain.propTypes = {
  uncompletedTodos: PropTypes.number,
  clearTodos: PropTypes.func,
  todos: PropTypes.array
}
export default SectionMain