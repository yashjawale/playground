import { useState, type FormEvent } from 'react'
import TextInput from './common/TextInput'
import solveNQueens from '../../pages/nqueens/nqueens-algorithm'

interface ChessBoardProps {
  solution: string[]
}

const ChessBoard = ({ solution }: ChessBoardProps) => {
  const n = solution.length

  return (
    <div className="flex flex-col">
      {solution.map((row, index) => {
        return (
          <div key={index} className="flex">
            {row.split('').map((cell, index) => (
              <div
                key={index}
                className="w-8 h-8 flex items-center justify-center"
              >
                {cell === 'Q' ? (
                  <div className="w-7 h-7 bg-primary opacity-80 rounded"></div>
                ) : (
                  <div className="w-7 h-7 bg-foreground opacity-20 rounded"></div>
                )}
              </div>
            ))}
          </div>
        )
      })}
    </div>
  )
}

const NQueensSolver = () => {
  const [solutionPresent, setSolutionPresent] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [solutions, setSolutions] = useState<string[][]>([]) // Change the type of solutions state

  const [input, setInput] = useState<string>('4') // Change the type of input state

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Add the type for the event parameter
    e.preventDefault()
    setIsProcessing(true)
    const n: number = parseInt(input.toString())
    const solutions = solveNQueens(n)
    setSolutions(solutions)
    setSolutionPresent(solutions.length > 0)
    setIsProcessing(false)

    console.log(solutions)
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
                value={input}
                onChange={(e) => setInput(e.target.value)}
                label="Enter N"
                identifier="input"
                placeholder="4"
                max={10}
                note={'Value of N limited to 10 to prevent performance issues'}
              />{' '}
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
              <div key={index} className="flex flex-col gap-4">
                <p className="font-light text-xl">Solution {index + 1}</p>
                <ChessBoard solution={solution} />
              </div>
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
