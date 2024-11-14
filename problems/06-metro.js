/**
 * Витя из дома до работы добирается по кольцевой линии метро.
 *
 * Напишите функцию metro(x,y) вычисляющую минимальное количество промежуточных станций
 * (не считая станции посадки и высадки), которые необходимо проехать Вите,
 * если на кольцевой линии 13 станций.
 *
 * Пример:
 *
 * metro(1, 2) === 0
 * metro(1, 3) === 1
 * metro(13, 1) === 0
 * metro(1, 13) === 0
 *
 * @param {number} x – станция посадки
 * @param {number} y - станция высадки
 * @returns {number}
 */
function metro(x, y) {
    const forwardDistance = (y - x - 1 + 13) % 13;
    const backwardDistance = (x - y - 1 + 13) % 13;

    return Math.min(forwardDistance, backwardDistance);
}

console.log(metro(1, 2));    
console.log(metro(1, 3));    
console.log(metro(13, 1));  
console.log(metro(1, 13));

module.exports = metro;
