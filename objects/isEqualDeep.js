/**

 * Описание задачи: Напишите функцию, которая делает глубокое сравнение объектов.
 * Ожидаемый результат: True если объекты идентичны ({ a: 1, b: { c: 1 } }, { a: 1, b: { c: 1 } }) => true
 * @param {Object} firstObj - Объект с любыми значениями
 * @param {Object} secondObj - Объект с любыми значениями
 * @returns {boolean}
 */
 const isEqualDeep = (firstObj, secondObj) => {
    if(firstObj === secondObj) return true ;

    if (firstObj === null || secondObj === null || typeof firstObj !== 'object' || typeof secondObj !== 'object'){
        return false;
    }

    const keys1 = Object.keys(firstObj);
    const keys2 = Object.keys(secondObj);

    if(keys1.length !== keys2.length){
        return false;
    }

    for(let key of keys1){
        if(!keys2.includes(key) || !isEqualDeep(firstObj[key], secondObj[key])){
            return false;
        }
    }

    return true;
};

const data = {a: 1, b: {c: 1}};
const data2 = {a: 1, b: {c: 1}};
const data3 = {a: 1, b: {c: 2}};
console.log(isEqualDeep(data, data2)); // true
console.log(isEqualDeep(data, data3)); // false
