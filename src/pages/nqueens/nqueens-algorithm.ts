function solveNQueens(n: number) {
  const col = new Set()
  const posDiag = new Set()
  const negDiag = new Set()
  const res: Array<Array<string>> = []
  const board = Array.from({ length: n }, () => Array(n).fill('_'))

  function backtrack(r: number) {
    if (r === n) {
      const copy = board.map((row) => row.join(''))
      res.push(copy)
      return
    }

    for (let c = 0; c < n; c++) {
      if (col.has(c) || posDiag.has(r + c) || negDiag.has(r - c)) {
        continue
      }
      col.add(c)
      posDiag.add(r + c)
      negDiag.add(r - c)
      board[r][c] = 'Q'

      backtrack(r + 1)

      col.delete(c)
      posDiag.delete(r + c)
      negDiag.delete(r - c)
      board[r][c] = '_'
    }
  }

  backtrack(0)
  return res
}

export default solveNQueens
