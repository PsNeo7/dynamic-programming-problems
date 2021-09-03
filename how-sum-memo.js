const howSumMemo = (target, coins, memo = {}) => {
    if (target in memo) return memo[target]
    if (target === 0) return []
    if (target < 0) return null
    for (const coin of coins) {
        const remainder = target - coin
        const remainderResult = howSumMemo(remainder, coins, memo)
        if (remainderResult != null) {
            memo[target] = [...remainderResult, coin]
            return memo[target]
        }
    }

    memo[target] = null
    return memo[target]
}

console.log(howSumMemo(7, [2, 3]));//[3,2,2]
console.log(howSumMemo(7, [5, 3, 4, 7]));//[4,3]
console.log(howSumMemo(7, [2, 4]));//null
console.log(howSumMemo(8, [2, 3, 5]));//[2,2,2,2]
console.log(howSumMemo(300, [7, 14]));//null