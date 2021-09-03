const howSumTab = (target, coins) => {
    table = Array(target + 1).fill(null)
    table[0] = []
    // for (const coin of coins) {
    //     table[coin] = [coin]
    // }
    table.forEach((value, index) => {
        if (value != null) {
            coins.forEach(coin => {
                if (index + coin < table.length)
                    table[index + coin] = [...table[index], coin]
            });
        }
    });
    return table[target]
}

console.log(howSumTab(7, [2, 3]));//[3,2,2]
console.log(howSumTab(7, [5, 3, 4, 7]));//[4,3]
console.log(howSumTab(7, [2, 4]));//null
console.log(howSumTab(8, [2, 3, 5]));//[2,2,2,2]
console.log(howSumTab(300, [7, 14]));//null