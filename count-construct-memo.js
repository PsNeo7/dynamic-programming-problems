const countConstructMemo = (target, subStrings, memo = {}) => {
    if (target in memo) return memo[target]
    if (target == "") return 1
    let totalCount = 0
    for (const subString of subStrings) {
        if (target.startsWith(subString)) {
            totalCount += countConstructMemo(target.slice(subString.length), subStrings, memo)
        }
    }
    memo[target] = totalCount
    return memo[target]
}

console.log(countConstructMemo("purple", ["purp", "p", "ur", "le", "purpl"]));//2
console.log(countConstructMemo("abcdef", ["ab", "abc", "cd", "def", "abcd"]));//1
console.log(countConstructMemo("skateboard", ["bo", "rd", "ate", "ska", "boar", "sk"]));//0
console.log(countConstructMemo("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]));//4
console.log(countConstructMemo("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["eee", "e", "eeee", "eee", "eeeeeee", "eeeeeeee", "eeeeeeeeeeeeeeeeee",]));//0