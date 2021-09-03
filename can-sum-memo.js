const canSumMemo=(target, coins, memo = {})=>{
    if(target in memo) return memo[target]
    if(target==0) return true
    if(target < 0) return false
    memo[target] = true

    for (const coin of coins) {
        const currentDiff = target - coin
        
        if(canSumMemo(currentDiff, coins, memo) == true){
            memo[target] = true
            return true
        }
        
    }
    memo[target] = false
    return false
}

console.log(canSumMemo(7, [2,3]));//T
console.log(canSumMemo(7, [5,3,4,7]));//T
console.log(canSumMemo(7, [2,4]));//F
console.log(canSumMemo(8, [2,3,5]));//T
console.log(canSumMemo(300, [7, 14]));//F



