/**
 * Сара пишет сложные клиентские приложения на ангуляре. Поэтому ей часто приходится создавать и модифицировать сервисы.
 * Сервисы могут использовать другие сервисы. Однако они не должны быть взаимозависимыми.
 *
 * Напишите функцию которая определяет есть ли цикличная зависимость между сервисами в проекте Сары.
 * Зависимости описаны объектом, ключи которого являются именами сервисов, а значения—это сервисы-зависимости.
 *
 * Пример:
 *
 * hasCircularDependency({
 *  http: [],
 *  apiClient: ['http'],
 * }) === false
 *
 * hasCircularDependency({
 *  http: ['dogsApi'],
 *  apiClient: ['http'],
 *  dogsApi: ['apiClient'],
 * }) === true
 *
 * @param {Object.<string, Array.<string>>} servicesMap
 * @returns {boolean}
 */
function hasCircularDependency(servicesMap) {
    const visited = new Set();
    const recStack = new Set();

    function dfs(service) {
        if (recStack.has(service)) {
            return true;
        }

        if (visited.has(service)) {
            return false;
        }

        visited.add(service);
        recStack.add(service);

        for (const dependency of servicesMap[service] || []) {
            if (dfs(dependency)) {
                return true; 
            }
        }

        recStack.delete(service);

        return false;
    }

    for (const service in servicesMap) {
        if (dfs(service)) {
            return true; 
        }
    }

    return false;
}

console.log(hasCircularDependency({
    http: [],
    apiClient: ['http'],
}));

console.log(hasCircularDependency({
    http: ['dogsApi'],
    apiClient: ['http'],
    dogsApi: ['apiClient'],
}));

module.exports = hasCircularDependency;
