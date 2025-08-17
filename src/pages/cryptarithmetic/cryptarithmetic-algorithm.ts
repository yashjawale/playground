function checkSolution(
	input: { [index: string]: string },
	key: { [index: string]: number }
): boolean {
	const firststring: string = input.param1
		.split('')
		.map((char: string) => key[char])
		.join('')
	const secondstring: string = input.param2
		.split('')
		.map((char: string) => key[char])
		.join('')
	const resultstring: string = input.param3
		.split('')
		.map((char: string) => key[char])
		.join('')
	return (
		parseInt(firststring) + parseInt(secondstring) === parseInt(resultstring)
	)
}

function generateCombinations(keys: string[]): { [index: string]: number }[] {
	const result: { [index: string]: number }[] = []
	const digits: number[] = Array.from({ length: 10 }, (_, i) => i) // [0, 1, 2, ..., 9]

	function permute(arr: number[], l: number, r: number) {
		if (l === r) {
			const obj: { [index: string]: number } = {}
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

	function generatePermutations(
		arr: number[],
		length: number,
		start: number,
		current: number[]
	) {
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

function solveCryptarithmetic(input: {
	[index: string]: string
}): Array<{ [index: string]: number }> {
	const keyelements: Set<string> = new Set()
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
	return solutionsArray
}

export default solveCryptarithmetic
