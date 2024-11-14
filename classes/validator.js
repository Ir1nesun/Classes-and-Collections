/**
 * Реализуйте класс Validator, который будет проверять строки.
 * К примеру, у него будет метод isEmail параметром принимает строку и проверяет, является ли она корректным емейлом или нет.
 * Если является - возвращает true, если не является - то false.
 * Кроме того, класс будет иметь следующие методы: метод isDomain для проверки домена,
 * метод isDate для проверки даты и метод isPhone для проверки телефона:
 */
class Validator {
    
    isEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email || '');
    }

    isDomain(domain) {
        const domainRegex = /^(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;
        return domainRegex.test(domain || '');
    }

    isDate(date) {
        const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.(\d{4})$/;
        if (!dateRegex.test(date || '')) return false;

        const [day, month, year] = date.split('.').map(Number);
        const parsedDate = new Date(year, month - 1, day);

        return (
            parsedDate.getFullYear() === year &&
            parsedDate.getMonth() === month - 1 &&
            parsedDate.getDate() === day
        );
    }

    isPhone(phone) {
        const phoneRegex = /^(\+7|8)?[\s-]?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/;
        return phoneRegex.test(phone || '');
    }   
}

const validator = new Validator();

console.log(validator.isEmail('phphtml@mail.ru'));
console.log(validator.isDomain('phphtml.net'));
console.log(validator.isDate('12.05.2020'));
console.log(validator.isPhone('+375 (29) 817-68-92')); 

module.exports = Validator;
