
const FormHeader = () => {
  return (
    <>
        <form 
            className="flex overflow-hidden bg-white rounded-md py-4 items-center gap-4 px-4 ">
            <span 
                className="inline-block h-5 w-5 rounded-full border-2">
            </span>
            <input
                className="outline-none w-full text-gray-400"
                type="text" 
                placeholder="Create a new Todo"
            />
        </form>
    </>
  )
}
export default FormHeader