import PropTypes from 'prop-types'

const Header = ({children}) => {
  return (
    <header className="container mx-auto px-5 space-y-7 pt-8 mb-3 border-4 border-red-600">{children}</header>
  )
}

Header.propTypes = {
  children: PropTypes.node
}

export default Header