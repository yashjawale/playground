import { useState } from 'react'

const TextInput = ({ label, identifier, value, onChange, placeholder }) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={identifier}>{label}</label>
      <input
        type="number"
        id={identifier}
        name={identifier}
        className="border-[1px] border-foreground rounded bg-basecolor px-2 py-1"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  )
}

const NQueensSolver = () => {
  const [solutionPresent, setSolutionPresent] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [solutions, setSolutions] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    // setIsProcessing(true)
    // setSolutions([])
    // if (param1.length === 0 || param2.length === 0 || param3.length === 0) {
    //   setSolutionPresent(false)
    //   setIsProcessing(false)
    //   return
    // }
    // setSolutionPresent(true)
    // const input = {
    //   param1: param1,
    //   param2: param2,
    //   param3: param3,
    // }

    // let keyelements = new Set()
    // Object.keys(input).forEach((string) => {
    //   for (let i = 0; i < input[string].length; i++) {
    //     keyelements.add(input[string][i])
    //   }
    // })

    // const combinations = generateCombinations(Array.from(keyelements))

    // const solutionsArray = []

    // for (let i = 0; i < combinations.length; i++) {
    //   if (checkSolution(input, combinations[i])) {
    //     solutionsArray.push(combinations[i])
    //   }
    // }

    // if (solutionsArray.length === 0) {
    //   setSolutionPresent(false)
    // }

    // setIsProcessing(false)
    // setSolutions(solutionsArray)
  }

  return (
    <>
      <section className="container mx-auto px-6 sm:px-20 2xl:px-16 pb-12">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-5/12">
            <h2 className="text-3xl md:text-5xl font-thin">Enter value of N</h2>
          </div>
          <div className="md:w-7/12">
            <form onSubmit={handleSubmit}>
              <TextInput
                // value={param1}
                // onChange={handleChange}
                label="Enter N"
                identifier="param1"
                placeholder="4"
              />{' '}
              <button className="bg-foreground text-background px-4 py-3 rounded-lg uppercase text-sm font-bold hover:opacity-80 mt-4">
                Solve
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 sm:px-20 2xl:px-16 flex flex-col gap-3 mb-8">
        <h2 className="text-3xl md:text-5xl font-thin">Solutions</h2>
        {solutions.length > 0 && (
          <p className="font-bold text-xl">
            {solutions.length} solutions found
          </p>
        )}
        <div className="flex flex-wrap gap-6 py-4">
          {solutionPresent &&
            solutions.map((solution, index) => (
              <Table key={index} output={solution} />
            ))}
        </div>
        {!solutionPresent && (
          <p className="text-2xl md:text-3xl text-center font-thin">
            No Solutions found for given input
          </p>
        )}
        {isProcessing && (
          <p className="text-2xl md:text-3xl text-center font-thin">
            Processing...
          </p>
        )}
      </section>
    </>
  )
}

export default NQueensSolver
