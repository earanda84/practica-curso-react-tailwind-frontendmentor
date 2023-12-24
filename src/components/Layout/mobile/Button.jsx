import PropTypes from 'prop-types'

const Button = ({ type, label, icon, className, id, updateTodo, removeTodo, action, handleClickToggleTheme }) => {
  
  const handleActionOnClick = (id, action) => {
    if( action === 'update') {
      updateTodo(id);
    }else if(action === 'delete')  {
      removeTodo(id);
    }
  }

  return (
    <>
        {
            icon ? (<button type={type} className={className} onClick={() => !action ? handleClickToggleTheme() : handleActionOnClick(id, action)}>{icon}</button>) : (<button type={type} className={className}>{label}</button>)
        }
    </>
  )
}

Button.propTypes = {
    type: PropTypes.oneOf(['submit', 'button','reset']),
    label: PropTypes.string,
    icon: PropTypes.node,
    className: PropTypes.string,
    updateTodo: PropTypes.func,
    removeTodo: PropTypes.func,
    id: PropTypes.number,
    action: PropTypes.string,
    handleClickToggleTheme: PropTypes.func
}

export default Button