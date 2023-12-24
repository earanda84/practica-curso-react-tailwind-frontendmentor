import PropTypes from 'prop-types'

const Header = ({children}) => {
  return (
    <header className="container mx-auto px-5 space-y-7 pt-8 mb-10">{children}</header>
  )
}

Header.propTypes = {
  children: PropTypes.node
}

export default Header