/**
 * Лена планирует свой двухнедельный отпуск.
 *
 * Напишите функцию vacation(date) вычисляющую день следующий за отпуском Лены
 *
 * Примечание: вместо ручного подсчета используй класс Date и его методы
 *
 * Пример:
 *
 * vacation('01.01.2020') === '15.01.2020'
 * vacation('27.01.2020') === '10.02.2020'
 *
 * @param {string} date
 * @returns {string}
 */
function vacation(date) {
    const [day, month, year] = date.split('.').map(Number);
    const startDate = new Date(year, month - 1, day);
    startDate.setDate(startDate.getDate() + 14);

    const nextDay = String(startDate.getDate()).padStart(2, '0');
    const nextMonth = String(startDate.getMonth() + 1).padStart(2, '0');
    const nextYear = startDate.getFullYear();

    return `${nextDay}.${nextMonth}.${nextYear}`;
}

console.log(vacation('01.01.2020'));

module.exports = vacation;
