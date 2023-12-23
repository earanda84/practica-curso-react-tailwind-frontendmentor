import PropTypes from "prop-types";

const BackgroundImg = ({children}) => {
  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat bg-gray-200 min-h-screen">{children}</div>
  )
}

BackgroundImg.propTypes = {
  children: PropTypes.node
}

export default BackgroundImg