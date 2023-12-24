import PropTypes from "prop-types";

const BackgroundImg = ({children}) => {
  return (
    <div className="bg-mobile-light dark:bg-mobile-dark bg-contain bg-no-repeat bg-gray-200 dark:bg-gray-700 md:bg-desktop-light md:dark:bg-desktop-dark min-h-screen transition-all duration-1000 ease-in-out">{children}</div>
  )
}

BackgroundImg.propTypes = {
  children: PropTypes.node
}

export default BackgroundImg