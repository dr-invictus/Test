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
//   0        1          2                              3 
//[https:] {/}[]{/} [inc4.net] {/} [what-can-cedefi-bring-to-the-crypto-industry] {/}
var str = 'https://inc4.net/what-can-cedefi-bring-to-the-crypto-industry/';
var arr = str.split('/');
var domain = str.split('/')[2]; // https://inc4.net
var sentence = arr[3]; //what-can-cedefi-bring-to-the-crypto-industry
var splitted = sentence.replaceAll('-', ' ');
var result = splitted.split(' ').map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
console.log(domain);
console.log(sentence);
console.log(splitted);
console.log(result);



// number
// Метод toString() возвращает число в виде строки.
let ax = 123;
ax.toString();          // возвращает 123 из переменной x
(123).toString();      // возвращает 123 из литерала 123
(100 + 23).toString(); // возвращает 123 из выражения 100 + 23
// Метод toExponential() возвращает строку с округленным числом и записанным с использованием экспоненциальной записи .
let bx = 9.656;
bx.toExponential(2);    // возвращает 9.66e+0
bx.toExponential(4);    // возвращает 9.6560e+0
bx.toExponential(6);    // возвращает 9.656000e+0
// Метод toFixed() возвращает строку с числом, записанным с указанным количеством десятичных знаков:
let cx = 9.656;
cx.toFixed(0);          // возвращает 10
cx.toFixed(2);          // возвращает 9.66
cx.toFixed(4);          // возвращает 9.6560
cx.toFixed(6);          // возвращает 9.656000
// Метод toPrecision() возвращает строку с числом, записанным с указанной длиной:
let dx = 9.656;
dx.toPrecision();       // возвращает 9.656
dx.toPrecision(2);      // возвращает 9.7
dx.toPrecision(4);      // возвращает 9.656
dx.toPrecision(6);      // возвращает 9.65600
// Метод valueOf() возвращает число как число.
let fx = 123;
fx.valueOf();           // возвращает 123 из переменной x
(123).valueOf();       // возвращает 123 из литерала 123
(100 + 23).valueOf();  // возвращает 123 из выражения 100 + 23
// Метод Number() может использоваться для преобразования переменных JavaScript в числа:
Number(true);          // возвращает 1
Number(false);         // возвращает 0
Number("10");          // возвращает 10
Number("  10");        // возвращает 10
Number("10  ");        // возвращает 10
Number(" 10  ");       // возвращает 10
Number("10.33");       // возвращает 10.33
Number("10,33");       // возвращает NaN
Number("10 33");       // возвращает NaN
Number("John");        // возвращает NaN
// Метод Number() также может преобразовать дату в число:
Number(new Date("2017-09-30")); // возвращает 1506729600000
// Метод parseInt() анализирует строку и возвращает целое число. Разрешены пробелы. Возвращается только первое число:
parseInt("-10");        // возвращает -10
parseInt("-10.33");     // возвращает -10
parseInt("10");         // возвращает 10
parseInt("10.33");      // возвращает 10
parseInt("10 20 30");   // возвращает 10
parseInt("10 years");   // возвращает 10
parseInt("years 10");   // возвращает NaN
// Метод parseFloat() анализирует строку и возвращает число. Разрешены пробелы. Возвращается только первое число:
parseFloat("10");       // возвращает 10
parseFloat("10.33");    // возвращает 10.33
parseFloat("10 20 30"); // возвращает 10
parseFloat("10 years"); // возвращает 10
parseFloat("years 10"); // возвращает NaN
// Свойство MAX_VALUE возвращает максимально возможное число в JavaScript.
let gx = Number.MAX_VALUE;
console.log(gx); // 1.7976931348623157e+308
// Свойство MIN_VALUE возвращает наименьшее возможное число в JavaScript.
let hx = Number.MIN_VALUE;
console.log(hx); // 5e-324
// Метод Math.asin() возвращает арксинус числа (в радианах)
Math.asin(-2);  // NaN
Math.asin(-1);  // -1.5707963267948966 (-pi/2)
Math.asin(0);   // 0
Math.asin(0.5); // 0.5235987755982989
Math.asin(1);   // 1.570796326794897 (pi/2)
Math.asin(2);   // NaN
// Метод Math.abs() возвращает абсолютное значение числа.
Math.abs('-1');     // 1
Math.abs(-2);       // 2
Math.abs(null);     // 0
Math.abs('');       // 0
Math.abs([]);       // 0
Math.abs([2]);      // 2
Math.abs([1,2]);    // NaN
Math.abs({});       // NaN
Math.abs('string'); // NaN
Math.abs();         // NaN
// Метод Math.acos() возвращает арккосинус числа (в радианах)
Math.acos(-2);  // NaN
Math.acos(-1);  // 3.141592653589793
Math.acos(0);   // 1.5707963267948966
Math.acos(0.5); // 1.0471975511965979
Math.acos(1);   // 0
Math.acos(2);   // NaN
// Метод Math.atan() возвращает арктангенс числа (в радианах)
Math.atan(1);  // 0.7853981633974483
Math.atan(0);  // 0
// Метод Math.atan2() возвращает арктангенс от частного своих аргументов.
Math.atan2(90, 15); // 1.4056476493802699
Math.atan2(15, 90); // 0.16514867741462683
// Метод Math.ceil() - округление вверх. Округляет аргумент до ближайшего большего целого.
Math.ceil(.95);    // 1
Math.ceil(4);      // 4
Math.ceil(7.004);  // 8
Math.ceil(-0.95);  // -0
Math.ceil(-4);     // -4
Math.ceil(-7.004); // -7
// Метод Math.max() возвращает наибольшее из нуля или более чисел.
Math.max(10, 20);   //  20
Math.max(-10, -20); // -10
Math.max(-10, 20);  //  20
// Метод Math.min() возвращает наименьшее из нуля или более чисел.
var xxxx = 10, y = -20;
var zzzz = Math.min(xxxx, zzzz);