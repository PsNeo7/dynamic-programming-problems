const fibMemo = (n, seen = {}) => {
    if (n in seen) return seen[n]
    if (n <= 2) return 1
    seen[n] = fibMemo(n - 1, seen) + fibMemo(n - 2, seen)
    return seen[n]
}

console.log(fibMemo(2))
console.log(fibMemo(8))
console.log(fibMemo(50))
console.log(fibMemo(100))
