const canSumTab = (target, coins)=>{
    table = Array(target+1).fill(false)
    // console.log(table);
    table[0] = true
    // for (const coin in coins) {
    //     table[coin+1] = true
    // }

    table.forEach((_, index) => {
        if(table[index] == true){
            coins.forEach(coin => {
            if(index+coin < table.length) table[index+coin] = true
        });}
    });

    return table[target]
}

console.log(canSumTab(7, [2,3]));//T
console.log(canSumTab(7, [5,3,4,7]));//T
console.log(canSumTab(7, [2,4]));//F
console.log(canSumTab(8, [2,3,5]));//T
console.log(canSumTab(300, [7, 14]));//F