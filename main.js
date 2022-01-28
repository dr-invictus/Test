// String 
// toLowerCase - Преобразует символы в строке в нижний регистр.
const a = 'Hello js'
console.log(a.toLowerCase()); // hello js
// toUpperCase - Преобразует символы в строке в верхний регистр.
const b = 'Hello js'
console.log(b.toUpperCase()); // HELLO JS
// concat - Объединяет две или более строки и возвращает одну строку.
const c = 'Hello'
console.log(c.concat(' js')); // Hello js
console.log(c.concat(' W', 'o', 'r', 'l', 'd')); // 'Hello World'
// split - Разбивает строку в массив по указанному разделителю, которым может быть подстрока или регулярное выражение. Вторым параметром можно указать ограничитель.
const d = 'Hello Java'
 // Получаем каждый символ
console.log(d.split('')); // ['H', 'e', 'l', 'l', 'o', ' ', 'J', 'a', 'v', 'a']
// Получаем каждое слово из строки
console.log(d.split(' ')); // ['Hello', 'Java']
// Устанавливаем ограничитель
console.log(d.split(' ', 1)); // ['Hello']
// repeat - Принимает в качестве параметра число и повторяет строку указанное количество раз.
const e = 'Hello js '
console.log(e.repeat(3)); // Hello js Hello js Hello js 
// charAt - Возвращает символ по указанному индексу.
const f = 'Hello js'
console.log(f.charAt()); // H
// includes - Проверяет, содержит ли строка указанную подстроку. Возвращает значение true или false. Вторым параметром можно указать позицию в строке, с которой следует начать поиск.
const g = 'Hello js'
console.log(g.includes('js')); // true 
console.log(g.includes('Hello', 1)); // false 
// indexOf - Возвращает индекс первого найденного вхождения указанного значения. Поиск ведётся от начала до конца строки. Если совпадений нет, возвращает -1. Вторым параметром можно передать позицию, с которой следует начать поиск.
const h = 'Hello js'
console.log(h.indexOf('o')); // 4
console.log(h.indexOf('o', 5)); // -1
// endsWith - Проверяет, заканчивается ли строка символами, заданными первым параметром. Возвращает true или false. Есть второй необязательный параметр — ограничитель по диапазону поиска. По умолчанию он равен длине строки.
const i = 'Hello js'
console.log(i.endsWith('js')); // true
console.log(i.endsWith('js', 1)); // false
// search - Проверяет, есть ли в строке указанное значение или регулярное выражение и возвращает индекс начала совпадения.
const j = 'Hello js'
console.log (j.search('js')); // 6
// slice - Извлекает часть строки и возвращает новую строку. Обязательный параметр — начало извлечения. Вторым параметром можно установить границу (по умолчанию — до конца строки).
const k = 'Hello js'
console.log(k.slice(10)); //  script
console.log(k.slice(0, 10)); // Hello java
// Отрицательные значения тоже работают
console.log(k.slice(-6)); // script
console.log(k.slice(-6, -2)); // scri
// substring - Извлекает символы из строки между двумя указанными индексами.
const l = 'Hello Java Script'
console.log(l.substring(5, 2)); // llo
// substr - Извлекает часть строки указанной длины.
const m = 'Hello Java Script'
console.log(m.substr(6, 4)); // Java
// replace - Ищет в строке указанное значение или регулярное выражение и возвращает новую строку, в которой выполнена замена на второй параметр.
const n = 'Hello Java Script'
console.log(n.replace('Hello', 'hi')); // hi Java Script
// replaceAll - Даёт такой же результат, как метод replace() с глобальным флагом g. Заменяет все найденные совпадения другой строкой или переданной функцией.
const o = 'Hello Java Script'
console.log(o.replaceAll('Hi', 'Script')); // Hello Java Script
// padEnd - Добавляет в конце отступы, пока строка не достигнет длины, заданной первым параметром. Вторым параметром можно указать другой символ вместо пробела.
const p = 'Hello Java Script'
console.log(p.padEnd(20, '*')); // Hello Java Script***
// padStart - Добавляет в начале отступы, пока строка не достигнет длины, заданной первым параметром. Вторым параметром можно указать другой символ вместо пробела.
const q = 'Hello Java Script'
console.log(q.padStart(20, '*')); // ***Hello Java Script
// trim - Обрезает пробелы с обоих концов строки.
const r = '    Hello Java Script   '
console.log(r.trim()); // 'Hello Java Script'
console.log(r.trimEnd()); // '    Hello Java Script'
console.log(r.trimStart()); // 'Hello Java Script   '
// charCodeAt - Возвращает числовое значение Юникода по указанному индексу.
const s = 'H'
console.log(s.charCodeAt()); // 72
// fromCharCode - Преобразует числовые значения Юникода в читаемые символы.
const t = ' js'
console.log(t, String.fromCharCode(72, 101, 108, 108, 111)); //  js Hello

// Второе задание https://inc4.net/what-can-cedefi-bring-to-the-crypto-industry/
//Домен 
const url = new URL('https://inc4.net/what-can-cedefi-bring-to-the-crypto-industry/')
url.hostname//inc4.net
// Статья
const url = new URL('https://inc4.net/what-can-cedefi-bring-to-the-crypto-industry/')
url.pathname ///what-can-cedefi-bring-to-the-crypto-industry/
//Убираем дефисы
var sen = "/what-can-cedefi-bring-to-the-crypto-industry/";
var newSen = sen.match(/[^_\W]+/g).join(' ');
console.log(newSen);//what can cedefi bring to the crypto industry
//Каждая первая буква заглавная
let string = 'what can cedefi bring to the crypto industry';
console.log(
string.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ')
);//What Can Cedefi Bring To The Crypto Industry
