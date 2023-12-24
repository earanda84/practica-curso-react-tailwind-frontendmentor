import PropTypes from 'prop-types'

const Main = ({children}) => {
  return (
    <>
        <main className="container mx-auto mb-3 px-5 md:max-w-xl md:mx-auto lg:max-w-2xl">
            {/* <div className="bg-white rounded-md"> */}
                {children}
            {/* </div> */}
        </main>
    </>
  )
}

Main.propTypes = {
    children: PropTypes.node
}

export default Main