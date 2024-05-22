import { useState } from 'react'

const TextInput = ({ label, identifier, value, onChange, placeholder }) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={identifier}>{label}</label>
      <input
        type="text"
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

const Table = ({ output }) => {
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

// Logical functions
function checkSolution(input, key) {
  let firststring, secondstring, resultstring
  firststring = input.param1
    .split('')
    .map((char) => key[char])
    .join('')
  secondstring = input.param2
    .split('')
    .map((char) => key[char])
    .join('')
  resultstring = input.param3
    .split('')
    .map((char) => key[char])
    .join('')
  return (
    parseInt(firststring) + parseInt(secondstring) === parseInt(resultstring)
  )
}

function generateCombinations(keys) {
  const result = []
  const digits = Array.from({ length: 10 }, (_, i) => i) // [0, 1, 2, ..., 9]
  function permute(arr, l, r) {
    if (l === r) {
      const obj = {}
      for (let i = 0; i < keys.length; i++) {
        obj[keys[i]] = arr[i]
      }
      result.push(obj)
    } else {
      for (let i = l; i <= r; i++) {
        ;[arr[l], arr[i]] = [arr[i], arr[l]] // Swap
        permute(arr, l + 1, r)
        ;[arr[l], arr[i]] = [arr[i], arr[l]] // Swap back
      }
    }
  }
  function generatePermutations(arr, length, start, current) {
    if (current.length === length) {
      permute(current, 0, length - 1)
      return
    }
    for (let i = start; i < arr.length; i++) {
      current.push(arr[i])
      generatePermutations(arr, length, i + 1, current)
      current.pop()
    }
  }

  generatePermutations(digits, keys.length, 0, [])
  return result
}

const CryptArithmeticSolver = () => {
  const [param1, setParam1] = useState('')
  const [param2, setParam2] = useState('')
  const [param3, setParam3] = useState('')

  const [solutionPresent, setSolutionPresent] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [solutions, setSolutions] = useState([])

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'param1') setParam1(value.toUpperCase())
    if (name === 'param2') setParam2(value.toUpperCase())
    if (name === 'param3') setParam3(value.toUpperCase())
  }

  const handleSubmit = (e) => {
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

    let keyelements = new Set()
    Object.keys(input).forEach((string) => {
      for (let i = 0; i < input[string].length; i++) {
        keyelements.add(input[string][i])
      }
    })

    const combinations = generateCombinations(Array.from(keyelements))

    const solutionsArray = []

    for (let i = 0; i < combinations.length; i++) {
      if (checkSolution(input, combinations[i])) {
        solutionsArray.push(combinations[i])
      }
    }

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

export default CryptArithmeticSolver
