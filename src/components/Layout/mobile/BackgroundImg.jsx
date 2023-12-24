import PropTypes from "prop-types";

const BackgroundImg = ({children}) => {
  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] bg-contain bg-no-repeat bg-gray-200 dark:bg-gray-700 min-h-screen">{children}</div>
  )
}

BackgroundImg.propTypes = {
  children: PropTypes.node
}

export default BackgroundImg