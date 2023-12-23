import PropTypes from 'prop-types'

const Button = ({ type,label, icon, className }) => {
  
  return (
    <>
        {
            icon ? (<button type={type} className={className}>{icon}</button>) : (<button type={type} className={className}>{label}</button>)
        }
    </>
  )
}

Button.propTypes = {
    type: PropTypes.PropTypes.oneOf(['submit', 'button','reset']),
    label: PropTypes.string,
    icon: PropTypes.node,
    className: PropTypes.string
}

export default Button