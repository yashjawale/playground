import { useState } from 'react'
import TextInput from './common/TextInput'
import solveCryptarithmetic from '../../pages/cryptarithmetic/cryptarithmetic-algorithm'

type Output = { [index: string]: number }

const Table: React.FC<{ output: Output }> = ({ output }) => {
  return (
    <table className="text-foreground border-2">
      <thead className="bg-background">
        <tr className="[&>*]:px-4 [&>*]:py-2">
          <th>Letter</th>
          <th>Digit</th>
        </tr>
      </thead>
      <tbody>
        {[...Object.entries(output)].map(([key, value]) => (
          <tr key={key} className="[&>*]:px-4 [&>*]:py-2">
            <td className="border-2">{key}</td>
            <td className="border-2">{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

const CryptArithmeticSolver: React.FC = () => {
  const [param1, setParam1] = useState('')
  const [param2, setParam2] = useState('')
  const [param3, setParam3] = useState('')

  const [solutionPresent, setSolutionPresent] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [solutions, setSolutions] = useState<Array<Output>>([])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    if (name === 'param1') setParam1(value.toUpperCase())
    if (name === 'param2') setParam2(value.toUpperCase())
    if (name === 'param3') setParam3(value.toUpperCase())
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsProcessing(true)
    setSolutions([])
    if (param1.length === 0 || param2.length === 0 || param3.length === 0) {
      setSolutionPresent(false)
      setIsProcessing(false)
      return
    }
    setSolutionPresent(true)
    const input = {
      param1: param1,
      param2: param2,
      param3: param3,
    }

    let solutionsArray: Array<Output> = solveCryptarithmetic(input)

    if (solutionsArray.length === 0) {
      setSolutionPresent(false)
    }

    setIsProcessing(false)
    setSolutions(solutionsArray)
  }

  return (
    <>
      <section className="container mx-auto px-6 sm:px-20 2xl:px-16 pb-12">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-5/12">
            <h2 className="text-3xl md:text-5xl font-thin">Enter Details</h2>
          </div>
          <div className="md:w-7/12">
            <form onSubmit={handleSubmit}>
              <TextInput
                value={param1}
                onChange={handleChange}
                label="First Term"
                identifier="param1"
                placeholder={'SEND'}
              />{' '}
              +
              <TextInput
                value={param2}
                onChange={handleChange}
                label="Second Term"
                identifier="param2"
                placeholder={'MORE'}
              />{' '}
              =
              <TextInput
                value={param3}
                onChange={handleChange}
                label="Result Term"
                identifier="param3"
                placeholder={'MONEY'}
              />
              <div className="flex flex-wrap md:flex-nowrap items-center gap-2 mt-4">
                <button className="bg-foreground text-background px-4 py-3 rounded-lg uppercase text-sm font-bold hover:opacity-80">
                  Solve
                </button>
                <p className="text-sm text-foreground opacity-60">
                  Computations are performed on your browser. The application
                  may take time to find solution.
                </p>
              </div>
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

export default CryptArithmeticSolver
