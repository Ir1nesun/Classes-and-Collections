/**
 * Hex и RGB - текстовые форматы для представления цвета в коде.
 *
 * Напишите функцию hexToRgb(color) конвертирующую цвет закодированный в формате HEX
 * в RGB кодированную строку.
 *
 * Пример:
 *
 * hexToRgb('#000000') === 'rgb(0, 0, 0)'
 * hexToRgb('#fff') === 'rgb(255, 255, 255)'
 * hexToRgb('#800080') === 'rgb(128, 0, 128)'
 *
 * @param {string} color
 * @returns {string}
 */
function hexToRgb(color) {
    color = color.replace('#', '');

    if (color.length === 3){
        color = color.split('').map(char => char + char).join('');
    }

    const r = parseInt(color.slice(0, 2), 16);
    const g = parseInt(color.slice(2, 4), 16);
    const b = parseInt(color.slice(4, 6), 16);

    return `rgb(${r}, ${g}, ${b})`;
}

console.log(hexToRgb('#000000'));    
console.log(hexToRgb('#fff'));       
console.log(hexToRgb('#800080'));  

module.exports = hexToRgb;
