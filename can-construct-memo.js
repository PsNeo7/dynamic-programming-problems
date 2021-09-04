const canConstructMemo = (target, subStrings, memo = {}) => {
    if (target in memo) return memo[target]
    if (target == "") return true
    for (const subString of subStrings) {
        if (target.startsWith(subString)) {
            if (canConstructMemo(target.slice(subString.length), subStrings, memo)) {
                memo[target] = true
                return memo[target]
            }
        }
    }
    memo[target] = false
    return memo[target]
}

console.log(canConstructMemo("abcdef", ["ab", "abc", "cd", "def", "abcd"]));//true
console.log(canConstructMemo("skateboard", ["bo", "rd", "ate", "ska", "boar", "sk"]));//false
console.log(canConstructMemo("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]));//true
console.log(canConstructMemo("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["eee", "e", "eeee", "eee", "eeeeeee", "eeeeeeee", "eeeeeeeeeeeeeeeeee",]));//false