import PropTypes from "prop-types";

const BackgroundImg = ({children}) => {
  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] bg-contain bg-no-repeat bg-gray-200 dark:bg-gray-700 min-h-screen transition-all duration-1000 ease-in-out md:bg-[url('./assets/images/bg-desktop-light.jpg')] md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')]">{children}</div>
  )
}

BackgroundImg.propTypes = {
  children: PropTypes.node
}

export default BackgroundImg