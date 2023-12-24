import PropTypes from 'prop-types'

const ButtonFilterTodos = ({filter, type, label, className, handleFilter}) => {

    return (
    <button type={type} className={`${className}`} onClick={() => handleFilter(filter)}>{label}</button>
  )
}

ButtonFilterTodos.propTypes = {
    todos: PropTypes.array,
    type: PropTypes.oneOf(['button', 'submit']),
    label: PropTypes.string,
    className: PropTypes.string,
    handleFilter: PropTypes.func,
    filter: PropTypes.string
}
export default ButtonFilterTodos