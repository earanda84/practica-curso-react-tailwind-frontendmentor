import Button from "./Button"

const Section = () => {
  return (
    <section className="flex items-center justify-between p-4">
      <span className="text-gray-400">5 items left</span>
      <Button className="text-gray-400" label='Clear Completed'/>
    </section>
  )
}
export default Section