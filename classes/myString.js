/**
 * Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(),
 * который параметром принимает строку, а возвращает ее в перевернутом виде, метод ucFirst(),
 * который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной и метод ucWords,
 * который принимает строку и делает заглавной первую букву каждого слова этой строки.
 */

class MyString {
    reverse(string) {
        if (typeof string === 'undefined') return undefined;
        return String(string).split('').reverse().join('');
    }

    ucFirst(string) {
        if (typeof string === 'undefined') return undefined;
        const str = String(string).trimStart(); 
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    ucWords(string) {
        if (typeof string === 'undefined') return undefined;
        return String(string)
            .trim() 
            .split(/\s+/) 
            .map(word => this.ucFirst(word))
            .join(' ');
    }
}

const str = new MyString();

console.log(str.reverse('abcde')); //выведет 'edcba'
console.log(str.ucFirst('abcde')); //выведет 'Abcde'
console.log(str.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde'

module.exports = MyString;
