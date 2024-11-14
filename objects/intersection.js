/**

 * Описание задачи: Напишите функцию, которая поверхностно находит пересечения объектов и возвращает объект пересечений.
 * Ожидаемый результат: ({ a: 1, b: 2 }, { c: 1, b: 2 }) => { b: 2 }
 * @param {Object<string | number>} firstObject - объект с примитивными значениями
 * @param {Object<string | number>} secondObject - объект с примитивными значениями
 * @returns {Object}
 */

const intersection = (firstObject, secondObject) => {
    if (typeof firstObject !== 'object' || firstObject === null || 
        typeof secondObject !== 'object' || secondObject === null) {
        return {};
    }

    const result = {};
    
    for (const key in firstObject) {
        if (
            firstObject.hasOwnProperty(key) &&
            secondObject.hasOwnProperty(key) &&
            firstObject[key] === secondObject[key]
        ) {
            result[key] = firstObject[key];
        }
    }

    return result;
};

const data = {a: 1, b: 2};
const data2 = {c: 1, b: 2};
console.log(intersection(data, data2)); // { b: 2 }

module.exports = intersection;
