const bestSumTab = (target, coins) => {
    table = Array(target + 1).fill(null)
    table[0] = []

    table.forEach((value, index) => {
        if (value != null) {
            coins.forEach(coin => {
                if (index + coin < table.length) {
                    combinationSum = [...value, coin]
                    if (table[index + coin] == null || combinationSum.length < table[index + coin].length) table[index + coin] = combinationSum
                }
            });
        }
    });
    // console.log(table);
    return table[target]
}


console.log(bestSumTab(7, [5, 3, 4, 7]));//[7]
console.log(bestSumTab(8, [2, 3, 5]));//[3, 5]
console.log(bestSumTab(8, [1, 4, 5]));//[4, 4]
console.log(bestSumTab(100, [1, 2, 5, 25]));//[25,25,25,25]
