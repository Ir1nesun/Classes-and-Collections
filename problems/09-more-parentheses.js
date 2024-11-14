/**
 * Ранее мы уже решали задачу валидации последовательности скобок в строке.
 *
 * На этот раз напишите функцию parentheses(value) валидирующую строку с несколькими типами скобок.
 *
 * Пример:
 *
 * parentheses('<>') === true
 * parentheses('<}') === false
 *
 * @param {string} value – строка из набора символов (, ), {, }, <, >.
 * @returns {boolean}
 */
function parentheses(value) {
    if (value === '') return false;
    
    const stack = [];
    const brackets = {
        '(': ')',
        '{': '}',
        '[': ']',
        '<': '>'
    };

    for(let char of value){
        if(brackets[char]){
            stack.push(char);
        } else {
            const lastBracket = stack.pop();
            if (brackets[lastBracket] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

console.log(parentheses('<>'));
console.log(parentheses('<}'));

module.exports = parentheses;
