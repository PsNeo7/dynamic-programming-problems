const canConstructTab = (target, subStrings) => {
    table = Array(target.length + 1).fill(false)
    table[0] = true
    table.forEach((_, index) => {
        if (table[index] == true) {
            for (const subString of subStrings) {
                if (target.slice(index, index + subString.length) == subString) {
                    table[index + subString.length] = true
                }
            }
        }
    });
    return table[target.length]
}



console.log(canConstructTab("abcdef", ["ab", "abc", "cd", "def", "abcd"]));//true
console.log(canConstructTab("skateboard", ["bo", "rd", "ate", "ska", "boar", "sk"]));//false
console.log(canConstructTab("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]));//true
console.log(canConstructTab("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["eee", "e", "eeee", "eee", "eeeeeee", "eeeeeeee", "eeeeeeeeeeeeeeeeee",]));//false