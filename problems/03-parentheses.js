/**
 * Строка со скобками считается валидной, если на каждую закрывающую скобку имеется ранее открытая
 * и на каждую ранее открытую имеется закрывающая.
 *
 * Напишите функцию parentheses(value) проверяющую строку со скобками на валидность.
 *
 * Пример:
 *
 * parentheses('') === false
 * parentheses('()()') === true
 * parentheses('(()())') === true
 * parentheses('(()') === false
 * parentheses(')') === false
 *
 * @param {string} value
 * @returns {boolean}
 */
function parentheses(value) {
    if (value === '') return false;

    const stack = [];
    const brackets = {')': '(', ']': '[', '}': '{'};

    for(let char of value){
        if (char === '(' || char === '[' || char === '{'){
            stack.push(char);
        } 
        else if (char === ')' || char === ']' || char === '}'){
            if(stack.length === 0 || stack.pop() !== brackets[char]){
                return false;
            }
        }
    }

    return stack.length === 0;
}

console.log(parentheses('(()'));
console.log(parentheses('()()'));

module.exports = parentheses;
