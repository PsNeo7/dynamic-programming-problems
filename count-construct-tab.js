const countConstructTab = (target, subStrings) => {
    table = Array(target.length + 1).fill(0)
    table[0] = 1
    table.forEach((_, index) => {
        for (const subString of subStrings) {
            if (target.slice(index).startsWith(subString)) {
                if (index + subString.length < table.length) table[index + subString.length] += table[index]
            }
        }
    });
    return table[target.length]
}

console.log(countConstructTab("purple", ["purp", "p", "ur", "le", "purpl"]));//2
console.log(countConstructTab("abcdef", ["ab", "abc", "cd", "def", "abcd"]));//1
console.log(countConstructTab("skateboard", ["bo", "rd", "ate", "ska", "boar", "sk"]));//0
console.log(countConstructTab("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]));//4
console.log(countConstructTab("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["eee", "e", "eeee", "eee", "eeeeeee", "eeeeeeee", "eeeeeeeeeeeeeeeeee",]));//0