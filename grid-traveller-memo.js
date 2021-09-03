const gridTravellerMemo = (m, n, seen = {}) => {
    const key = m + ' ' + n

    if (key in seen) return seen[key]
    if (m == 1 && n == 1) return 1
    if (m == 0 || n == 0) return 0

    seen[key] = gridTravellerMemo(m - 1, n, seen) + gridTravellerMemo(m, n - 1, seen)
    return seen[key]
}

console.log(gridTravellerMemo(1, 1))
console.log(gridTravellerMemo(2, 3))
console.log(gridTravellerMemo(3, 2))
console.log(gridTravellerMemo(3, 3))
console.log(gridTravellerMemo(18, 18))