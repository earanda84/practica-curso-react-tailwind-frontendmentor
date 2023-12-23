import Button from "./Button"


const SectionItems = () => {
  return (
    <section className="container mx-auto px-5 mb-3">
        <div className="flex justify-center gap-4 bg-white rounded-md p-4">
            <Button className="text-blue-600" label="All" />
            <Button className="hover:text-blue-600" label="Active" />
            <Button className="hover:text-blue-600" label="Completed" />
        </div>
    </section>
  )
}

export default SectionItems