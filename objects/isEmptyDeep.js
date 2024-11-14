/**

 * Описание задачи: Напишите функцию, которая делает глубокую проверку на пустоту объекта.
 * Пустые значения: '', null, NaN, undefined, [], {}
 * Ожидаемый результат: ({}) => true,
 ({ a: { b: undefined } }) => true,
 ({ a: { b: [] } }) => true
 * @param {Object} object - любой объект
 * @returns {boolean}
 */

const isEmptyDeep = (object) => {
    if (object === '' || object === null || object === undefined || Number.isNaN(object)){
        return true;
    }

    if(Array.isArray(object)){
        if(object.length === 0){
            return true;
        }

        return object.every(isEmptyDeep);
    }

    if (typeof object === 'object'){
        const keys = Object.keys(object);

        if(keys.length === 0){
            return true;
        }

        return keys.every((key) => isEmptyDeep(object[key]));
    }

    return false;
};

const data = {a: {b: undefined}};
const data2 = {a: {b: 1}};
console.log(isEmptyDeep(data)); // true
console.log(isEmptyDeep(data2)); // false
