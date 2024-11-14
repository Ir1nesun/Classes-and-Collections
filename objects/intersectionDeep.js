/**

 * Описание задачи: Напишите функцию, которая глубоко находит пересечения объектов и возвращает объект пересечений.
 * Ожидаемый результат: ({ a: 1, b: { c: 3 } }, { c: 1, b: { c: 3 } }) => { b: { c: 3 } }
 * @param {Object} firstObject - объект любых значений
 * @param {Object} secondObject - объект любых значений
 * @returns {Object}
 */

const intersectionDeep = (firstObject, secondObject) => {
    if (typeof firstObject !== 'object' || firstObject === null || 
        typeof secondObject !== 'object' || secondObject === null) {
        return {};
    }

    const result = {};

    for (let key in firstObject) {
        if (firstObject.hasOwnProperty(key) && secondObject.hasOwnProperty(key)) {
            if (typeof firstObject[key] === 'object' && 
                typeof secondObject[key] === 'object' && 
                firstObject[key] !== null && 
                secondObject[key] !== null) {

                const nestedIntersection = intersectionDeep(firstObject[key], secondObject[key]);
                if (Object.keys(nestedIntersection).length > 0) {
                    result[key] = nestedIntersection;
                }
            } else if (firstObject[key] === secondObject[key]) {
                result[key] = firstObject[key];
            }
        }
    }

    return result;

};

const data = {a: 1, b: {c: 3}};
const data2 = {c: 1, b: {c: 3}};
console.log(intersectionDeep(data, data2)); // { b: { c: 3 } }

module.exports = intersectionDeep;
