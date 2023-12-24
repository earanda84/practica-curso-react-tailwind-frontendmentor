// import Button from "./Button"
import PropTypes from 'prop-types'
import ButtonFilterTodos from "./ButtonFilterTodos"

const SectionItems = ({handleFilter}) => {

    return (
        <section className="container mx-auto px-5 mb-3 transition-all duration-1000 ease-in-out md:max-w-xl md:mx-auto lg:max-w-2xl">
            <div className="flex justify-center gap-4 bg-white dark:bg-gray-800 rounded-md p-4 transition-all duration-1000 ease-in-out">
                <ButtonFilterTodos className="text-gray-700 hover:text-blue-600 dark:text-gray-400 " label="All"  handleFilter={handleFilter} />
                <ButtonFilterTodos className={`text-gray-700 hover:text-blue-600 dark:text-gray-400`} label="Active" handleFilter={handleFilter}/>
                <ButtonFilterTodos className="text-gray-700 hover:text-blue-600 dark:text-gray-400" label="Completed" handleFilter={handleFilter}/>
            </div>
        </section>
    )
}

SectionItems.propTypes = {
    handleFilter: PropTypes.func
}

export default SectionItems