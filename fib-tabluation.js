const fibTab = (num) => {
    const table = Array(num + 1).fill(0)
    table[1] = 1;
    for (let index = 0; index < num; index++) {
        table[index + 1] += table[index]
        table[index + 2] += table[index]
    }

    return table[num]
}

console.log(fibTab(2))
console.log(fibTab(8))
console.log(fibTab(50))
console.log(fibTab(100))