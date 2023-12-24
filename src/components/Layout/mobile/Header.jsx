import PropTypes from 'prop-types'

const Header = ({children}) => {
  return (
    <header className="container mx-auto px-5 space-y-7 pt-8 mb-10 transition-all duration-1000 ease-in-out md:max-w-xl md:mx-auto lg:max-w-2xl">{children}</header>
  )
}

Header.propTypes = {
  children: PropTypes.node
}

export default Header