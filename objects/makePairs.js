/**
 * Описание задачи: Напишите функцию, которая возвращает вложенный массив вида `[[key, value], [key, value]]`.
 * Ожидаемый результат: ({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]
 * @param {Object} object - любой объект для трансформации
 * @returns {Array} - вложенный массив
 */

 const makePairs = (object) => {
    return Object.entries(object);
};

const data = { a: 1, b: 2 };
console.log(makePairs(data)); // [['a', 1], ['b', 2]]
