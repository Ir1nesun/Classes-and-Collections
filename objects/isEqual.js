/**

 * Описание задачи: Напишите функцию, которая поверхностно сравнивает два объекта.
 * Ожидаемый результат: True если объекты идентичны, false если объекты разные ({ a: 1, b: 1 }, { a: 1, b: 1 }) => true
 * @param {Object<string | number>} firstObject - объект с примитивами
 * @param {Object<string | number>} secondObject - объект с примитивами
 * @returns {boolean}
 */

 const isEqual = (firstObject, secondObject) => {
    if (firstObject === secondObject) return true;

    if (typeof firstObject !== 'object' || firstObject === null || typeof secondObject !== 'object' || secondObject === null){
        return false;
    }

    const keys1 = Object.keys(firstObject);
    const keys2 = Object.keys(secondObject);

    if (keys1.length !== keys2.length){
        return false;
    }

    for (let key of keys1){
        if (firstObject[key] !== secondObject[key]){
            return false;
        }
    }

    return true;
};

const data = {a: 1, b: 1};
const data2 = {a: 1, b: 1};
const data3 = {a: 1, b: 2};
console.log(isEqual(data, data2)); // true
console.log(isEqual(data, data3)); // false
