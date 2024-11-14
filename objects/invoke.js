/**

 * Описание задачи: Напишите функцию, которая вызывает метод массива на заданный путь объекта.
 * Ожидаемый результат: ({ a: { b: [1, 2, 3] } }, 'a.b', splice, [1, 2]) => [2, 3]
 * @param {Object} object
 * @param {String} path - путь в объекте
 * @param {String} func - метод массива для исполнения
 * @param {Array} [args] - список аргументов
 * @returns {?}
 */

const invoke = (object, path, func, args) => {
    const pathParts = path.split('.');
    let current = object;

    for (let part of pathParts) {
        if (current[part] !== undefined) {
            current = current[part];
        } else {
            throw new Error(`Path not found: ${path}`);
        }
    }

    if (typeof func === 'string' && typeof current[func] === 'function') {
        return current[func](...args); 
    } else {
        throw new Error(`The method "${func}" is not a valid function on the object at path "${path}".`);
    }
};

const data = {a: {b: [1, 2, 3]}}
console.log(invoke(data, 'a.b', 'splice', [1, 2])); // [2, 3]

module.exports = invoke;
