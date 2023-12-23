import PropTypes from 'prop-types'

const Main = ({children}) => {
  return (
    <>
        <main className="container mx-auto mb-3 px-5">
            <div className="bg-white rounded-md">
                {children}
            </div>
        </main>
    </>
  )
}

Main.propTypes = {
    children: PropTypes.node
}

export default Main