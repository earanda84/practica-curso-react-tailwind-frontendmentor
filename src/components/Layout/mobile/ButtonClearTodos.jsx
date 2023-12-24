import PropTypes from 'prop-types'

const ButtonClearTodos = ({label, type, clearTodos, className}) => {
  return (
    <button type={type} className={className} onClick={()=> clearTodos()}>{label}</button>
  )
}

ButtonClearTodos.propTypes = {
    type: PropTypes.oneOf(['submit', 'button']),
    clearTodos: PropTypes.func,
    className: PropTypes.string,
    label: PropTypes.string,
}

export default ButtonClearTodos