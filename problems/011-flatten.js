/**
 * Напишите функцию flatten(array) которая делает вложенный массив плоским
 *
 * Пример:
 *
 * flatten([1, [2, 3]]) === [1, 2, 3]
 * flatten([1, [2, [3, 4]]]) === [1, 2, 3, 4]
 *
 * @param {Array.<number|[]>} array
 * @returns {number[]}
 */
function flatten(array) {
    let result = [];

    for (let item of array) {
        if (Array.isArray(item)){
            result = result.concat(flatten(item));
        } else{
            result.push(item);
        }
    }

    return result;
}

console.log(flatten([1, [2, 3]]));        
console.log(flatten([1, [2, [3, 4]]])); 

module.exports = flatten;
