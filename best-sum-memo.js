const bestSumMemo = (target, coins, memo = {}) => {
    if (target in memo) return memo[target]
    if (target == 0) return []
    if (target < 0) return null
    let shortestCombination = null
    coins.forEach(coin => {
        const currentDiff = target - coin
        const diffCombination = bestSumMemo(currentDiff, coins, memo)
        if (diffCombination != null) {
            const currentCombination = [...diffCombination, coin]
            if (shortestCombination === null || currentCombination.length < shortestCombination.length) {
                shortestCombination = currentCombination
            }
        }
    });

    memo[target] = shortestCombination
    return shortestCombination
}

console.log(bestSumMemo(7, [5, 3, 4, 7]));//[7]
console.log(bestSumMemo(8, [2, 3, 5]));//[3, 5]
console.log(bestSumMemo(8, [1, 4, 5]));//[4, 4]
console.log(bestSumMemo(100, [1, 2, 5, 25]));//[25,25,25,25]
