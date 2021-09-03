const gridTravellerTab = (m, n) => {
    table = Array(m + 1)
        .fill()
        .map(() => Array(n + 1).fill(0))
    table[1][1] = 1
    for (let row = 0; row <= m; row++) {
        for (let col = 0; col <= n; col++) {
            const current = table[row][col]
            if (col + 1 <= n) table[row][col + 1] += current
            if (row + 1 <= m) table[row + 1][col] += current
        }
    }
    return table[m][n]
}

console.log(gridTravellerTab(1, 1))
console.log(gridTravellerTab(2, 2))
console.log(gridTravellerTab(2, 3))
console.log(gridTravellerTab(3, 2))
console.log(gridTravellerTab(3, 3))
console.log(gridTravellerTab(18, 18))