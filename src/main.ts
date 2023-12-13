import './style.css'
import {login} from './login'
import '@justinribeiro/lite-youtube'
import axios from 'axios'
setTimeout(() => { console.log('log from timeout') }, 0)
console.log('hello world')
console.log(10 / 0, 'sfdsfsd', false)
let h2 = document.querySelector('h2')
// @ts-ignore Игнорировать предупреждения в следующей строке
setTimeout(() => { h2.innerHTML = '<br class="myClass">Safary' }, 3000)
// alert('sdfgsdfds')

async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("готово!"), 1000)
  });

  let result = await promise; // будет ждать, пока промис не выполнится (*)

  console.log(result); // "готово!"
}

f();

// try {
//   fggddfg()
// } catch(e) {
//   setTimeout(() => { console.log(e) }, 3000)
// }

// Этот комментарий занимает всю строку
/* Пример с двумя сообщениями.
Это - многострочный комментарий.
*/
let message = 1
sayHiBye('10', '12')
message = 2 + 3 + 2
const daysInWeek = message
console.log(daysInWeek)

console.log('message =', message)
message = message + 2
console.log('message = message + 2;', 'message =', message)
message += 2
console.log('message += 2;', 'message =', message)

// const x = prompt('Введите число','0')
// const x = +(prompt('Введите число','0') as string)
// const x = parseInt(prompt('Введите число') as string)
// console.log(x)

let num = 10
num = +'15'

// Number
console.log('typeof(15)', typeof (15))
console.log('typeof(NaN)', typeof (NaN))
console.log('typeof(Infinity)', typeof (Infinity))
console.log('typeof(-Infinity)', typeof (-Infinity))
console.log('9007199254740999', 9007199254740999)
// BigInt
console.log('typeof(1234567890123456789012345678901234567890n)', typeof (1234567890123456789012345678901234567890n))

// String
let str = "Прив\"е\"т"
let str2 = 'Одинарные "кавычки" тоже подойдут'
// интерполяция (шаблонная строка)
let phrase = `Обратные 'кавычки' "позволяют" встраивать переменные ${str} ${num*5} `
let phrase2 = `Обратные 'кавычки' "позволяют" встраивать переменные ` + str + ' ' + (num * 5) + ' '
'' // Пустая строка 
// конкатенация (сложение строк)
console.log('phrase+str2', phrase + str2)

// Boolean
true // да, истина, 1
false // нет, ложь, 0

// null
null // «ничего», «пусто» или «значение неизвестно»
console.log(null)

// undefined
undefined // значение не было присвоено

let a
console.log(a)

typeof undefined // "undefined"
typeof 0 // "number"
typeof 10n // "bigint"
typeof true // "boolean"
typeof "foo" // "string"
typeof Symbol("id") // "symbol"
typeof Math // "object"    (1)
typeof null // "object"    (2)
typeof alert // "function" (3)

// let result = confirm('Что есть что?')
// console.log(result) // true или false

console.log('[1,2]', String([1,2]))

console.log(Number("  \n 123  \t ")); // 123
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN
console.log(Number("123z"));      // NaN (ошибка чтения числа на месте символа "z")
console.log(Number(true));        // 1
console.log(Number(false));       // 0

// Значения, которые интуитивно «пустые», вроде 0, пустой строки, null, undefined и NaN, становятся false

// При сложении если хотя бы один операнд является строкой, то второй будет также преобразован в строку

// Сложение и преобразование строк — это особенность бинарного плюса +.Другие арифметические операторы работают только с числами и всегда преобразуют операнды в числа

// оба операнда предварительно преобразованы в числа
console.log(+'2' + +'3'); // 5

// более длинный вариант
console.log( Number('2') + Number('3') ); // 5

let a1 = 1
let b = 2

// Так никто не пишет, но это работает
// let c = 3 - (a1 = b + 1)
// Лучше записать так
a1 = b + 1
let c = 3 - a1

// Присваивание по цепочке (с права на лево)
console.log((a = b = c = 2 + 2))
console.log(a)
console.log(b)
console.log(c)
// Лучше писать так
c = 2 + 2;
b = c;
a = c;

let n = 2;
n += 5; // теперь n = 7 (работает как n = n + 5)
n *= 2; // теперь n = 14 (работает как n = n * 2)


// Инкремент / декремент можно применить только к переменной.Попытка использовать его на значении, типа 5++, приведёт к ошибке

// Постфиксный Инкремент++ увеличивает переменную на 1:
let counter = 2
// counter += 1
counter++        // работает как counter = counter + 1, просто запись короче
console.log(counter) // 3

// Постфиксный Декремент-- уменьшает переменную на 1:

counter = 2

// counter -= 1
counter--       // работает как counter = counter - 1, просто запись короче
console.log(counter) // 1

// Операторы++ и-- могут быть расположены не только после, но и до переменной.

// Когда оператор идёт после переменной — это «постфиксная форма»: counter++.
// «Префиксная форма» — это когда оператор идёт перед переменной: ++counter.

// Префиксная форма возвращает новое значение, в то время как постфиксная форма возвращает старое (до увеличения/уменьшения числа)

// Если результат оператора не используется, а нужно только увеличить/уменьшить переменную, тогда без разницы, какую форму использовать. Мы так и делаем!!!

// Лучше использовать стиль «одна строка – одно действие»:
counter = 1
console.log(2 * counter)
counter++

// Каждое выражение вычисляется отдельно, но возвращается последнее
// Так тоже не делаем
a = (b = 1 + 2, c = 3 + 4)

let s1 = 3
let s2 = 4

console.log('4 > 3', 4 > 3)
console.log('4 < 3', 4 < 3)
console.log('4 == 3', s1 == s2)
console.log('4 != 3', s1 != s2)

console.log('"b" > "a"', "b" > "a")

console.log('номер "0"', "0".charCodeAt(0))
console.log('номер "A"', "A".charCodeAt(0))
console.log('номер "B"', "B".charCodeAt(0))
console.log('номер "a"', "a".charCodeAt(0))
console.log('номер "b"', "b".charCodeAt(0))
console.log('номер "А" (рус)', "А".charCodeAt(0))
console.log('номер "Б"', "Б".charCodeAt(0))

let s3 = 0
let s4 = 0
console.log('null == undefined', null == undefined)
console.log('null === undefined', null === undefined)
// @ts-ignore
console.log('null == 0', null >= 0)

// Операторы сравнения возвращают значения логического типа.
// Строки сравниваются посимвольно в лексикографическом порядке.
// Значения разных типов при сравнении приводятся к числу.Исключением является сравнение с помощью операторов строгого равенства / неравенства.
// Значения null и undefined равны == друг другу и не равны любому другому значению.
// Будьте осторожны при использовании операторов сравнений вроде > и < с переменными, которые могут принимать значения null / undefined.Хорошей идеей будет сделать отдельную проверку на null / undefined.

// PRACTICE_1_1

// Запросите у пользователя число, возведите это число во 2-ю степень и выведите на экран.

// Запросите у пользователя 2 числа и выведите среднее арифметическое этих чисел.

// const x1 = +(prompt('Введите первое число')as string)
// const x2 = +(prompt('Введите второе число')as string)
// alert ((x1+x2)/2)

// Запросите у пользователя длину стороны квадрата и выведите площадь такого квадрата.

// Реализуйте конвертор из километров в мили(пользователь вводит километры, программа выводит мили). 1 км = 0,621371 миль.Это значение укажите в коде как константу.

// alert(km*0.621371)

// Реализуйте калькулятор.Пользователь вводит два числа, а программа выводит результаты действий + - * / между этими числами.

// alert(`1+1=${1+1}
// 1-1=${1-1}`)

// Пользователь вводит значения a и b для формулы a * x + b = 0, а программа считает и выводит значение x.

// alert(-b/a)

// Запросите у пользователя текущее время(часы и минуты) и выведите, сколько часов и минут осталось до следующего дня.

// const hours = +(prompt('Введите часы') as string)
// const minutes = +(prompt('Введите минуты') as string)
// const timeInMinutes = hours*60 + minutes
// const timeInMinutesToNextDay = 24 * 60 - timeInMinutes
// const minutesToNextDay = timeInMinutesToNextDay%60
// const hoursToNextDay = (timeInMinutesToNextDay - minutesToNextDay)/60
// alert(`До следующего дня ${hoursToNextDay} часов и ${minutesToNextDay} минут`)

// Запросите у пользователя трехзначное число и выведите вторую цифру этого числа.Для решения задачи используйте оператор % (остаток от деления).

const number = 278
console.log((number - number %10)/10%10)

// Запросите у пользователя пятизначное число и переместите последнюю цифру в начало(из числа 12345 должно получиться число 51234).

// Зарплата работника составляет $250 + 10 % от продаж. Запросите общую сумму продаж за месяц и посчитайте зарплату.

// if (условие) {
//   блок кода, который выполняется, если условие истинно
// }

// if (условие) {
//   блок кода, который выполняется, если условие истинно
// } else {
//   блок кода, который выполняется, если условие ложно
// }


// if (условие) {
//   блок кода, который выполняется, если условие истинно
// } else if (доп условие 1) {
//   блок кода, который выполняется, если доп условие 1 истинно
// } else {
//   блок кода, который выполняется, ни одно из условий не было истинным
// }

const SECRET = "0123"
const ADMIN_SECRET = "321"
const pass = '321'
// const pass = prompt('Введите пароль')
// @ts-ignore
if (SECRET == pass) {
  console.log('Вы вошли!')
} else if (ADMIN_SECRET == pass) {
  console.log('Вы вошли как администратор!')
} else {
  console.log('Вы не вошли!')
}

const age = 20
let accessAllowed
if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

// переменная, в которую попадёт значение = (условие)?Значение, если условие истинно:Значение, если условие ложно
accessAllowed = (age>18)?true:false

console.log((18**2)**0.5)


// Получаем элементы
const input1 = document.querySelector('#task1 input') as HTMLInputElement

if (input1) input1.value

const text1 = document.querySelector('#task1 b') as HTMLElement
const button1 = document.querySelectorAll('#task1 button') as Record<number,HTMLButtonElement>
const output1 = document.querySelector('#task1 p') as HTMLParagraphElement
document.write('<h1>asddasdas</h1>')
document.write('<p>asddasdas</p>')
document.write('<q>asddasdas</q>')
const h1 = document.querySelector('h1')
if (h1) h1.innerText = 'ddad'
if (text1) text1.innerText = 'Кто там?'
// По нажатию на кнопку выводим результат
const onClick = function () {
  // @ts-ignore
  output1.innerText = ''

  // @ts-ignore
  if (input1.value == 'Админ') {
    // @ts-ignore
    text1.innerText = 'Пароль?'
    // @ts-ignore
    input1.value = ''
    button1[0].classList.add('hidden')
    button1[1].classList.remove('hidden')
  } else {
    // @ts-ignore
    output1.innerText = 'Я вас не знаю'
  }
}
button1[0]?.addEventListener('click', onClick)
button1[1]?.addEventListener('click', function () {
  // @ts-ignore
  output1.innerText = ''

  // @ts-ignore
  if (input1.value == 'Я Главный') {
    // @ts-ignore
    output1.innerText = 'Здравствуйте!'
  } else {
    // @ts-ignore
    text1.innerText = 'Кто там?'
    // @ts-ignore
    output1.innerText = 'Я вас не знаю'
    // @ts-ignore
    input1.value = ''
    button1[0].classList.remove('hidden')
    button1[1].classList.add('hidden')
  }
})

let currentUser = null;
let defaultUser = "John";

let name1 = currentUser || defaultUser || "unnamed";

console.log(name1); // выбирается "John" – первое истинное значение

console.log("'' || 1 || undefined",'' || 1 || undefined)
console.log("0 && 1 && 789",'0' && 1 && 789)
// Приоритет оператора && больше, чем у ||
// Приоритет НЕ ! является наивысшим из всех логических операторов, поэтому он всегда выполняется первым, перед && или ||

// const login = prompt('Кто там?')
// if (login == null) {
//   alert('Отменено')
// } else if (login == 'Админ') {
//   const pass = prompt('Пароль?')
//   if (pass == null) {
//     alert('Отменено')
//   } else if (pass == 'Я Главный') {
//     alert('Здравствуйте!')
//   } else {
//     alert('Неверный пароль')
//   }
// } else {
//   alert('Я вас не знаю')
// }

// Идентичные записи
// result = a ?? b
// result = (a !== null && a !== undefined) ? a : b

// Оператор нулевого слияния возвращает значимые значения и пропускает только null и undefined
console.log(NaN ?? 0 ?? 'default')
console.log('' || 0 || 'default')
// Важное различие между ними заключается в том, что:
// || возвращает первое истинное значение.
// ?? возвращает первое определённое значение.

// Оператор нулевого слияния ?? — это быстрый способ выбрать первое «определённое» значение из списка.
// Используется для присвоения переменным значений по умолчанию:

// будет height=100, если переменная height равна null или undefined
// height = height ?? 100;
// Оператор ?? имеет очень низкий приоритет, лишь немного выше, чем у ? и =, поэтому при использовании его в выражении, скорее всего, потребуются скобки.

// Запрещено использовать вместе с || или && без явно указанного приоритета, то есть без скобок.

let n1 = 5
let i = 1
// while - цикл с предусловием; Сначала проверяем условие, потом идём в тело цикла
// while (условие) { Тело цикла выполняется пока условие истинно, иначе управление переходит на следующую строку после цикла (цикл заканчивается)
//   Тело цикла
// }
while (i<=n1) {
  console.log(i)
  i++
}

// 1. инициация итератора
// 2. проверка условия
// После проверки условия, если оно истинно, выполняется тело цикла. Если ложно,- выход
// 3. После каждого выполнения тела цикла делаем шаг итератора
// 4(2). проверка условия

// for (инициация итератора; условие; шаг итератора) {
//   Тело цикла
// }

// Выполнить начало
// → (Если условие == true → Выполнить тело, Выполнить шаг)
// → (Если условие == true → Выполнить тело, Выполнить шаг)
// → (Если условие == true → Выполнить тело, Выполнить шаг)
// → ...

for (let i=1; i<n1; i++) {
  console.log(i)
}

// Бесконечный цикл с условием выхода
while (true) {
  if (i>500) break
  i++
}

// do while - цикл с постусловием; Сначала выполняем тело цикла, потом проверяем условие
// do {
//   Тело цикла
// } while (Условие) Тело цикла выполняется пока условие истинно, иначе управление переходит на следующую строку после цикла (цикл заканчивается)

// let number1
// do {
//   // @ts-ignore
//   number1 = +prompt('Введи число больше 0')
// } while (!number1 || number1<=0)

// alert(`количество 0 = ${n1}
// количество положительных 2
// `)

// Вариант с меткой
// outer: for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     let input = prompt(`Значение на координатах (${i},${j})`, '');
//     // если пустая строка или Отмена, то выйти из обоих циклов
//     if (!input) break outer; // (*)
//     // сделать что-нибудь со значениями...
//   }
// }

// Директива continue также может быть использована с меткой.В этом случае управление перейдёт на следующую итерацию цикла с меткой

// Вариант с флагом
// let stopOuter = false // (Флаг)
// for (let i = 0; i < 3; i++) {
//   if (stopOuter) break
//   for (let j = 0; j < 3; j++) {
//     let input = prompt(`Значение на координатах (${i},${j})`, '');
//     // если пустая строка или Отмена, то выйти из обоих циклов
//     if (!input) {
//       stopOuter = true
//       break
//     } // (*)
//     // сделать что-нибудь со значениями...
//   }
// }

// Чётные без %
// for (let i = 2; i < 11; i += 2) {
//   alert(i)
// }

// Вывести простые числа
// Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.
// Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток.
// Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.
// Напишите код, который выводит все простые числа из интервала от 2 до n.
// Для n = 10 результат должен быть 2, 3, 5, 7.
// P.S.Код также должен легко модифицироваться для любых других интервалов.

// const maxNumber = +(prompt('До какого числа искать простые') as string)
// console.log(`Простые числа до ${maxNumber}`)
// for (let i=2; i<maxNumber;i++) {
//   let isSimple = true
//   for (let j=2; j<i; j++) {
//     if (i%j==0) {
//       isSimple=false
//       break
//     }
//   }
//   if (isSimple) console.log(i)
// }

// console.log(`second`)
// outer:
// for (let i = 2; i < maxNumber; i++) {
//   for (let j = 2; j < i; j++) {
//     if (!(i % j)) continue outer
//   }
//   console.log(i)
// }


// switch (x) {
//   case 'value1':  // if (x === 'value1')
//     ...
//     [break]

//   case 'value2':  // if (x === 'value2')
//     ...
//     [break]

//   default:
//     ...
//     [break]
// }

// Если break нет, то выполнение пойдёт ниже по следующим case, при этом остальные проверки игнорируются

// const x = 0
// switch (x) {
//   case 1:
//     console.log('пн')
//     break
//   case 2:
//     console.log('вт')
//     break
//   case 3:
//     console.log('ср')
//     break
//   case 4:
//     console.log('чт')
//     break
//   case 5:
//     console.log('пт')
//     break
//   case 6:
//     console.log('сб')
//     break
//   case 7:
//     console.log('вс')
//     break
//   default:
//     console.log('пора отдохнуть')
// }

// let input
// do {
//   input = prompt('Введите число') as string
// } while (input?.length<1)

// const shift = +(prompt('На сколько разрядов сдвинуть число?') as string)
// let newNumber = ''
// for (let i=shift; i<input.length; i++) {
//   newNumber += input[i]
// }
// for (let i=shift-1; i>=0; i--) {
//   newNumber += input[i]
// }
// alert(newNumber)

const stringAsArray: any = ['A','B','C','D','E','F','G']
const string: any = 'ABCDEFG' 
// Записи аналогичны
for (let i=0; i<stringAsArray.length; i++) {
  console.log('i =', i, `stringAsArray[${i}] =`, stringAsArray[i])
}
for (let i in stringAsArray) {
  console.log('i =', i, `stringAsArray[${i}] =`, stringAsArray[i])
}

// Записи аналогичны
for (let i = 0; i < stringAsArray.length; i++) {
  let char = stringAsArray[i]
  console.log('char =', char)
}
for (let char of stringAsArray) {
  console.log('char =', char)
}

// Делить число 1000 на 2 до тех пор, пока не получится число
// меньше 50 Вывести это число и сколько делений произвели.

num = 1000
i = 0
do {
  num/=2
  i++
} while (num > 50)
console.log('num =', num, 'i =', i)

// function имя(параметры) {
//   ...тело...
// }

let local = 'глобальная переменная'

function showMessage(local:any) {
  local = 'локальная переменная'
  console.log('Всем привет!!!')
  return (
    local
    )
}


console.log(local)
const fromFunction = showMessage(local)
console.log(fromFunction)

const text = 'sdfsf'
function showMessage1(text: string, from = 'Аня', divider=':') { // параметры: from, text
  console.log(from + divider + ' ' + text);
}

showMessage1(text)
showMessage1("Как дела?","Петя","!!!")
showMessage1("Хорошо")
showMessage1("О, вы тоже тут!", "Макс","&&&")

getSum(1,2,5,6,4)

function getSum(a:number,b=0,c=0,d=0,e=0) {
  return a+b+c+d+e
}

// Игра «Угадай число». Предложить пользователю загадать
// число от 0 до 100 и отгадать его следующим способом:
// каждую итерацию цикла делите диапазон чисел пополам,
//   записываете результат в N и спрашиваете у пользователя
// «Ваше число > N, <N или == N ?». В зависимости от того
// что указал пользователь, уменьшаете диапазон.Начальный
// диапазон от 0 до 100, поделили пополам и получили 50
// Если пользователь указал, что его число > 50, то изменили
// диапазон на от 51 до 100 И так до тех пор, пока пользова -
//   тель не выберет == N.

// let userConfirmGht
// let userConfirmSht
// let userConfirmEqls
// let N0 = 50
// let N1 = 100
// alert('загадайте число от 0 до 100, а я отгадаю')
// do {
//   userConfirmGht = confirm(`Ваше число больше ${N0} и меньше ${N1}?`)
//   if (userConfirmGht) {
//     N0 = N1/2
//     N1 = N0 + N1/2
//   } else {
//     N1 = N0
//     N0 /= 2
//   }
// } while(N0!=N1)
// alert(`ваше число ${N0}`)

let sayHi
// Если нет параметра, обязательно писать круглые скобки
sayHi = () => console.log("Hello!")
sayHi = function () {
  return console.log("Привет");
}
// let func123 = (arg1, arg2, ...argN) => expression
// let func321 = function (arg1, arg2, ...argN) { return expression}
let sum
sum = (a: number, b: number) => a + b
sum = (a: number, b: number) => {
  return a + b
}
sum = function(a: number, b: number) {
  return a + b
}

let varFromServer = '' ?? 0 ?? 'not'
console.log(undefined == null) // равны только друг другу

let adas =`
daasdas
dsfsdfsd
sdffsd
`
adas ='daasda\nsdsfsdfsd\nsdffsd'

for  (let i=0;i<10;i++) {
  i
}

/**
 * Возвращает x, возведённое в n-ную степень.
 * В случае, если n не целое, или отрицательное, возвращает NAN
 *
 * @param {number} x Возводимое в степень число.
 * @param {number} n Степень, должна быть натуральным числом.
 * @return {number} x, возведённое в n-ную степень.
 */
function pow(x: number, n: number) {
  if (n < 0) return NaN
  if (Math.round(n) != n) return NaN
  return x**n
}

pow(2,2)

// Создание пустого объекта
const user = {} as any // синтаксис "литерал объекта"
const user1 = new Object() // синтаксис "конструктор объекта"

console.log(user)
user.age = 18
user['two words'] = 'ok'
console.log(user)
user[18] = 18
user['two words'] = 'not'
console.log(user)

const car = {
  'whells': 4,
  hP: 200,
  engine: 'v8',
  'two words':'yes',
} as any
console.log({...car})
let horsePowers = 'hP'
console.log(car[horsePowers])
delete car['two words']
car.whells = 5
console.log(car)


function makeUser(name:string, age:number) {
  return {
    name: name,
    age, // имя переменной становится свойством, а её значение,- значением
    // ...другие свойства
  } as any
}

let user2:any = makeUser("John", 40);
console.log(user2)
console.log('age' in user2) // Проверка на существование свойства в объекте
const keyString = 'name'
console.log(keyString in user2) // 'name' in user2

for (let key in user2) {
  console.log(`${key}:${user2[key]}`)
}

let codes = {
  "49": "Германия",
  "41": "Швейцария",
  "44": "Великобритания",
  // ..,
  "1": "США"
}

let codesKeys = 'Keys order: '
for (let code in codes) {
  codesKeys += code + ', '
}
console.log(codesKeys) // 1, 41, 44, 49

// 1,2,3,5,6 - псевдо массив
// one:1,two:2 - псевдо ассоциативный массив

// Напишите код, выполнив задание из каждого пункта отдельной строкой:

// Создайте пустой объект newUser.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.

const newUser = {} as any
newUser.name = 'John' // newUser['name'] = 'John'
newUser.surname = 'Smith' // newUser['surname'] = 'Smith'
newUser.name = 'Pete' // newUser['name'] = 'Pete'
delete newUser.name

// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

// Два одинаковых объекта никогда не будут равны, если их сравнивать в лоб
const obj1 = {a:1}
const obj2 = {a:1}
console.log('obj1 === obj2', obj1 === obj2)
console.log('obj1.a === obj2.a', obj1.a === obj2.a)
console.log('JSON.stringify(obj1) === JSON.stringify(obj2)', JSON.stringify(obj1) === JSON.stringify(obj2))

function isEmpty(obj:any) {
  // 1 решение
  // return JSON.stringify(obj) === '{}'

  // 2 решение
  // for (let key in obj) {
  //   if (key) return false
  // }
  // return true

  // 3 решение
  return Object.keys(obj).length ? false : true
}

console.log('isEmpty({})', isEmpty({})) //true
console.log('isEmpty({a:1})', isEmpty({a:1})) //false

// У нас есть объект, в котором хранятся зарплаты нашей команды:

let salaries = {
  John: 100,
  Ann: '160$',
  Pete: 130
} as any

let salariesSum = 0
for (let key in salaries) {
  salariesSum += parseFloat(salaries[key])
}
console.log(salariesSum)

// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

function multiplyNumeric(obj:any) {
  for (let key in obj) {
    if (typeof (obj[key]) == 'number') obj[key]*=2
  }
}
multiplyNumeric(salaries)
console.log(salaries)

// Создать объект, хранящий в себе отдельно числитель и зна -
// менатель дроби, и следующие функции для работы с этим объ -
// ектом.
// 1 Функция сложения 2 - х объектов - дробей.
// 2 Функция вычитания 2 - х объектов - дробей.
// 3 Функция умножения 2 - х объектов - дробей.
// 4 Функция деления 2 - х объектов - дробей.
// 5 Функция сокращения объекта - дроби.

type Fraction = {
  numerator: number,
  denominator: number
}

const fraction1:Fraction = {
  numerator: 2,
  denominator: 5,
}
const fraction2: Fraction = {
  numerator: 2,
  denominator: 8
}

console.log(`${fraction1.numerator}/${fraction1.denominator} and ${fraction2.numerator}/${fraction2.denominator}`)

function maxDenominator(f: Fraction) {
  const min = f.numerator < f.denominator ? f.numerator : f.denominator
  for (let i = min; i > 1; i--) {
    if (f.numerator % i == 0 && f.denominator % i == 0) return i
  }
  return 1
}

function fractionReduction(f: Fraction) {
  const denominator = maxDenominator(f)
  f.numerator /= denominator 
  f.denominator /= denominator
  return f
}

function fractionSubtraction(f1: Fraction, f2: Fraction) {
  const ajusted = fractionAjust(f1, f2)
  const sub = {
    numerator: ajusted.f1.numerator - ajusted.f2.numerator,
    denominator: f1.denominator,
  }
  return fractionReduction(sub)
}

function fractionAjust(f1: Fraction, f2: Fraction) {
  const f1D = f1.denominator
  const f2D = f2.denominator
  f1.numerator *= f2D
  f1.denominator *= f2D
  f2.numerator *= f1D
  f2.denominator *= f1D
  return {f1, f2}
}

function fractionMultiplication(f1: Fraction, f2: Fraction) {
  const mult = {
    numerator: f1.numerator * f2.numerator,
    denominator: f1.denominator * f2.denominator,
  }
  return fractionReduction(mult)
}

function fractionDivision(f1: Fraction, f2: Fraction) {
  const div = {
    numerator: f1.numerator * f2.denominator,
    denominator: f1.denominator * f2.numerator,
  }
  return fractionReduction(div)
}

function fractionSum(f1: Fraction, f2: Fraction) {
  const ajusted = fractionAjust(f1, f2)
  const sum = {
    numerator: ajusted.f1.numerator + ajusted.f2.numerator,
    denominator: ajusted.f1.denominator
  }
  return fractionReduction(sum)
}

const sumResult = fractionSum(fraction1, fraction2)
const subResult = fractionSubtraction(fraction1, fraction2)
const multResult = fractionMultiplication(fraction1, fraction2)
const divResult = fractionDivision(fraction1, fraction2)
console.log(`sum = ${sumResult.numerator}/${sumResult.denominator}`) 
console.log(`sub = ${subResult.numerator}/${subResult.denominator}`) 
console.log(`mult = ${multResult.numerator}/${multResult.denominator}`) 
console.log(`div = ${divResult.numerator}/${divResult.denominator}`) 


let messageStr = "Привет!"
let phraseStr = messageStr

console.log('messageStr', messageStr)
console.log('phraseStr', phraseStr)
phraseStr += ' User!' 
console.log('messageStr', messageStr)
console.log('phraseStr', phraseStr)

let messageObj = {text:"Привет!"}
let phraseObj = messageObj

console.log('messageObj', messageObj)
console.log('phraseObj', phraseObj)
phraseObj.text += ' User!' 
console.log('messageObj', messageObj)
console.log('phraseObj', phraseObj)
// Два объекта равны только в том случае, если это один и тот же объект
console.log('phraseObj == messageObj', phraseObj == messageObj)

let mainUser = {
  name: "John",
  age: 30,
  work: {
    salari: 100
  },
  sayHi() {
    // "this" - это "текущий объект"
    console.log('my name is ' + this.name)
  },
  sayHi2: function () {
    console.log('my name is ' + this.name)
  },
  // не используется в объектах для доступа к this объекта, т.к. не имеет доступа к this объекта
  arrowMethod: () => {
    // @ts-ignore
    console.log(this)
  },
  sayAnyfing,
} as any

mainUser.sayHi = function() {
  console.log('my name is ' + this.name + '. My salari is ' + this.work.salari)
}

let clone = {} as any // новый пустой объект

// давайте скопируем все свойства user в него
// 1 способ клонирования объектов. Копирование свойств объекта в цикле. Надо помнить о вложенных объектах
// for (let key in mainUser) {
//   if (typeof(mainUser[key]) == 'object') {
//     clone[key] = {}
//     for (let innerKey in mainUser[key]) {
//       clone[key][innerKey] = mainUser[key][innerKey]
//     }
//   } else {
//     clone[key] = mainUser[key]
//   }
// }
// 2 Spred (... троеточие) оператор (развёртывание). Надо помнить о вложенных объектах
clone = { ...mainUser, work: { ...mainUser.work } }
// 3 Object.assign. Надо помнить о вложенных объектах
// clone = Object.assign({}, mainUser, {work: { ...mainUser.work }} )
// Для плоских объектов доступны 2 варианта записи
// Object.assign(clone, mainUser)
// clone = Object.assign({}, mainUser)
// 4 Преобразование в JSON (строка) и назад в объект. Не надо думать о вложенности, но теряются Symbol и методы
// clone = JSON.parse(JSON.stringify(mainUser))
// console.log(JSON.stringify(mainUser)) 
// 5  structuredClone(). Выдаёт ошибку, если в объекте присутствует метод
// clone = structuredClone(mainUser)

// теперь clone это полностью независимый объект с тем же содержимым
clone.name = "Pete" // изменим в нём данные
clone.work.salari = 200

console.log('mainUser.name', mainUser.name) // все ещё John в первоначальном объекте
console.log('mainUser.work.salari', mainUser.work.salari) 
console.log('clone.name', clone.name) // уже Pete
console.log('clone.work.salari', clone.work.salari) 

mainUser.sayHi()
clone.sayHi()

// Стрелочные функции не имеют своего this
console.log(this)
const arrow = () => {
  // @ts-ignore
  console.log(this)
}
arrow()

function sayAnyfing() {
  // @ts-ignore
  console.log(this.name)
  const arrow = () => {
    // @ts-ignore
    console.log(this)
  }
  arrow()
}
mainUser.sayAnyfing()
clone['sayAnyfing']()
mainUser.arrowMethod()

let ladder = {
  step: 0,
  up() {
    this.step++
    return this
  },
  down() {
    this.step--
    return this
  },
  showStep: function () { // показывает текущую ступеньку
    console.log(this.step)
    return this
  }
}

// Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:
// ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0
// Чаще всего цепочка вызовов продолжается с новой строки
ladder
  .up()
  .up()
  .down()
  .showStep() // 1
  .down()
  .showStep() // 0 
// Добавили к методам возврат this (текущий объект)

// !Объекты.Основы ***ПРОПУСКАЕМ***
// !Конструктор, оператор "new"
// !Опциональная цепочка '?.'
// !Тип данных Symbol
// !Преобразование объектов в примитивы

type Post = {
  h1: string,
  image: string,
  text: string,
  paragraph?: string,
  tags: Array<string>,
  author?: Record<string,string>
}

const posts: Array<Post> = [
  {
    "h1": '121dfsafsd',
    image: 'sdfsdf.jpg',
    text: 'sdfsffsddfs \n dfsdsdfsfs',
    tags: [],
    author: {
      name: 'author name'
    }
  },
  {
    h1: '121dfsafsd1',
    image: 'sdfsdf.jpg',
    text: 'sdfsffsddfs2',
    tags: ['fsfds', 'sfsdf'],
    author: {
      nic: 'author nic'
    }
  }
]

for (let post of posts) {
  post.paragraph = post.text.split('\n')[0]
  document.write(`<h2>${post.h1}</h2>`)
  // let author
  // if (post.author) {
  //   author = post.author.name ? post.author.name.toUpperCase() : post.author.nic.toUpperCase()
  // }
  const author = post?.author?.name ? post.author.name.toUpperCase() : post?.author?.nic.toUpperCase()
  document.write(`<p>${author}</p>`)
  document.write(`<br>`)
  for (let i = 0; i < post.tags?.length; i++ ) {
    document.write(post.tags?.pop() as string)
    }
    document.write(`<br>`)
  
}

console.log(posts)

const userObj = { 
  // address: {}
} as any // пользователь без свойства "address"

// Мы НЕ можем использовать ?. для записи, т.к. опциональная цепочка ?. не имеет смысла в левой части присваивания
// userObj?.address?.street = 'roz' // Левая часть выражения присваивания не может быть обращением к необязательному свойству
// то же самое что написать undefined = 'roz'
// Так создаются сложные объекты необходимой конфигурации

let street // может быть, а может и не быть

if (street && userObj.address) {
  userObj.address.street = street
} else if (street && !userObj.address) {
  userObj.address = {}
  userObj.address.street = street
}

// console.log(userObj.address.street) // Ошибка!
console.log(userObj.address ? userObj.address.street : undefined) // развёрнутая запись
console.log(userObj.address?.['street']?.name) // сокращённая запись

// fetch('http://jservice.io/api/random?count=1').
//   then((response) => {
//     return response.json()
//   })
//   .then((data) => {
//     console.log(data)
//     data = []
//     console.log(data[0]?.category?.id)
//   })

console.log("\"Привет\"")
console.log(JSON.stringify(posts))

// Синтаксис опциональной цепочки?.имеет три формы:

// obj?.prop – возвращает obj.prop если obj существует, в противном случае undefined.
// obj?.[prop] – возвращает obj[prop] если obj существует, в противном случае undefined.
// obj.method?.() – вызывает obj.method(), если obj.method существует, в противном случае возвращает undefined.

// Мы должны использовать ?. осторожно, только там, где по логике кода допустимо, что левая часть не существует. Чтобы он не скрывал от нас ошибки программирования, если они возникнут

let billion = 1e9  // 1 миллиард, буквально: 1 и 9 нулей
// Другими словами, "e" производит операцию умножения числа на 1 с указанным количеством нулей
// 1e3 = 1 * 1000
// 1.23e6 = 1.23 * 1000000
console.log('1000000000 == 1e9', 1000000000 == 1e9) // true
console.log('0.000001 == 1e-6', 0.000001 == 1e-6) // true
// отрицательное число после "e" подразумевает деление на 1 с указанным количеством нулей
// 1 делится на 1 с 3 нулями
// 1e-3 = 1 / 1000(=0.001)
// 1.23 делится на 1 с 6 нулями
// 1.23e-6 = 1.23 / 1000000(=0.00000123)

// Шестнадцатеричные, двоичные и восьмеричные числа
// 0x - префикс для записи в шестнадцатеричной системе счисления
console.log('0xff', 0xff) // 255

// 0b - префикс для записи в двоичной системе счисления
console.log('0b10010', 0b10010) // 18

// 0o - префикс для записи в восьмеричной системе счисления
console.log('0o377', 0o377) // 255

console.log('0xff === 0o377', 0xff === 0o377) // true

// Метод toString(base)
// base может варьироваться от 2 до 36 (по умолчанию 10).
console.log('255..toString(2)', 255..toString(2))
console.log('255..toString(8)', 255..toString(8))
console.log('255..toString(16)', 255..toString(16))

// Округление
// Одна из часто используемых операций при работе с числами – это округление.

// В JavaScript есть несколько встроенных функций для работы с округлением:

// Math.floor
// Округление в меньшую сторону: 3.1 становится 3, а - 1.1 — -2.
console.log('Math.floor(3.1)', Math.floor(3.1))
// Math.ceil
// Округление в большую сторону: 3.1 становится 4, а - 1.1 — -1.
console.log('Math.ceil(3.1)', Math.ceil(3.1))
// Math.round
// Округление до ближайшего целого: 3.1 становится 3, 3.6 — 4, а - 1.1 — -1.
console.log('Math.round(3.5)', Math.round(3.5))
// Math.trunc(не поддерживается в Internet Explorer)
// Производит удаление дробной части без округления: 3.1 становится 3, а - 1.1 — -1.
console.log('Math.trunc(3.6)', Math.trunc(3.6))

// Округление до n-го знака

// 1 способ
// Умножить и разделить. 
// Например, чтобы округлить число до второго знака после запятой, мы можем умножить число на 100, вызвать функцию округления и разделить обратно
console.log('Math.floor(1.23456 * 100) / 100', Math.floor(1.23456 * 100) / 100) // 1.23456 -> 123.456 -> 123 -> 1.23)

// 2 способ
// Метод toFixed(n) округляет число до n знаков после запятой и возвращает строковое представление результата
console.log('1.23656.toFixed(2)', 1.23656.toFixed(2)) // '1.24'
console.log('90..toFixed(2)', 90..toFixed(2)) // '90.00'

console.log("90000.00.toLocaleString('ru-RU')", 90000.00.toLocaleString('ru-RU')) // '90 000'

// Потеря точности
console.log(0.1.toFixed(20) ) // 0.10000000000000000555

// Можно ли обойти проблему ? Конечно, наиболее надёжный способ — это округлить результат используя метод toFixed(n):


console.log('0.1 + 0.2', 0.1 + 0.2); // 0.30000000000000004
console.log('+(0.1 + 0.2).toFixed(2)', +(0.1 + 0.2).toFixed(2)) // 0.30000000000000004

// Проверка: isFinite и isNaN
// Помните эти специальные числовые значения?

// Infinity (и -Infinity) — особенное численное значение, которое ведёт себя в точности как математическая бесконечность ∞.
// NaN представляет ошибку.

// Эти числовые значения принадлежат типу number, но они не являются «обычными» числами, поэтому есть функции для их проверки:

// isNaN(value) преобразует значение в число и проверяет является ли оно NaN:

console.log('isNaN(NaN)', isNaN(NaN)) // true
// @ts-ignore
console.log('isNaN("str")', isNaN("str")) // true
// Нужна ли нам эта функция ? Разве не можем ли мы просто сравнить === NaN ? К сожалению, нет.Значение NaN уникально тем, что оно не является равным ничему другому, даже самому себе:

// @ts-ignore
console.log('NaN === NaN', NaN === NaN) // false

// isFinite(value) преобразует аргумент в число и возвращает true, если оно является обычным числом, т.е.не NaN / Infinity / -Infinity:

// @ts-ignore
console.log('isFinite("15")', isFinite("15")); // true
// @ts-ignore
console.log('isFinite("str")', isFinite("str")); // false, потому что специальное значение: NaN
console.log('isFinite(Infinity)', isFinite(Infinity)); // false, потому что специальное значение: Infinity

// Методы Number.isNaN и Number.isFinite – это более «строгие» версии функций isNaN и isFinite. Они не преобразуют аргумент в число, а наоборот – первым делом проверяют, является ли аргумент числом (принадлежит ли он к типу number).
// Не стоит считать Number.isNaN и Number.isFinite более «корректными» версиями функций isNaN и isFinite. Это дополняющие друг-друга инструменты для разных задач.

// Сравнение Object.is
// Существует специальный метод Object.is, который сравнивает значения примерно как ===, но более надёжен в двух особых ситуациях:

// Работает с NaN: 
console.log('Object.is(NaN, NaN)', Object.is(NaN, NaN)) //, здесь он хорош.
//   Значения 0 и - 0 разные: 
console.log('Object.is(0, -0)', Object.is(0, -0)) // это редко используется, но технически эти значения разные.
// Во всех других случаях Object.is(a, b) идентичен a === b.

// parseInt и parseFloat

console.log('parseInt(\'0xff\', 16)', parseInt('0xff', 16))

// Правильное округление 6.35
console.log(6.35.toFixed(20)) // 6.34999999999999964473
console.log(Math.round(6.35 * 10) / 10) // 6.35 -> 63.5 -> 64(rounded) -> 6.4

// Случайное число с выровненной вероятностью появления
function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min - 0.5)
}

console.log('Math.min(1,1,5,7,8,15,47,32)', Math.min(1, 1, 5, 7, 8, 15, 47, 32))
console.log('Math.max(1,1,5,7,8,15,47,32)', Math.max(1, 1, 5, 7, 8, 15, 47, 32))
console.log('Math.max(...[1, 1, 5, 7, 8, 15, 47, 32])', Math.max(...[1, 1, 5, 7, 8, 15, 47, 32])) // Можем развернуть массив используя spred оператор

// 10. Запросите у пользователя целое число и выведите в ответ, четное число или нет.В задании используйте логические операторы. В задании не надо использовать if или switch

// let numFromUser = +(prompt('Введите целое число') as string)
// const evenOdd = (numFromUser % 2 == 0 && 'четное') || 'не четное' 
// console.log(evenOdd)

let guestList = `Guests:
* John
* Pete
* Mary
`

console.log(guestList)

// 'sdfsdfdf\'sd'
// "sdfsdfdf\"sd"

// 'dsfsdfs "dsfsfd" fdssdf'
// "sdfsdf sdf 'dfsfsfd' fdsfds"

// `fgdfg 'sdfsfsd'sdfsdf "sdfsdfsd" sfd`

console.log(`My\n`.length) // 3 (\n - один спецсимвол)

let testStr = `Hello`

// получаем первый символ
console.log('testStr[0]',testStr[0]) // H
console.log('testStr.at(0)',testStr.at(0)) // H

// получаем последний символ
console.log('testStr[testStr.length - 1]', testStr[testStr.length - 1]) // o
console.log('testStr.at(-1)', testStr.at(-1)) // o

for (let char of "Hello") {
  console.log(char) // H,e,l,l,o (char — сначала "H", потом "e", потом "l" и т.д.)
}

testStr = 'Hi sfdffds';
console.log(testStr)

// testStr[0] = 'h'; // ошибка. Разрешено только чтение
testStr = testStr[0].toLowerCase() + testStr.slice(1, 8) + testStr[8].toUpperCase() + testStr.slice(9) // заменяем строку
console.log(testStr)

console.log('Interface'.toUpperCase()) // INTERFACE
console.log('Interface'.toLowerCase()) // interface

//  Поиск подстроки

// Первый метод — str.indexOf(substr, pos).

// Он ищет подстроку substr в строке str, начиная с позиции pos, и возвращает позицию, на которой располагается совпадение, либо - 1 при отсутствии совпадений.

testStr = 'Widget with id'

console.log('testStr.indexOf(\'Widget\')', testStr.indexOf('Widget')) // 0, потому что подстрока 'Widget' найдена в начале
console.log('testStr.indexOf(\'widget\')', testStr.indexOf('widget')) // -1, совпадений нет, поиск чувствителен к регистру

console.log('testStr.indexOf("id")',testStr.indexOf("id")) // 1, подстрока "id" найдена на позиции 1 (..idget with id)

let index = 0 
while (true) {
  index = testStr.indexOf("id", index)
  if (index!=-1) {
    console.log('Подстрока "id" найдена на позиции', index)
    index++
  } else {
    break
  }
}

// str.lastIndexOf(substr, position)
// Также есть похожий метод str.lastIndexOf(substr, position), который ищет с конца строки к её началу.

// Он используется тогда, когда нужно получить самое последнее вхождение: перед концом строки или начинающееся до(включительно) определённой позиции.

console.log('testStr.lastIndexOf("id")', testStr.lastIndexOf("id"))

// includes, startsWith, endsWith

console.log("Widget with id".includes("Widget")) // true

console.log("Hello".includes("Bye")) // false

console.log("Midget".includes("id")) // true
console.log("Midget".includes("id", 3)) // false, поиск начат с позиции 3

console.log("Widget".startsWith("Wid")) // true, "Wid" — начало "Widget"
console.log("Widget".endsWith("get")) // true, "get" — окончание "Widget"


console.log("Widget".endsWith("get") ? 'Строка "Widget" заканчивается на подстроку "get"' :'Строка "Widget" не заканчивается на подстроку "get"') 

// Получение подстроки

// ДОСТАТОЧНО ЗАПОМНИТЬ slice
// str.slice(start[, end])
// Возвращает часть строки от start до(не включая) end.

console.log('"Widget with id".slice(7)', testStr.slice(7))
console.log('"Widget with id".slice(1,3)', testStr.slice(1,3))

console.log('"Widget with id".slice(-2)', testStr.slice(-2))

// str.substring(start[, end])
// Возвращает часть строки между start и end(не включая) end.

// Это — почти то же, что и slice, но можно задавать start больше end.
// Если start больше end, то метод substring сработает так, как если бы аргументы были поменяны местами.

console.log('"Widget with id".substring(7)', testStr.substring(7))
console.log('"Widget with id".substring(3, 1)', testStr.substring(3, 1))

// Отрицательные значения substring, в отличие от slice, не поддерживает, они интерпретируются как 0
console.log('"Widget with id".substring(-2)', testStr.substring(-2)) // Widget with id

// str.substr(start[, length])
// Возвращает часть строки от start длины length.
// В противоположность предыдущим методам, этот позволяет указать длину вместо конечной позиции

console.log('"Widget with id".substr(7)', testStr.substr(7))
console.log('"Widget with id".substr(3, 1)', testStr.substr(1, 2))

console.log('"Widget with id".substr(-2)', testStr.substr(-2))

console.log('z > Z', 'z'>'Z') // true
console.log('"z".codePointAt(0)',"z".codePointAt(0)) // 122
console.log('"Z".codePointAt(0)',"Z".codePointAt(0)) // 90
console.log('"😫".codePointAt(0)', "😫".codePointAt(0)) // 128555
console.log('"😫".length', "😫".length) // 2

console.log('String.fromCodePoint(90)',String.fromCodePoint(90)) // Z
console.log('String.fromCodePoint(90)', String.fromCodePoint(128555)) // 😫

str = ''

for (let i = 65; i <= 220; i++) {
  str += String.fromCodePoint(i);
}
console.log(str);
// ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
// ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ

// #### Правильное сравнение строк ####

// str.localeCompare(str2) возвращает число, которое показывает, какая строка больше в соответствии с правилами языка:

// Отрицательное число, если str меньше str2.
// Положительное число, если str больше str2.
// 0, если строки равны.
  
console.log('Österreich'>'Zealand'); // true. Сравнение по кодам символов
console.log('Österreich'.localeCompare('Zealand')); // -1. Сравнение по положению в алфавите

// Методы replace и replaceAll возвращают новую строку 

str = 'Ослик Иа-Иа посмотрел на виадук'
console.log(str.replace('Иа', 'Юю')) // меняет только первое совпадение
console.log(str.replaceAll('Иа', 'Юю')) // меняет только первое совпадение
console.log(str) // изначальная строка осталась той же самой
str = str.replaceAll('Иа', 'Юю') // заменили старую строку новой
console.log(str) // новая строка

// метод split(simb) разбивает строку на массив строк по символу-разделителю simb
console.log(str.split(' '))
// метод join(simb) соединяет массив в строку символом-разделителем simb
console.log(str.split(' ').join('_'))

console.log([0,1,2,3,5,5].join('_^^_'))

console.log('"   s   t   r    ".trim()', "   s   t   r    ".trim()) // убирает пробелы в начале и конце строки
console.log('"abc".repeat(3)', "abc".repeat(3))


// ########### Массивы ###########

// Существует два варианта синтаксиса для создания пустого массива:

let arr = new Array()
console.log('new Array()',arr)
arr = new Array(12,15,35)
console.log('new Array(12,15,35)',arr)
arr = new Array(10) // Если указать только одно число, то создаствя постой массив на n эелементов
console.log('Array(10)',arr)
arr = []
console.log('[]',arr)
arr = [12, 15, 35]
console.log('[12, 15, 35]',arr)
arr = [10]
console.log('[10]',arr)

// Элементы массива нумеруются, начиная с нуля.
// Мы можем получить элемент, указав его номер в квадратных скобках:

let fruits = ["Яблоко", "Апельсин", "Слива"];
console.log('fruits = ["Яблоко", "Апельсин", "Слива"]')
console.log('fruits[0]',fruits[0]) // Яблоко
console.log('fruits[1]',fruits[1]) // Апельсин
console.log('fruits[2]',fruits[2]) // Слива
// Так же работает метод at()
console.log('fruits.at(1)', fruits.at(1)) // Апельсин
console.log('fruits.at(-1)', fruits.at(-1)) // Слива

// В отличии от сток, Мы можем заменить элемент:
fruits[2] = 'Груша' // теперь ["Яблоко", "Апельсин", "Груша"]

// …Или добавить новый к существующему массиву:
fruits[3] = 'Лимон' // теперь ["Яблоко", "Апельсин", "Груша", "Лимон"]


// Для добавления элементов в массив существуют специальные методы. До индексу объчно не добавляют
// Если надо добавить элемент в конец массива, можем использовать один из вариантов:
fruits.push('Слива')
fruits[fruits.length] = 'Слива'

// Общее число элементов массива содержится в его свойстве length:
console.log(fruits) // ['Яблоко', 'Апельсин', 'Груша', 'Лимон', 'Слива', 'Слива']
console.log(fruits.length) // 6

// Массивы ведут себя так же как объекты в плане того, что значения хранятся по ссылке
const fruits2 = fruits // Сохранили в переменную fruits2 ссылку на массив из переменной fruits
fruits2.push('Банан')
console.log(fruits) // в массив переменной fruits добавился ещё один элемент

// @ts-ignore
console.log('[]==[]',[]==[]) // Всегда false, потому что ссылки разные

console.log('{}.toString()', {}.toString()) //[object Object]
console.log('[1,2,[3,4],function() {}, {}].toString()', [1,2,[3,4],function() {}, {}].toString())

const arr1 = [1, 'dasd', [1,2,['fdgdfg',43]], {a:12}]
const arr2 = [1,'dasd',[1,2,['fdgdfg',43]],{b:20}]

// Подходит для сравнения массивов с примитивными значениями
console.log('arr1.toString() == arr2.toString()', arr1.toString() == arr2.toString()) 

const arr3 = [1,'dasd',[1,2,['fdgdfg',43]],[12,35]]
console.log("arr3", arr3) 
// Самы простой способ сделать сложный массив, состоящий из примитивов, плоским
console.log("arr3.split(',')", arr3.toString().split(',')) 

console.log('fruits', fruits) // (7) ['Яблоко', 'Апельсин', 'Груша', 'Лимон', 'Слива', 'Слива', 'Банан']
console.log('fruits[7]', fruits[7]) // undefined
console.log('fruits[-1]', fruits[-1]) // undefined

// Таким образом, самый простой способ очистить массив – это arr.length = 0

fruits.length = 3 // Изменили количество элементов в массива. Все, что не вошли,- исчезли
fruits.length = 7 // Если увеличить длину массива, появятся новые индексы, но элементы будут пустыми
console.log('fruits', fruits) // (3) ['Яблоко', 'Апельсин', 'Груша']

// fruits.length = -1 Ошибка. Длина массва не может быть меньше 0

// Методы pop/push, shift/unshift
// Примерная реализация, чтобы понять, что делают эти методы

// pop и shift удаляют первый(shift) или последний(pop) элемент и возвращают его значение
// Эффективность
// Методы push / pop выполняются быстро, а методы shift / unshift – медленно

function pop(arr: any[]) {
  const el = arr[arr.length-1] // читаем последний элемент
  arr.length = arr.length - 1  // удаляем последний элемент
  return el                    // возвращаем последний элемент
}

function shift(arr: any[]) {
  const el = arr[0]    // читаем первый элемент
  arr = arr.slice(1)  // удаляем первый элемент
  return el            // возвращаем первый элемент
}

// push и unshift добавляют элементы в начало(unshift) или конец(push) массива и возвращают новую длинну массива

function push(arr: any[], elements: any[]) {
   arr = [...arr, ... elements]
   return arr.length
}

function unshift(arr: any[], elements: any[]) {
   arr = [... elements, ...arr]
   return arr.length
}

// Движок JavaScript старается хранить элементы массива в непрерывной области памяти, один за другим, благодаря чему массивы работают очень быстро

// Но если мы начнём работать с массивом, как с обычным объектом, то Способы оптимизации, используемые для массивов, в этом случае не подходят, поэтому они будут отключены и никакой выгоды не принесут

// !Варианты неправильного применения массива:
// !Добавление нечислового свойства, например: arr.test = 5.
// !Создание «дыр», например: добавление arr[0], затем arr[1000](между ними ничего нет).
// !аполнение массива в обратном порядке, например: arr[1000], arr[999] и т.д.

// Массив следует считать особой структурой, позволяющей работать с упорядоченными данными.Для этого массивы предоставляют специальные методы.Массивы тщательно настроены в движках JavaScript для работы с однотипными упорядоченными данными, поэтому, пожалуйста, используйте их именно в таких случаях.Если вам нужны произвольные ключи, вполне возможно, лучше подойдёт обычный объект { }

// ### Перебор элементов ###
// Одним из самых старых способов перебора элементов массива является цикл for по цифровым индексам:

arr = ["Яблоко", "Апельсин", "Груша"]

console.log('Классический цикл for', arr)
for (let i = 0; i < arr.length; i++) {
  console.log('arr[',i,']', arr[i])
}

// Но для массивов возможен и другой вариант цикла, for..of:

fruits = ["Яблоко", "Апельсин", "Слива"];

// проходит по значениям. Нет доступа к индексам
console.log('for .. of', fruits)
for (let fruit of fruits) {
  console.log('fruit', fruit);
}
// Цикл for..of не предоставляет доступа к номеру текущего элемента, только к его значению, но в большинстве случаев этого достаточно. А также это короче

// Технически, так как массив является объектом, можно использовать и вариант for..in:
arr = ["Яблоко", "Апельсин", "Груша"];
console.log('for .. in', arr, 'для массивов не используем!')
for (let key in arr) {
  console.log('arr[',key,']', arr[key]); // Яблоко, Апельсин, Груша
}

// !Но на самом деле это – плохая идея.Существуют скрытые недостатки этого способа:

// Цикл for..in выполняет перебор всех свойств объекта, а не только цифровых.

// В браузере и других программных средах также существуют так называемые «псевдомассивы» – объекты, которые выглядят, как массив.То есть, у них есть свойство length и индексы, но они также могут иметь дополнительные нечисловые свойства и методы, которые нам обычно не нужны.Тем не менее, цикл for..in выведет и их.Поэтому, если нам приходится иметь дело с объектами, похожими на массив, такие «лишние» свойства могут стать проблемой.

// !Цикл for..in оптимизирован под произвольные объекты, не массивы, и поэтому в 10 - 100 раз медленнее.Увеличение скорости выполнения может иметь значение только при возникновении узких мест.Но мы всё же должны представлять разницу.
// !В общем, не следует использовать цикл for..in для массивов

// Многомерные массивы
// Массивы могут содержать элементы, которые тоже являются массивами.Это можно использовать для создания многомерных массивов, например, для хранения матриц:

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

console.log(matrix[1][1]) // 5, центральный элемент

console.log('fruits', fruits)
arr = [...fruits] // Копируем массив
console.log(...fruits) 
// в console.log(подставятся все значения через запятую). Всё равно, что мы выделели все элементы массива, скопировали их и вставили в console.log
console.log("Яблоко", "Апельсин", "Слива") 

console.log(fruits.slice()) // Ещё один вариант копирования массива
console.log({...fruits})
fruits.push('Кокос')
console.log('fruits', fruits) 
console.log('arr', arr) // arr не изменился

const newArr = []
for (let i=0; i<10; i++) {
  newArr[i] = randomInt(0,20)
}
console.log(newArr)

// Задание 1
// Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта, необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.
// 1 Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
// 2 Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую.
// 3 Покупка продукта. Функция принимает название продукта и отмечает его как купленный.

const purchase = [
  {
    name: 'a',
    count: 10,
    purchased: true,
  },
  {
    name: 'b',
    count: 5,
    purchased: false,
  },
  {
    name: 'c',
    count: 3,
    purchased: true,
  },
  {
    name: 'd',
    count: 1,
    purchased: false,
  },
]

const purchasedOl = document.querySelector('.purchase')
const showPurchaseButton = document.querySelector('.showPurchase')
const addPurchaseButton = document.querySelector('.addPurchase')
const setPurchasedButton = document.querySelector('.setPurchased')


function showPurchase() {
  if (purchasedOl) {
    purchasedOl.innerHTML = ``
  }
  purchase.forEach((el) => {
    if (!el.purchased) {
      if (purchasedOl) {
        purchasedOl.innerHTML += `<li>${el.name} необходимо купить ${el.count} штук</li>`
      }
    }
  })
  for (let el of purchase) {
    if (el.purchased) {
      if (purchasedOl) {
        purchasedOl.innerHTML += `<li>${el.name} куплено ${el.count} штук</li>`
      }
    }
  }
}

function addPurchase() {
  const name = prompt('Введите назавание покупки') as string
  const count = +(prompt('Введите количество') as string)
  let find = false
  for (let el of purchase) {
    if (el.name == name) {
      find = true
      el.count += count
    }
  }
  if (!find) {
    purchase.push({
      name,
      count,
      purchased: false
    })
  }
  showPurchase()
}

function setPurchased() {
  const name = prompt('Введите назавание покупки') as string
  for (let el of purchase) {
    if (el.name == name) {
      el.purchased = true
    }
  }
  showPurchase()
}

showPurchaseButton?.addEventListener('click', showPurchase)
addPurchaseButton?.addEventListener('click', addPurchase)
setPurchasedButton?.addEventListener('click', setPurchased)

// Задание 3
// Создать массив css - стилей(цвет, размер шрифта, выравнивание, подчеркивание и т.д.).Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля.
// Написать функцию, которая принимает массив стилей и текст, и выводит этот текст с помощью document.write() в тегах <p> </p>, добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.

const styleRed = [
  {
    name: 'color',
    value: 'red',
  },
  {
    name: 'text-decoration',
    value: 'underline',
  },
]
const styleGreen = [
  {
    name: 'color',
    value: 'green',
  },
  {
    name: 'font-size',
    value: '20px',
  },
]

const printTextDiv = document.querySelector('.printText')

function printText(style:any[], text:string) {
  let styleStr = ''
  for (let el of style) {
    styleStr += `${el.name}:${el.value};`
  }
  if (printTextDiv) {
    printTextDiv.innerHTML += `<p style=${styleStr}>${text}</p>`
  }
}

printText(styleRed, 'fsdfsd sdf sdf sdf sg erwtw ')
printText(styleGreen, 'fsdfsd sdf sdf sdf sg erwtw sdf sdfsdf sdf ')

const rectangle = {
  x1: 10,
  y1: 18,
  x2: 16,
  y2: 0
}

// debugger

function getRectWidth(rectangle: any) {
  return rectangle.x2 - rectangle.x1
}
function getRectHeight(rectangle: any) {
  return rectangle.y1 - rectangle.y2
}
function getRectArea(rectangle:any) {
  return getRectWidth(rectangle) * getRectHeight(rectangle)
}
function getRectperimeter(rectangle:any) {
  return getRectWidth(rectangle) * 2 + getRectHeight(rectangle) * 2
}

function getOddEven(num:number) {
  const arr = ['Четное', 'Нечетное']
  return (num % 2 == 0) && 'Четное' || 'Нечетное'
  return arr[num % 2]
  return ['Четное', 'Нечетное'][num % 2]
}

console.log(getOddEven(3))
console.log(getOddEven(5))
console.log(getOddEven(8))

console.log(Math.PI)

const USDSpan = document.getElementById('USD')

const result = fetch('https://www.cbr-xml-daily.ru/daily_json.js')
  .then(data => data.json())
  .then(data => {if (USDSpan) USDSpan.innerText = data.Valute.USD.Value})
  .catch(e => console.log(e))

// Создать еще один массив из 5 случайных чисел и написать
// следующие функции.
// 1
// Функция принимает 2 массива и возвращает новый массив, в котором собраны все элементы из двух массивов
// без повторений.

function getUnicArray(arr1: any[] = [1, 1, 2, 3, 5, 8, 7, 9, 8, 7], arr2: any[] = [8, 17, 9, 88, 7]) {
  // const arr = [] as any
  // for (let el of arr1) {
  //   if (!arr.includes(el)) arr.push(el)
  // }
  // for (let el of arr2) {
  //   if (!arr.includes(el)) arr.push(el)
  // }
  // return arr
  const set = new Set([...arr1,...arr2])
  return Array.from(set)
}

console.log(getUnicArray())
console.log(getUnicArray([4,89,63,156,62,4,8,7,5]))
console.log(getUnicArray([4,89,63,62,4,8,7,5],[4,8,64,92,1356]))
console.log(getUnicArray(['a','a','b','c'],['b','d','e','c']))

console.log(arr1)
for (let el of arr1) {
  console.log('el', el)
}
for (let i=0; i<arr1.length; i++) {
  console.log('элемент массива arr с индексом '+i, arr1[i])
}


for (let char of ['a','d','f','g','e']) {
  if (char=='d') {
    console.log('Встретили символ "d" и перешли на новую итерацию, игнорируя все следующие строки тела цикла')
    continue
  }
  if (char=='g') {
    console.log('Встретили символ "g" и вышли из цикла. следующие символы не попадут в переменную char')
    break
  }
  console.log('char', char)
}

const strArr = ['cnhjrb texta', 'cnhjr1b texta', 'cnhj2rb texta', 'cnh4jrb texta', 'c5nhjrb te6xta', ' 1 ']
console.log('ищем строку "1" в массиве '+strArr, strArr.includes(' 1 '))
for (let str of strArr) {
  console.log('ищем подстроку "1" в строке '+str, str.includes('1'))
}

// как работает includes в массиве
const arrIncludes = (arr:any[],findEl:any) => {
  for (let el of arr) {
    if (el===findEl) return true
  }
  return false
}
console.log(arrIncludes(strArr, ' 1 '))

// как работает includes в строке
const strIncludes = (str: string, subStr: string) => {
  for (let i=0; i<=(str.length-subStr.length); i++) {
    if (str.slice(i, i+subStr.length) === subStr) return true
  }
  return false
}
console.log(strIncludes('cnhjr1b texta', '1b'))

function powRecursive(x:number, n:number):number {
  // Условие выхода
  if (n == 1) {
    return x
  } else {
    console.log('x =',x,'n =',n)
    // Рекурсивная функция вызывает сама себя, пока не сработает условие выхода
    return x * powRecursive(x, n - 1)
  }
}
function pow2(x: number, n: number): number {
  return (n == 1) ? x : (x * pow2(x, n - 1))
}
console.log(powRecursive(2, 3)) // 8

// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
// Сделайте три варианта решения:

// С использованием цикла.
// Через рекурсию, т.к.sumTo(n) = n + sumTo(n - 1) for n > 1.
// С использованием формулы арифметической прогрессии.
// Пример работы вашей функции:


// P.S.Какой вариант решения самый быстрый ? Самый медленный ? Почему ?

// P.P.S.Можно ли при помощи рекурсии посчитать sumTo(100000) ?
// O(n)
function sumTo1(n: number) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
// O(n) Ограничение стека вызовов 10000
function sumTo2(n:number):number { 
  return n==0 ? n : n + sumTo2(n-1)
}
// O(1)
function sumTo3(n: number) {
  return n * (n + 1) / 2
}
console.log(sumTo3(100)) // 5050

// O(n2) Очень долгий метод через рекурсию
function fib(n: number): number {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2)
}

console.log(fib(3)) // 2
console.log(fib(7)) // 13

// O(n) Такой способ называется динамическое программирование снизу вверх.
function fib2(n:number) {
  let a = 1
  let b = 1
  for (let i = 3; i <= n; i++) {
    let c = a + b
    a = b
    b = c
  }
  return b
}

console.log(fib(3)) // 2
console.log(fib(7)) // 13
console.log(fib2(77)) // 5527939700884757

function fib4(): any {
  const fibObject = {} as any
  return function fib(n:number) {
    if (n <= 1) {
      return n
    } else {
      if (!fibObject[n]) {
        fibObject[n] = fib(n - 1) + fib(n - 2) 
      }
      return fibObject[n]
    } 
  } 
}

const fib3 = fib4()

console.log(fib3(7))
console.log(fib3(15))
console.log(fib3(25))
console.log(fib3(35))
console.log(fib3(45))
console.log(fib3(50))
console.log(fib3(55))
console.log(fib3(60))
console.log(fib3(65))
console.log(fib3(70))
console.log(fib3(110))

function reverseNumber(n: number, i: number = String(n).length-1):any {
  if (i == 0) {
    return String(n)[i]
  }
  return +(String(n)[i] + reverseNumber(n, --i))
  // return +([4] + reverseNumber(12354, 3) => [5] + reverseNumber(12354, 2) => [3] + reverseNumber(12354, 1) => [2] + reverseNumber(12354, 0) => [1])
}

console.log(reverseNumber(12354))

// ########### Методы массивов ###########

// Метод arr.splice(str) – это универсальный «швейцарский нож» для работы с массивами.Умеет всё: добавлять, удалять и заменять элементы.

// arr.splice(start[, deleteCount, elem1, ..., elemN])
// Он изменяет arr начиная с индекса start: удаляет deleteCount элементов и затем вставляет elem1, ..., elemN на их место.Возвращает массив из удалённых элементов.

const mainArr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"]
arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"]
// удалить 3 первых элемента и заменить их другими
arr = mainArr.slice()
arr.splice(0, 3, "Давай", "танцевать")
console.log(arr) // теперь ["Давай", "танцевать", "прямо", "сейчас"]

// Добавим новые элементы по индексу 3
arr = [...mainArr]
arr.splice(3, 0, "Давай", "танцевать")
console.log(arr) // теперь ["Я", "изучаю", "JavaScript", "Давай", "танцевать", "прямо", "сейчас"]

// Добавим новые элементы по индексу 3 через отрицательный индекс (-2)
arr = mainArr.slice()
arr.splice(-2, 0, "Давай", "танцевать")
console.log(arr) // теперь ["Я", "изучаю", "JavaScript", "Давай", "танцевать", "прямо", "сейчас"]

// Удалим первые 2 элемента
arr = [...mainArr]
const deleted = arr.splice(0, 2)
console.log('deleted', deleted) // ["Я", "изучаю"]
console.log(arr) // теперь ["JavaScript", "прямо", "сейчас"]

// Как происходит копирование через развёртывание (spred оператор)
console.log("Я", "изучаю", "JavaScript", "прямо", "сейчас")
console.log(...mainArr)
// То есть это создание нового массива с переписыванием всех значений разворачиваемого
arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"]
arr = [...mainArr]
arr = { ...mainArr } // Делаем из массива объект
console.log(arr)
arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"]
console.log('index', -1, arr[arr.length - 1])
console.log('index', -1, arr.at(-1))
console.log('index', -2, arr[arr.length - 2])
console.log('index', -2, arr.at(-2))

// Он возвращает новый массив, в который копирует все элементы с индекса start до end (не включая end). start и end могут быть отрицательными, в этом случае отсчёт позиции будет вестись с конца массива.

// Это похоже на строковый метод str.slice, но вместо подстрок возвращает подмассивы.
console.log('index', -2, arr.slice(-2)) // ["прямо", "сейчас"]
// То же самое, что spred. Создаём копию масиива
console.log(arr.slice())

// Метод arr.concat создаёт новый массив, в который копирует данные из других массивов и дополнительные значения.


// arr.concat(arg1, arg2...)
// Он принимает любое количество аргументов, которые могут быть как массивами, так и простыми значениями.

// В результате – новый массив, включающий в себя элементы из arr, затем arg1, arg2 и так далее.

// Если аргумент argN – массив, то копируются все его элементы.Иначе копируется сам аргумент.

arr = [1, 2]

// создать массив из: arr и [3,4]
console.log(arr.concat([3, 4])) // 1,2,3,4

// создать массив из: arr и [3,4] и [5,6]
console.log(arr.concat([3, 4], [5, 6])) // 1,2,3,4,5,6

// создать массив из: arr и [3,4], потом добавить значения 5 и 6
console.log(arr.concat([3, 4], 5, 6)) // 1,2,3,4,5,6

// Перебор: forEach
// Метод arr.forEach позволяет запускать функцию для каждого элемента массива.
arr = ["Бильбо", "Гэндальф", "Назгул"]
  // нужна точка с запятой, т.к. строка начинает с литерала массива
  ;["Бильбо", "Гэндальф", "Назгул"].forEach(function (item, index, array) {
    console.log(`У ${item} индекс ${index} в ${array}`)
  });
arr.forEach(logArrayElements)

function logArrayElements(value: any, i: number) {
  console.log(`У ${value} индекс ${i}`)
}

// indexOf / lastIndexOf и includes. Работатет точно так же как со строками
// У методов arr.indexOf и arr.includes одинаковый синтаксис и они делают по сути то же самое, что и их строковые аналоги, но работают с элементами вместо символов:

// arr.indexOf(item, from) ищет item начиная с индекса from и возвращает номер индекса, на котором был найден искомый элемент, в противном случае - 1.
// arr.includes(item, from) ищет item начиная с индекса from и возвращает true, если поиск успешен.
// Обычно эти методы используются только с одним аргументом: искомым item.По умолчанию поиск ведется с начала.

arr = [1, 0, false];

console.log(arr.indexOf(0)); // 1
console.log(arr.indexOf(false)); // 2
console.log(arr.indexOf(null)); // -1

console.log(arr.includes(1)); // true

// Обратите внимание, что методы используют строгое сравнение ===.Таким образом, если мы ищем false, он находит именно false, а не ноль.

// Если мы хотим проверить наличие элемента в массиве и нет необходимости знать его индекс, предпочтительно использовать arr.includes.

// Метод arr.lastIndexOf похож на indexOf, но ищет справа налево.

fruits = ['Яблоко', 'Апельсин', 'Яблоко']

console.log(fruits.indexOf('Яблоко')); // 0 (первый 'Яблоко')
console.log(fruits.lastIndexOf('Яблоко')); // 2 (последний 'Яблоко')
// Метод includes правильно обрабатывает NaN
// Незначительная, но заслуживающая внимания особенность includes – он правильно обрабатывает NaN, в отличие от indexOf:

arr = [NaN];
console.log(arr.indexOf(NaN)); // -1 (неверно, должен быть 0)
console.log(arr.includes(NaN));// true (верно)
// Это связано с тем, что includes был добавлен в JavaScript гораздо позже и использует более современный алгоритм сравнения.


// find и findIndex / findLastIndex Поиск объетов в массиве
// Представьте, что у нас есть массив объектов.Как нам найти объект с определённым условием ?

// let result = arr.find(function (item, index, array) {
// если true - возвращается текущий элемент и перебор прерывается
// если все итерации оказались ложными, возвращается undefined
// });
// Функция вызывается по очереди для каждого элемента массива:
// item – очередной элемент.
// index – его индекс.
// array – сам массив.

// Мы можем опускать index и array, если они нам не нужны

// Если функция возвращает true, поиск прерывается и возвращается item.Если ничего не найдено, возвращается undefined.

// Например, у нас есть массив пользователей, каждый из которых имеет поля id и name.Найдем пользователя с id == 1:

let usersArr = [
  { id: 1, name: "Вася" },
  { id: 2, name: "Петя" },
  { id: 3, name: "Маша" }
];

let userN = usersArr.find(item => item.id == 1);
// Опциональная цепочка необходима, чтобы не поймать ошибку, в случае, если элемент не найден и user=undefined
console.log(userN?.name); // Вася

// В реальной жизни массивы объектов – обычное дело, поэтому метод find крайне полезен.

// Обратите внимание, что в данном примере мы передаём find функцию item => item.id == 1 с одним аргументом.Это типично, другие аргументы этой функции используются редко.

// У метода arr.findIndex такой же синтаксис, но он возвращает индекс, на котором был найден элемент, а не сам элемент.Значение -1 возвращается, если ничего не найдено.

// Метод arr.findLastIndex похож на findIndex, но ищет справа налево, наподобие lastIndexOf.

usersArr = [
  { id: 1, name: "Вася" },
  { id: 2, name: "Петя" },
  { id: 3, name: "Маша" },
  { id: 4, name: "Вася" }
];

// Найти индекс первого Васи
console.log(usersArr.findIndex(user => user.name == 'Вася')); // 0

// Найти индекс последнего Васи
console.log(usersArr.findLastIndex(user => user.name == 'Вася')); // 3


// filter
// Метод find ищет один(первый) элемент, который заставит функцию вернуть true.

// Если найденных элементов может быть много, можно использовать arr.filter(fn).

// Синтаксис схож с find, но filter возвращает массив из всех подходящих элементов:

// let results = arr.filter(function (item, index, array) {
// если `true` -- элемент добавляется к results и перебор продолжается
// возвращается пустой массив в случае, если ничего не найдено
// });

usersArr = [
  { id: 1, name: "Вася" },
  { id: 2, name: "Петя" },
  { id: 3, name: "Маша" }
]

// возвращает массив, состоящий из двух первых пользователей
let someUsers = usersArr.filter(item => item.id < 3);

console.log(someUsers.length); // 2

// запись стрелочной функции поиска в виде обычной
const arrowF = (item: any) => item.id < 3
const arrowFTruelyReturn = (item: any) => { return item.id < 3 }
const regularF = function (item: any) { return item.id < 3 }

// Преобразование массива
// Методам преобразования и упорядочения массива.

// map
// Метод arr.map является одним из наиболее полезных и часто используемых.
// Он вызывает функцию для каждого элемента массива и возвращает массив результатов выполнения этой функции.

// let result = arr.map(function (item, index, array) {
// возвращается новое значение вместо элемента
// });
// Например, здесь мы преобразуем каждый элемент в его длину:
usersArr = [
  { id: 1, name: "Вася" },
  { id: 1, name: "вася" },
  { id: 2, name: "Петя" },
  { id: 3, name: "Маша" },
  { id: 4, name: "Артур" },
  { id: 5, name: "Dimon" },
]

let names = usersArr.map(item => item.name)
console.log(names)

// sort(fn)
// Вызов arr.sort() сортирует массив на месте, меняя в нём порядок элементов.
// Он также возвращает отсортированный массив, но обычно возвращаемое значение игнорируется, так как изменяется сам arr.

arr = [1, 2, 15];

// метод сортирует содержимое arr
arr.sort()
console.log(arr) // 1, 15, 2

// Порядок стал 1, 15, 2. Это неправильно.Но почему ?
// По умолчанию элементы сортируются как строки.
// Буквально, элементы преобразуются в строки при сравнении.Для строк применяется лексикографический порядок, и действительно выходит, что "2" > "15".
// Чтобы использовать наш собственный порядок сортировки, нам нужно предоставить функцию в качестве аргумента arr.sort().
// Функция должна для пары значений возвращать:
function compare(a: any, b: any) {
  if (a > b) return 1; // если первое значение больше второго
  if (a == b) return 0; // если равны
  if (a < b) return -1; // если первое значение меньше второго
  return -1
}
function reverseCompare(a: any, b: any) {
  if (a > b) return -1; // если первое значение больше второго
  if (a == b) return 0; // если равны
  if (a < b) return 1; // если первое значение меньше второго
  return 1
}
console.log(arr.sort(compare)) // Правильный метод сортировки чисел по возрастанию
console.log(arr.sort(reverseCompare)) // Правильный метод сортировки чисел по убыванию
console.log(names.sort())
console.log(names.sort((a, b) => a.localeCompare(b))) // Правильный метод сортировки строк по возрастанию
console.log(names.sort((a, b) => -a.localeCompare(b))) // Правильный метод сортировки строк по убыванию

// На самом деле от функции сравнения требуется любое положительное число, чтобы сказать «больше», и отрицательное число, чтобы сказать «меньше».
console.log(arr.sort(function (a, b) { return a - b })) // Короткий метод сортировки чисел по возрастанию
console.log(arr.sort(function (a, b) { return -a + b })) // Короткий метод сортировки чисел по убыванию
console.log(arr.sort((a, b) => -a + b))

// reverse
// Метод arr.reverse меняет порядок элементов в arr на обратный.
// Можно не писать метод обратной сортировки, а просто перевернуть отсортированный массив
console.log(names.reverse())
// Он также возвращает массив arr с изменённым порядком элементов.

// split и join
// Ситуация из реальной жизни.Мы пишем приложение для обмена сообщениями, и посетитель вводит имена тех, кому его отправить, через запятую: Вася, Петя, Маша.Но нам - то гораздо удобнее работать с массивом имён, чем с одной строкой.Как его получить ?

// Метод str.split(delim) именно это и делает.Он разбивает строку на массив по заданному разделителю delim.

// В примере ниже таким разделителем является строка из запятой и пробела.

let namesStr = 'Вася, Петя, Маша'

arr = namesStr.split(', ')

console.log(arr)

// У метода split есть необязательный второй числовой аргумент – ограничение на количество элементов в массиве.Если их больше, чем указано, то остаток массива будет отброшен.На практике это редко используется:

arr = 'Вася, Петя, Маша, Саша'.split(', ', 2)

console.log(arr) // Вася, Петя

// Разбивка по буквам
// Вызов split(s) с пустым аргументом s разбил бы строку на массив букв:

str = "тест"
console.log(str.split('')) // т,е,с,т

// Вызов arr.join(glue) делает в точности противоположное split.Он создаёт строку из элементов arr, вставляя glue между ними.

arr = ['Вася', 'Петя', 'Маша']

str = arr.join(';') // объединить массив в строку через ;

console.log(str) // Вася;Петя;Маша

// reduce / reduceRight
// Когда нам нужно перебрать массив – мы можем использовать forEach, for или for..of.
// Когда нам нужно перебрать массив и вернуть данные для каждого элемента – мы можем использовать map.

// Методы arr.reduce и arr.reduceRight похожи на методы выше, но они немного сложнее.Они используются для вычисления единого значения на основе всего массива.

// let value = arr.reduce(function (accumulator, item, index, array) {
// ...
// }, [initial]);
// Функция применяется по очереди ко всем элементам массива и «переносит» свой результат на следующий вызов.

// Аргументы:
// accumulator – результат предыдущего вызова этой функции, равен initial при первом вызове(если передан initial),
// item – очередной элемент массива,
// index – его позиция,
// array – сам массив.
// При вызове функции результат её предыдущего вызова передаётся на следующий вызов в качестве первого аргумента.

// Так, первый аргумент является по сути аккумулятором, который хранит объединённый результат всех предыдущих вызовов функции.По окончании он становится результатом reduce.

// Тут мы получим сумму всех элементов массива одной строкой:

arr = [1, 2, 3, 4, 5]

let resultN = arr.reduce((sum, current) => sum + current, 0)

console.log(resultN) // 15
// Функция, переданная в reduce, использует только два аргумента, этого обычно достаточно.

// Разберём детально как это работает.

// При первом запуске sum равен initial(последний аргумент reduce), то есть 0, а current – первый элемент массива, равный 1. Таким образом, результат функции равен 1.
// При втором запуске sum = 1, к нему мы добавляем второй элемент массива(2) и возвращаем.
// При третьем запуске sum = 3, к которому мы добавляем следующий элемент, и так далее…

// Мы также можем опустить начальное значение:

arr = [1, 2, 3, 4, 5]

// убрано начальное значение (нет 0 в конце)
resultN = arr.reduce((sum, current) => sum + current)
console.log(resultN) // 15

// Результат – точно такой же! Это потому, что при отсутствии initial в качестве первого значения берётся первый элемент массива, а перебор стартует со второго.

// Но такое использование требует крайней осторожности.Если массив пуст, то вызов reduce без начального значения выдаст ошибку.

// Вот пример:
arr = []

// Error: Reduce of empty array with no initial value
// если бы существовало начальное значение, reduce вернул бы его для пустого массива.
// arr.reduce((sum, current) => sum + current)
// Поэтому рекомендуется всегда указывать начальное значение.
// Метод arr.reduceRight работает аналогично, но проходит по массиву справа налево.

// Array.isArray
// Массивы не образуют отдельный тип языка.Они основаны на объектах.
// Поэтому typeof не может отличить простой объект от массива:

console.log(typeof {}); // object
console.log(typeof []); // тоже object

// …Но массивы используются настолько часто, что для этого придумали специальный метод: Array.isArray(value).Он возвращает true, если value массив, и false, если нет.

console.log(Array.isArray({})); // false
console.log(Array.isArray([])); // true

// Большинство методов поддерживают «thisArg»
// Почти все методы массива, которые вызывают функции – такие как find, filter, map, за исключением метода sort, принимают необязательный параметр thisArg.

// Этот параметр не объяснялся выше, так как очень редко используется, но для наиболее полного понимания темы мы обязаны его рассмотреть.
// Вот полный синтаксис этих методов:

// arr.find(func, thisArg);
// arr.filter(func, thisArg);
// arr.map(func, thisArg);
// ...
// thisArg -- необязательный последний аргумент
// Значение параметра thisArg становится this для func.
// Например, тут мы используем метод объекта army как фильтр, и thisArg передаёт ему контекст:

let army = {
  minAge: 18,
  maxAge: 27,
  canJoin(user: any) {
    return user.age >= this.minAge && user.age < this.maxAge;
  }
};

let users = [
  { age: 16 },
  { age: 20 },
  { age: 23 },
  { age: 30 }
];

// найти пользователей, для которых army.canJoin возвращает true
let soldiers = users.filter(army.canJoin, army);

console.log(soldiers.length); // 2
console.log(soldiers[0].age); // 20
console.log(soldiers[1].age); // 23

// Если бы мы в примере выше использовали просто users.filter(army.canJoin), то вызов army.canJoin был бы в режиме отдельной функции, с this = undefined.Это тут же привело бы к ошибке.

// Вызов users.filter(army.canJoin, army) можно заменить на users.filter(user => army.canJoin(user)), который делает то же самое.Последняя запись используется даже чаще, так как функция - стрелка более наглядна.


//  ################ Итого ################
// Шпаргалка по методам массива:

// Для добавления / удаления элементов:

// push(...items) – добавляет элементы в конец,
// pop() – извлекает элемент с конца,
// shift() – извлекает элемент с начала,
// unshift(...items) – добавляет элементы в начало.
// splice(pos, deleteCount, ...items) – начиная с индекса pos удаляет deleteCount элементов и вставляет items.
// slice(start, end) – создаёт новый массив, копируя в него элементы с индекса start до end(не включая end).
// concat(...items) – возвращает новый массив: копирует все члены текущего массива и добавляет к нему items.Если какой - то из items является массивом, тогда берутся его элементы.

// Для поиска среди элементов:

// indexOf / lastIndexOf(item, pos) – ищет item, начиная с позиции pos, и возвращает его индекс или - 1, если ничего не найдено.
// includes(value) – возвращает true, если в массиве имеется элемент value, в противном случае false.
// find / filter(func) – фильтрует элементы через функцию и отдаёт первое / все значения, при прохождении которых через функцию возвращается true.
// findIndex похож на find, но возвращает индекс вместо значения.
// Для перебора элементов:

// forEach(func) – вызывает func для каждого элемента.Ничего не возвращает.
// Для преобразования массива:

// map(func) – создаёт новый массив из результатов вызова func для каждого элемента.
// sort(func) – сортирует массив «на месте», а потом возвращает его.
// reverse() – «на месте» меняет порядок следования элементов на противоположный и возвращает изменённый массив.
// split / join – преобразует строку в массив и обратно.
// reduce / reduceRight(func, initial) – вычисляет одно значение на основе всего массива, вызывая func для каждого элемента и передавая промежуточный результат между вызовами.

// Дополнительно:
// Array.isArray(arr) проверяет, является ли arr массивом.
// Пожалуйста, обратите внимание, что методы sort, reverse и splice изменяют исходный массив.

// Эти методы – самые используемые, их достаточно в 99 % случаев.Но существуют и другие:

// arr.some(fn) / arr.every(fn) проверяет массив.

// Функция fn вызывается для каждого элемента массива аналогично map.Если какие - либо / все результаты вызовов являются true, то метод возвращает true, иначе false.

// Эти методы ведут себя примерно так же, как операторы || и &&: если fn возвращает истинное значение, arr.some() немедленно возвращает true и останавливает перебор остальных элементов; если fn возвращает ложное значение, arr.every() немедленно возвращает false и также прекращает перебор остальных элементов.

// Мы можем использовать every для сравнения массивов:

function arraysEqual(arr1: any, arr2: any) {
  return arr1.length === arr2.length && arr1.every((value: any, index: number) => value === arr2[index]);
}

console.log(arraysEqual([1, 2], [1, 2])); // true

// arr.fill(value, start, end) – заполняет массив повторяющимися value, начиная с индекса start до end.

// arr.copyWithin(target, start, end) – копирует свои элементы, начиная с позиции start и заканчивая end, в себя, на позицию target(перезаписывая существующие).

// arr.flat(depth) / arr.flatMap(fn) создаёт новый плоский массив из многомерного массива.

// Полный список есть в справочнике MDN.

// На первый взгляд может показаться, что существует очень много разных методов, которые довольно сложно запомнить.Но это гораздо проще, чем кажется.

// Внимательно изучите шпаргалку, представленную выше, а затем, чтобы попрактиковаться, решите задачи, предложенные в данной главе.Так вы получите необходимый опыт в правильном использовании методов массива.

// Всякий раз, когда вам будет необходимо что - то сделать с массивом, а вы не знаете, как это сделать – приходите сюда, смотрите на таблицу и ищите правильный метод.Примеры помогут вам всё сделать правильно, и вскоре вы быстро запомните методы без особых усилий.


const calculator = {
  methods: {
    "-": (a: number, b:number) => a - b,
    "+": (a: number, b: number) => a + b,
  } as Record<string,any>,
  calculate: function (str:string) {
    let split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2]
    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN
    }
    return this.methods[op](a, b)
  },
  addMethod: function (name:string, func:any) {
    this.methods[name] = func
  }
}

calculator.addMethod("*", (a: number, b: number) => a * b)
calculator.addMethod("/", (a: number, b: number) => a / b)
calculator.addMethod("**", (a: number, b: number) => a ** b)
console.log(calculator.calculate("2 ** 3"))
console.log(calculator.calculate("two plus 3"))

let company = {
  menegment:[{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 600 }],
  sales: {
    market:[{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 600 }],
    calls:[{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 600 }],
  },
  development: {
    sites: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }],
    internals: {
      'c++':[{ name: 'Jack', salary: 1300 }],
      'python':[{ name: 'Jack', salary: 1300 }],
    }
  }
};

// Функция для подсчёта суммы зарплат
function sumSalaries(department:any) {
  if (Array.isArray(department)) { 
    const sum = department.reduce((prev, current) => prev + current.salary, 0) // сумма зарплат
    return sum
  } else { 
    let sum = 0
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep) // рекурсивно вызывается для подотделов, суммируя результаты
    }
    console.log('Сумма по подразделению', department, sum)
    return sum
  }
}

// стек 2 массив продажников, sum = 0
// стек 1 весь Объект, sum = 0

console.log(sumSalaries(company))

const student1 = { name: 'dasa', age: 35, askQuestion(text:string) { alert(text)}}
const student2 = { name: 'dasa2', age: 35, askQuestion(text: string) { alert(text)}}

console.log(student1)
console.log(student2)

const Student = (function (this:any, name:string, age:number) {
  // this = {};  (неявно)

  // добавляет свойства к this
  this.name = name
  this.age = age
  this.askQuestion = function (text:string) { alert(text) }
  
  // return this;  (неявно)
}) as any

const student3 = new Student('sdhgfik3', 15)
const student4 = new Student('sdhgfik4', 25)

console.log(student3)
console.log(student4)

class Student1 {
  name = ''
  age = 0
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  askQuestion = function(text:string) { alert(text) }
}

const student5 = new Student1('sdfsd',54)
console.log(student5)

// Реализовать класс PrintMaсhine, которой состоит из:
// ■ размера шрифта;
// ■ цвета шрифта;
// ■ семейства шрифта;
// ■ метода print(), который принимает текст и печатает его
// соответствующим шрифтом с помощью document.write().
// Создать объект такого класса и продемонстрировать работу
// метода.

// Мы получаем div.forPrintMachine, в который будем выводить html
const divForPrintMachine = document.querySelector('.forPrintMachine')

class PrintMaсhine {
  size = 14
  color = 'red'
  font = 'Arial'
  tag = 'p'
  constructor(size:number,color:string, font:string, tag:string='p') {
    this.size = size
    this.color = color
    this.font = font
    this.tag = tag
  }
  print(text:string) {
    // проверяем, что div.forPrintMachine действительно существует на странице
    if (divForPrintMachine) {
      // добавляем во внуктренний html блока div.forPrintMachine новые данные
      divForPrintMachine.innerHTML += `<${this.tag} style="font-size:${this.size}; color: ${this.color}; font-family:${this.font}">${text}</${this.tag}>`
    }
  }
}

// класс - это функция
console.log(typeof PrintMaсhine) // function

// ...или, если точнее, это метод constructor
console.log(PrintMaсhine === PrintMaсhine.prototype.constructor) // true

// Методы находятся в PrintMaсhine.prototype, например:
console.log(PrintMaсhine.prototype.print)

// в прототипе ровно 2 метода
console.log(Object.getOwnPropertyNames(PrintMaсhine.prototype)) // constructor, print


function PM(size: number, color: string, font: string, tag: string = 'p'): any {
  return function print (text: string) {
    document.write(`<${tag} style="font-size:${size}; color: ${color}; font-family:${font}">${text}</${tag}>`)
  }
}

const rPA14 = PM(14, 'red', 'Arial')
rPA14('sfdsfsdfwerwersdf sdfds fsdfs')

const bHT16 = PM(16, 'blue', 'Tahoma', 'h1')
bHT16('sdfsdfjwiooiwe nkuhyiuo hfsd')

const redParagraphArial14 = new PrintMaсhine(14, 'red', 'Arial')
const blueHeaderTahoma16 = new PrintMaсhine(16, 'blue', 'Tahoma', 'h1')

blueHeaderTahoma16.tag = 'h2'
blueHeaderTahoma16.print('sdfhsdkjfhsdk kjh ksjfdh sdk')
redParagraphArial14.print('fsddsfdsfsd')

;[0,1,2].forEach((el)=>{
  // console.log(el)
})

function forEach(arr:any[], fn:Function) {
  for (let i=0;i<arr.length;i++) {
    fn(arr[i],i,arr)
  }
}


// ######### Prototype #########

let animal = {
  eats: true,
  eat() {
    console.log('am-am-am')
  },
  walk() {
    console.log('top-top')
  }
} as any

let rabbit = {
  __proto__: animal,
  walk() {
    console.log('jump-jump')
  },
} as any

// Скрыли свойство jumps из for..in
Object.defineProperty(rabbit, "jumps", {
  enumerable: false,
  configurable: true,
  writable: true,
  value: true
})

let longEar = {
  earLength: 10,
  __proto__: rabbit
} as any

// rabbit.__proto__ = animal // (*)

// теперь мы можем найти оба свойства в rabbit:
console.log('rabbit.eats', rabbit.eats) // true (**)
console.log('rabbit.jumps', rabbit.jumps) // true
rabbit.eat()
rabbit.walk()
console.log('rabbit', rabbit)
console.log('longEar', longEar)
longEar.eat()

// Object.keys возвращает только собственные ключи
console.log('rabbit keys', Object.keys(rabbit)) // walk
console.log('rabbit jumps', rabbit.jumps) // true

// for..in проходит и по своим, и по унаследованным ключам
for (let prop in longEar) console.log(prop) // jumps, walk, eats, eat

for (let prop in rabbit) {
  let isOwn = rabbit.hasOwnProperty(prop)

  if (isOwn) {
    console.log(`Собственное свойство: ${prop}`)
  } else {
    console.log(`Унаследованное: ${prop}`)
  }
}

let userO = {
  name: "John",
  surname: "Smith",

  set fullName(value) {
    this.name = value.split(" ")[0]
    this.surname = value.split(" ")[1]
  },

  get fullName() {
    return `${this.name} ${this.surname}`;
  }
} as any

let admin = {
  __proto__: userO,
  isAdmin: true,
} as any

console.log({...admin}) 
console.log(admin.fullName) // John Smith (*)

// срабатывает сеттер!
admin.fullName = "Alice Cooper Z1000" // (**)
console.log(admin.name) // Alice
console.log(admin.surname) // Cooper
console.log(admin.fullName) 
console.log(admin) 

animal = {
  eats: true
}
let newAnimal = {
  breth: true
}
/**
 * Функция-конструктор кролика
 * @argument name:string - имя
 */
const Rabbit = (function (this:any, name:string) {
  this.name = name
}) as any

// Не перезаписываем Rabbit.prototype полностью,
// а добавляем к нему свойство
Rabbit.prototype.jumps = true
// Прототип по умолчанию сохраняется, и мы всё ещё имеем доступ к Rabbit.prototype.constructor

// Или мы можем заново создать свойство constructor:
Rabbit.prototype = {
  jumps: true,
  constructor: Rabbit
}

// теперь свойство constructor снова корректное, так как мы добавили его

/* прототип по умолчанию
Rabbit.prototype = { constructor: Rabbit };
*/
let defaultRabbit = new Rabbit('Dooglas') // наследует от {constructor: Rabbit}
console.log('defaultRabbit',defaultRabbit)
console.log('defaultRabbit.constructor == Rabbit',defaultRabbit.constructor == Rabbit) // true (свойство получено из прототипа)

// Мы можем использовать свойство constructor существующего объекта для создания нового
let rabbit2 = new defaultRabbit.constructor("Black Rabbit")
console.log('rabbit2', rabbit2)
// Это удобно, когда у нас есть объект, но мы не знаем, какой конструктор использовался для его создания (например, он мог быть взят из сторонней библиотеки), а нам необходимо создать ещё один такой объект

Rabbit.prototype = animal
rabbit = new Rabbit("White Rabbit") //  rabbit.__proto__ == animal
Rabbit.prototype = newAnimal
let newRabbit = new Rabbit("mr Black")  //  NewRabbit.__proto__ == newAnimal

let superNewRabbit = new newRabbit.constructor("New") // Из-за присваивания прототипа произошла потеря конструктора, получили строку
console.log('superNewRabbit', superNewRabbit) // true

console.log('rabbit',rabbit) // true
console.log('rabbit.eats',rabbit.eats) // true
console.log('newRabbit', newRabbit) // undefined
console.log('newRabbit.eats',newRabbit.eats) // undefined
console.log('newRabbit.breth',newRabbit.breth) // true

console.log(new String('sfsdfsd'))

let obj = {}

console.log(obj) // true
// @ts-ignore
console.log(obj.__proto__ === Object.prototype) // true
// obj.toString === obj.__proto__.toString === Object.prototype.toString

arr = [1, 2, 3]
console.log(arr)

// наследует ли от Array.prototype?
// @ts-ignore
console.log(arr.__proto__ === Array.prototype); // true

// затем наследует ли от Object.prototype?
// @ts-ignore
console.log(arr.__proto__.__proto__ === Object.prototype); // true

// и null на вершине иерархии
// @ts-ignore
console.log(arr.__proto__.__proto__.__proto__); // null

// ?############# Описание объектов, методов JSDoc ##############
// https://jsdoc.app/index.html

/**
 * Объект с числом и методом
 */
const myObj = {
  /**
   * @argument
   * Просто число
   */
  a: 10,
  /**
   * @method
   * Увеличивает a на 1
   */
  count() {
    this.a++
  }
}

myObj.count()
myObj.a
console.log(myObj)


/**
 * @method
 * Тут можем создать описание функции
*
* @param {string} this - так описываются параметры. Т.к. это метод, опишем только this, который передавать не нужно
*/
// @ts-ignore
String.prototype.reverse = function (this: string) {
  return this.split('').reverse().join('')
}
// @ts-ignore
console.log('sffgdfgdfg'.reverse())


// @ts-ignore
String.prototype.show = function () {
  console.log(this)
}

// @ts-ignore
"BOOM!".show() // BOOM!

// Заимствование у прототипов

// Например, если мы создаём объект, похожий на массив(псевдомассив), мы можем скопировать некоторые методы из Array в этот объект.

const ArrayLikeObj:any = {
  0: "Hello",
  1: "world!",
  length: 2,
}

// ArrayLikeObj.__proto__.join = Array.prototype.join
// console.log(ArrayLikeObj.join(',')) // Hello,world!
// console.log(ArrayLikeObj)

// Унаследовали все методы массива
ArrayLikeObj.__proto__ = Array.prototype
ArrayLikeObj.push('New')
console.log(ArrayLikeObj.join(',')) // Hello,world!,New
console.log(ArrayLikeObj)

// Заимствование методов – гибкий способ, позволяющий смешивать функциональность разных объектов по необходимости


// Синтаксис «class»

class MyClass {
  prop = 'value' // свойство
  constructor() { // конструктор
    // ...
  }
  method() { } // метод
  get something() { return } // геттер (должен обязательно возвращать значение)
  set something(val) { } // сеттер (Должен быть ровно один параметр)
  [Symbol.iterator]() { } // метод с вычисляемым именем (здесь - символом)
  // ...
}

class EmptyClass {}
console.log(EmptyClass)


const Clock = (function (this: any, { template }:any) {
  
    let timer: any
  
    function render() {
    
      let date = new Date()
  
      let hours = date.getHours()
      let hoursStr = hours < 10 ? '0' + hours : hours
  
      let mins = date.getMinutes()
      let minsStr = mins < 10 ? '0' + mins : mins
  
      let secs = date.getSeconds()
      let secsStr = secs < 10 ? '0' + secs : secs
  
      let output = template
        .replace('h', hoursStr)
        .replace('m', minsStr)
        .replace('s', secsStr)
  
      console.log(output)
    }
  
    this.stop = function() {
      clearInterval(timer)
    }
  
    this.start = function() {
      render()
      timer = setInterval(render, 1000)
    }
  
  }) as any
  
  let clock = new Clock({template: 'h:m:s'})
  // clock.start()

const startButton = document.getElementById('start')
const stopButton = document.getElementById('stop')
class MyClock {
  timerElement = document.getElementById('timer')
  template
  constructor({ template }: any) {
    this.template = template
  }

  timer: any

  render() {

    let date = new Date()

    let hours = date.getHours()
    let hoursStr = hours < 10 ? '0' + hours : hours

    let mins = date.getMinutes()
    let minsStr = mins < 10 ? '0' + mins : mins

    let secs = date.getSeconds()
    let secsStr = secs < 10 ? '0' + secs : secs

    let output = this.template
      .replace('h', hoursStr)
      .replace('m', minsStr)
      .replace('s', secsStr)

    if (this.timerElement) this.timerElement.innerText = output
  }

  stop() {
    clearInterval(this.timer)
  }

  start() {
    this.render()
    this.timer = setInterval(()=>{this.render()}, 1000)
  }

}

class ExtendedMyClock extends MyClock {
  precision
  constructor({ template }: any, precision:number = 1000) {
    super({ template })
    this.precision = precision
  }
  start() {
    this.render()
    this.timer = setInterval(() => { this.render() }, this.precision)
  }
}

clock = new ExtendedMyClock({ template: 'h:m:s' })
startButton?.addEventListener('click', () => { clock.start() })
stopButton?.addEventListener('click', () => { clock.stop() })


class Animal {
  speed
  name
  constructor(name:string) {
    this.speed = 0;
    this.name = name;
  }
  run(speed:number) {
    this.speed = speed;
    console.log(`${this.name} бежит со скоростью ${this.speed}.`);
  }
  stop() {
    this.speed = 0;
    console.log(`${this.name} стоит неподвижно.`);
  }
}

animal = new Animal("Мой питомец");

class RabbitClass extends Animal {
  maxSpeed
  constructor(name: string, maxSpeed:number) {
    super(name)
    this.maxSpeed = maxSpeed
  }
  hide() {
    console.log(`${this.name} прячется!`);
  }
  stop() {
    super.stop(); // вызываем родительский метод stop
    this.hide(); // и затем hide
  }
}

rabbit = new RabbitClass("Белый кролик",15);

console.log(rabbit)
rabbit.run(5); // Белый кролик бежит со скоростью 5.
rabbit.stop(); // Белый кролик прячется!

class Animal1 {
  name = 'animal';
  // 1 место для аргументов
  // 2 место для конструктора
  constructor() {
    console.log(this.name); // (*)
  }
  // 3 место для методов
}

class Rabbit1 extends Animal1 {
  // генерируется для классов-потомков, у которых нет своего конструктора
  // constructor(...args) {
  //   super(...args);
  //   this доступен на этой строке, поэтому в конструкторе родителя будет обращение к его собственному this.name 
  // }
  name = 'rabbit';
}

console.log(new Animal1()); // animal
console.log(new Rabbit1()); // animal

let testObj = {
  a: 10,
  b: 18,
  showA() {
    console.log('this', this)
    console.log('this == testObj', this == testObj)
    console.log('this.a', this.a)
    console.log('this.b', this.b)
    console.log('this.a + this.b', this.a + this.b)
  }
}

testObj.showA()

function showThisCoords(this:any) {
  console.log('this', this)
  if (this) console.log(`(${this.x},${this.y})`)
}

showThisCoords()

const coord1 = { 
  x: 0, 
  y: 1, 
  sc: showThisCoords
}
const coord2 = { x: 10, y: -1, sc: showThisCoords }
const coord3 = { 
  x: 1000, 
  y: 152, 
  sc: showThisCoords
}
const coord4 = { 
  x: 540, 
  y: 81, 
  sc: showThisCoords
}
coord1.sc()
coord2.sc()
coord3.sc()
coord4.sc()

// Итого
// Чтобы унаследовать от класса: class Child extends Parent:
//   При этом Child.prototype.__proto__ будет равен Parent.prototype, так что методы будут унаследованы.
// При переопределении конструктора:
//   Обязателен вызов конструктора родителя super() в конструкторе Child до обращения к this.
// При переопределении другого метода:
//   Мы можем вызвать super.method() в методе Child для обращения к методу родителя Parent.
// Внутренние детали:
//   Методы запоминают свой объект во внутреннем свойстве[[HomeObject]].Благодаря этому работает super, он в его прототипе ищет родительские методы.
// !Работает только для методов записаных как method() {}
// !Не работает для для методов записаных как method: function() {}
// Поэтому копировать метод, использующий super, между разными объектами небезопасно.
//     Также:

//   У функций-стрелок нет своего this и super, поэтому они «прозрачно» встраиваются во внешний контекст.

// ?Статические свойства и методы
// Мы также можем присвоить метод самому классу.Такие методы называются статическими.

// В объявление класса они добавляются с помощью ключевого слова static, например:

class StaticUser {
  static staticMethod() {
    console.log(this === StaticUser)
  }
}

StaticUser.staticMethod() // true
// Это фактически то же самое, что присвоить метод напрямую как свойство функции:

class StaticUser2 { }

StaticUser2.staticMethod = function () {
  console.log(this === StaticUser2)
}
StaticUser2.staticMethod()

// Статические свойства
// Новая возможность
// Эта возможность была добавлена в язык недавно.Примеры работают в последнем Chrome.
// Статические свойства также возможны, они выглядят как свойства класса, но с static в начале:

class Article {
  static publisher = "Илья Кантор"
}

console.log(Article.publisher) // Илья Кантор
// Это то же самое, что и прямое присваивание Article:
// Article.publisher = "Илья Кантор"

class Book {
  title
  static count = 0
  constructor(title:string) {
    this.title = title
    Book.count++
  }
  static getCount() {
    return `На полке ${this.count} книги`
  }
  static burnBookByTitle(title:string, arr:Book[]) {
    const index = arr.findIndex(el=> el.title == title)
    arr[index].burn()
    arr.splice(index, 1)
  }
  burn() {
    Book.count--
  }
}

const shelter = [
  new Book('1'),
  new Book('2'),
  new Book('3'),
  new Book('4'),
]

console.log(Book.count)
console.log(Book.getCount())

Book.burnBookByTitle('3', shelter)

console.log(shelter)
console.log(Book.count)
console.log(Book.getCount())

// Итого
// Статические методы используются для функциональности, принадлежат классу «в целом», а не относятся к конкретному объекту класса.

// Например, метод для сравнения двух статей Article.compare(article1, article2) или фабричный метод Article.createTodays().

// В объявлении класса они помечаются ключевым словом static.

// Статические свойства используются в тех случаях, когда мы хотели бы сохранить данные на уровне класса, а не какого - то одного объекта.

// Статические свойства и методы наследуются.

// Для class B extends A прототип класса B указывает на A: B.[[Prototype]] = A.Таким образом, если поле не найдено в B, поиск продолжается в A.

// Создаём и описываем новый html-элемент
const myNewDiv = document.createElement('div')
myNewDiv.className = 'aaa bbb'
myNewDiv.setAttribute('style','color:green')
myNewDiv.innerText = 'div созданный в js'
myNewDiv.addEventListener('click', ()=>{alert('hello')})

// Добавляем в уже существующий элемент
divForPrintMachine?.appendChild(myNewDiv)


// !Дата и время

// Объект Date.Он содержит дату и время, а также предоставляет методы управления ими.

// Например, его можно использовать для хранения времени создания / изменения, для измерения времени или просто для вывода текущей даты

// Создание
// Для создания нового объекта Date нужно вызвать конструктор new Date() с одним из следующих аргументов:

// !new Date()
// Без аргументов – создать объект Date с текущими датой и временем:

let now = new Date();
console.log(now); // показывает текущие дату и время

// !new Date(milliseconds)
// Создать объект Date с временем, равным количеству миллисекунд(тысячная доля секунды), прошедших с 1 января 1970 года UTC + 0.

// ?0 соответствует 01.01.1970 UTC+0
let Jan01_1970 = new Date(0);
console.log(Jan01_1970);

// теперь добавим 24 часа и получим 02.01.1970 UTC+0
let Jan02_1970 = new Date(24 * 3600 * 1000);
console.log(Jan02_1970);

// Целое число, представляющее собой количество миллисекунд, прошедших с начала 1970 года, называется таймстамп(англ.timestamp).

// Это – легковесное численное представление даты.Из таймстампа всегда можно получить дату с помощью new Date(timestamp) и преобразовать существующий объект Date в таймстамп, используя метод date.getTime()

// ?Датам до 1 января 1970 будут соответствовать отрицательные таймстампы, например:

// 31 декабря 1969 года
let Dec31_1969 = new Date(-24 * 3600 * 1000);
console.log(Dec31_1969);

// !new Date(datestring)
// Если аргумент всего один, и это строка, то из неё «прочитывается» дата.

let date = new Date("2017-01-26");
console.log(date);
// Время не указано, поэтому оно ставится в полночь по Гринвичу и
// меняется в соответствии с часовым поясом места выполнения кода
// Так что в результате можно получить
// Thu Jan 26 2017 11:00:00 GMT+1100 (восточно-австралийское время)
// или
// Wed Jan 25 2017 16:00:00 GMT-0800 (тихоокеанское время)

// !new Date(year, month, date, hours, minutes, seconds, ms)
// Создать объект Date с заданными компонентами в местном часовом поясе.Обязательны только первые два аргумента.

// ?year должен состоять из четырёх цифр.Для совместимости также принимаются 2 цифры и рассматриваются как 19xx, к примеру, 98 здесь это тоже самое, что и 1998, но настоятельно рекомендуется всегда использовать 4 цифры.
// ?month начинается с 0(январь) по 11(декабрь).
// ?Параметр date здесь представляет собой день месяца.Если параметр не задан, то принимается значение 1.
// ?Если параметры hours / minutes / seconds / ms отсутствуют, их значением становится 0.

new Date(2011, 0, 1, 0, 0, 0, 0); // // 1 Jan 2011, 00:00:00
new Date(2011, 0, 1); // то же самое, так как часы и проч. равны 0
// Максимальная точность – 1 мс(до 1 / 1000 секунды):

date = new Date(2011, 0, 1, 2, 3, 4, 567);
console.log(date); // 1.01.2011, 02:03:04.567

// !Получение компонентов даты
// Существуют методы получения года, месяца и т.д.из объекта Date:

// Получить год(4 цифры)
console.log(date.getFullYear()) // 2011
// Получить месяц, от 0 до 11.
console.log(date.getMonth()) // 0
// Получить день месяца, от 1 до 31, что несколько противоречит названию метода.
console.log(date.getDate()) // 1
  
// ?getHours(), getMinutes(), getSeconds(), getMilliseconds()
// Получить, соответственно, часы, минуты, секунды или миллисекунды.
// !Никакого getYear().Только getFullYear()
// Многие интерпретаторы JavaScript реализуют нестандартный и устаревший метод getYear(), который порой возвращает год в виде двух цифр.Пожалуйста, обходите его стороной.Если нужно значение года, используйте getFullYear().

// Кроме того, можно получить определённый день недели:

console.log(date.getDay())
// Вернуть день недели от 0(воскресенье) до 6(суббота).Несмотря на то, что в ряде стран за первый день недели принят понедельник, в JavaScript начало недели приходится на воскресенье.
// Все вышеперечисленные методы возвращают значения в соответствии с местным часовым поясом.

// ?Однако существуют и их UTC - варианты, возвращающие день, месяц, год для временной зоны UTC + 0: getUTCFullYear(), getUTCMonth(), getUTCDay().Для их использования требуется после "get" подставить "UTC".

// Для заданной даты возвращает таймстамп – количество миллисекунд, прошедших с 1 января 1970 года UTC + 0.
console.log(date.getTime())

// Возвращает разницу в минутах между UTC и местным часовым поясом:
console.log(date.getTimezoneOffset())

// если вы в часовом поясе UTC-1, то выводится 60
// если вы в часовом поясе UTC+3, выводится -180
console.log(new Date().getTimezoneOffset());
// Установка компонентов даты
// Следующие методы позволяют установить компоненты даты и времени:

// setFullYear(year, [month], [date])
// setMonth(month, [date])
// setDate(date)
// setHours(hour, [min], [sec], [ms])
// setMinutes(min, [sec], [ms])
// setSeconds(sec, [ms])
// setMilliseconds(ms)
// setTime(milliseconds)(устанавливает дату в виде целого количества миллисекунд, прошедших с 01.01.1970 UTC)
// У всех этих методов, кроме setTime(), есть UTC - вариант, например: setUTCHours().

// Как мы видим, некоторые методы могут устанавливать сразу несколько компонентов даты, например: setHours.Если какая - то компонента не указана, она не меняется.

let today = new Date();

today.setHours(0);
console.log(today); // выводится сегодняшняя дата, но значение часа будет 0

today.setHours(0, 0, 0, 0);
console.log(today); // всё ещё выводится сегодняшняя дата, но время будет ровно 00:00:00.

// !Автоисправление даты
// Автоисправление – это очень полезная особенность объектов Date.Можно устанавливать компоненты даты вне обычного диапазона значений, а объект сам себя исправит.

date = new Date(2013, 0, 32); // 32 Jan 2013 ?!?
console.log(date); // ...1st Feb 2013!

// Неправильные компоненты даты автоматически распределяются по остальным.

// Предположим, нам требуется увеличить дату «28 февраля 2016» на два дня.В зависимости от того, високосный это год или нет, результатом будет «2 марта» или «1 марта». Нам об этом думать не нужно.Просто прибавляем два дня.Объект Date позаботится об остальном:

date = new Date(2016, 1, 28);
date.setDate(date.getDate() + 2);

console.log(date); // 1 Mar 2016

// Эту возможность часто используют, чтобы получить дату по прошествии заданного отрезка времени.Например, получим дату «спустя 70 секунд с текущего момента»:

date = new Date();
date.setSeconds(date.getSeconds() + 70);

console.log(date); // выводит правильную дату

// Также можно установить нулевые или даже отрицательные значения.Например:
date = new Date(2016, 0, 2); // 2 Jan 2016

date.setDate(1); // задать первое число месяца
console.log(date);

date.setDate(0); // первый день месяца -- это 1, так что выводится последнее число предыдущего месяца
console.log(date); // 31 Dec 2015

// Преобразование к числу, разность дат
// Если объект Date преобразовать в число, то получим таймстамп по аналогии с date.getTime():

date = new Date();
console.log(+date); // количество миллисекунд, то же самое, что date.getTime()

// Важный побочный эффект: даты можно вычитать, в результате получаем разность в миллисекундах.

// Если нужно просто измерить время, объект Date нам не нужен.
Date.now()

// !Существует особый метод Date.now(), возвращающий текущую метку времени.

// Семантически он эквивалентен new Date().getTime(), однако метод не создаёт промежуточный объект Date.Так что этот способ работает быстрее и не нагружает сборщик мусора.

// Данный метод используется из соображений удобства или когда важно быстродействие, например, при разработке игр на JavaScript или других специализированных приложений.

// !Флаги и дескрипторы свойств

// Флаги свойств
// Помимо значения value, свойства объекта имеют три специальных атрибута(так называемые «флаги»).

//  ?writable – если true, свойство можно изменить, иначе оно только для чтения.
//  ?enumerable – если true, свойство перечисляется в циклах, в противном случае циклы его игнорируют.
//  ?configurable – если true, свойство можно удалить, а эти атрибуты можно изменять, иначе этого делать нельзя.

// Эти атрибуты обычно они скрыты.Когда мы создаём свойство «обычным способом», все они имеют значение true.Но мы можем изменить их в любое время.

// Сначала посмотрим, как получить их текущие значения.

// Метод Object.getOwnPropertyDescriptor позволяет получить полную информацию о свойстве.

// let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);
// obj Объект, из которого мы получаем информацию.
// propertyName Имя свойства.

const obj999 = {
  name: 'fsf',
  // Мы не можем создать дескриптор внутри объекта. Для этого есть специальные методы
  nameWithDescriptor: {
    value: 'Teddy',
    writable: true,
    enumerable: true,
    configurable: true
  }
}

// Обычное свойство
console.log(Object.getOwnPropertyDescriptor(animal, 'name'))
// {
//   writable: true,
//   configurable: true,
//   enumerable: true,
//   value: "Мой питомец"
// }

// Вычисляемое свойство
console.log(Object.getOwnPropertyDescriptor(userO, 'fullName'))
// {
//   enumerable:true,
//   configurable:true,
//   !Вместо value
//   get: ƒ fullName(),
//   !Вместо writeble. Если сеттера не существует,- значение не установить
//   set: ƒ fullName(value)  
// }


// Метод прототипа
console.log(Object.getOwnPropertyDescriptor(rabbit.__proto__, 'hide'))
// {
//  configurable: true
//  !По умолчанию не выводится в for..in
//  enumerable:false
//  value: ƒ hide()
//  writable:true
// }

// Чтобы изменить флаги, мы можем использовать метод Object.defineProperty.

// Object.defineProperty(obj, propertyName, descriptor)
// obj, propertyName Объект и его свойство, для которого нужно применить дескриптор.
// descriptor Применяемый дескриптор.
animal.name = 'bear'
// !Только для чтения
Object.defineProperty(animal, 'name', { writable: false })
// Вызовет ошибку, т.к. запретили изменение свойства
// animal.name = 'bear2'
console.log(Object.getOwnPropertyDescriptor(animal, 'name'))

// ! Если свойство существует, defineProperty обновит его флаги.В противном случае метод создаёт новое свойство с указанным значением и флагами; если какой - либо флаг не указан явно, ему присваивается значение false.

// ! Ошибки появляются только в строгом режиме
// ? В нестрогом режиме, без use strict, мы не увидим никаких ошибок при записи в свойства «только для чтения» и т.п.Но эти операции всё равно не будут выполнены успешно.Действия, нарушающие ограничения флагов, в нестрогом режиме просто молча игнорируются.

// !Неперечислимое свойство
// ? Если установить для свойства enumerable:false, тогда оно перестанет появляться в цикле for..in и Object.keys. Мы можем сделать это для любого свойства или метода

// ! Неконфигурируемое свойство
// Флаг неконфигурируемого свойства(configurable: false) иногда предустановлен для некоторых встроенных объектов и свойств.

// Неконфигурируемое свойство не может быть удалено, его атрибуты не могут быть изменены.
// Например, свойство Math.PI – только для чтения, неперечислимое и неконфигурируемое:

let descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');
/*
{
  "value": 3.141592653589793,
  "writable": false,
  "enumerable": false,
  "configurable": false
}
*/
// То есть программист не сможет изменить значение Math.PI или перезаписать его.

// !Math.PI = 3; // Ошибка, потому что writable: false
// !delete Math.PI тоже не сработает
// !Мы также не можем изменить writable:
// !Ошибка, из-за configurable: false
// Object.defineProperty(Math, "PI", { writable: true });

// !Мы абсолютно ничего не можем сделать с Math.PI.

// Определение свойства как неконфигурируемого – это дорога в один конец.Мы не можем изменить его обратно с помощью defineProperty.

// ?Обратите внимание: configurable: false не даст изменить флаги свойства, а также не даст его удалить.При этом можно изменить значение свойства.

// В коде ниже свойство user.name является неконфигурируемым, но мы все ещё можем изменить его значение(т.к.writable: true).

let user0 = {
  name: "John"
};

Object.defineProperty(user0, "name", {
  configurable: false
});

user.name = "Pete"; // работает
// delete user.name; // Ошибка

// А здесь мы делаем user.name «навечно запечатанной» константой, как и встроенный Math.PI:
Object.defineProperty(user0, "name", {
  writable: false,
  configurable: false
});

// теперь невозможно изменить user.name или его флаги
// !всё это не будет работать:
// user.name = "Pete";
// delete user.name;
// Object.defineProperty(user, "name", { value: "Pete" });
// ?Ошибки отображаются только в строгом режиме
// В нестрогом режиме мы не увидим никаких ошибок при записи в свойства «только для чтения» и т.п.Эти операции всё равно не будут выполнены успешно.Действия, нарушающие ограничения флагов, в нестрогом режиме просто молча игнорируются.

// !Метод Object.defineProperties
// Существует метод Object.defineProperties(obj, descriptors), который позволяет определять множество свойств сразу.

// Object.defineProperties(obj, {
//   prop1: descriptor1,
//   prop2: descriptor2
//   // ...
// });

Например:
Object.defineProperties(user0, {
  name: { value: "John", writable: false },
  surname: { value: "Smith", writable: false },
  age: { value: "Smith", writable: true },
  // ...
})

// Таким образом, мы можем определить множество свойств одной операцией.

// ?Object.getOwnPropertyDescriptors
// Чтобы получить все дескрипторы свойств сразу, можно воспользоваться методом Object.getOwnPropertyDescriptors(obj).
console.log(Object.getOwnPropertyDescriptors(rabbit))

// !Вместе с Object.defineProperties этот метод можно использовать для клонирования объекта вместе с его флагами:

let clone2 = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));
// ?Обычно при клонировании объекта мы используем присваивание, чтобы скопировать его свойства:

// for (let key in user) {
//   clone[key] = user[key]
// }
// ?…Но это не копирует флаги.Так что если нам нужен клон «получше», предпочтительнее использовать Object.defineProperties.

// ?Другое отличие в том, что for..in игнорирует символьные и неперечислимые свойства, а Object.getOwnPropertyDescriptors возвращает дескрипторы всех свойств.

// Глобальное запечатывание объекта
// Дескрипторы свойств работают на уровне конкретных свойств.

// !Но ещё есть методы, которые ограничивают доступ ко всему объекту:

// ?Запрещает добавлять новые свойства в объект.
// Object.preventExtensions(obj)

// ?Запрещает добавлять / удалять свойства.Устанавливает configurable: false для всех существующих свойств.
//  Object.seal(obj)

// ?Запрещает добавлять / удалять / изменять свойства.Устанавливает configurable: false, writable: false для всех существующих свойств.
// Object.freeze(obj)

// А также есть методы для их проверки:

// ?Возвращает false, если добавление свойств запрещено, иначе true.
// Object.isExtensible(obj)

// ?Возвращает true, если добавление / удаление свойств запрещено и для всех существующих свойств установлено configurable: false.
// Object.isSealed(obj)
// ?Возвращает true, если добавление / удаление / изменение свойств запрещено, и для всех текущих свойств установлено configurable: false, writable: false.
// Object.isFrozen(obj)

// На практике эти методы используются редко. Но метко

async function download() {
  try {
    const request = await fetch('https://fakerapi.it/api/v1/products?_quantity=10') // Запрос данных с серверав
    const data = await request.json() // Преобразуем json из запроса d объект
    console.log(data)
    for (let el of data.data) {
      document.body.appendChild(renderCard(el)) // рендерим карточки, добавляя их в конец body
    }
  } catch(e) {
    console.log(e)
    setTimeout(download,1000)
  }
}

const downloadButton = document.createElement('button')
downloadButton.textContent = 'Загрузить товары'
downloadButton.addEventListener('click', download)
document.body.appendChild(downloadButton)

function renderCard(el:any) {
  const cardDiv = document.createElement('div')   // создаём родительский div, в кот. будем добавлять данные
  cardDiv.setAttribute('style', 'display:flex; margin:0 auto; max-width: 700px; padding: 20px; gap: 20px')
  // cardDiv.style.display = 'flex'
  // cardDiv.style.margin = '0 auto'
  // cardDiv.style.maxWidth = '700px'
  // cardDiv.style.padding = '20px'
  // cardDiv.style.gap = '20px'
  const cardImage = document.createElement('img') // создали картинку
  cardImage.setAttribute('href', el.image)
  cardImage.style.minWidth = '200px'
  cardDiv.appendChild(cardImage)                  // Поместили картинку в корневой div
  const dataDiv = document.createElement('div')   // создали div для текстовых данных
  const cardH4 = document.createElement('h4')
  cardH4.textContent = el.name
  cardH4.addEventListener('click', () => { alert(el.name)})
  const cardDescr = document.createElement('p')
  cardDescr.textContent = el.description
  const cardPrice = document.createElement('p')
  cardPrice.textContent = el.price
  dataDiv.appendChild(cardH4)
  dataDiv.appendChild(cardDescr)
  dataDiv.appendChild(cardPrice)
  cardDiv.appendChild(dataDiv)                     // добавили div с текстовыми данными в корневой div
  return cardDiv                                   // вернули заполненных данными кореневой div
}

// ? Плавный скролл
// elem.scrollTo({
//   left: 0,
//   top: 0,
//   behavior: 'smooth'
// })


// ?Полная высота документа с прокручиваемой частью
// let scrollHeight = Math.max(
//   document.body.scrollHeight, document.documentElement.scrollHeight,
//   document.body.offsetHeight, document.documentElement.offsetHeight,
//   document.body.clientHeight, document.documentElement.clientHeight
// );


// ?Текущая прокрутка сверху  window.pageYOffset
// ?Текущая прокрутка слева   window.pageXOffset

// ?получаем координаты элемента в контексте документа
// function getCoords(elem) {
//   let box = elem.getBoundingClientRect();

//   return {
//     top: box.top + window.pageYOffset,
//     right: box.right + window.pageXOffset,
//     bottom: box.bottom + window.pageYOffset,
//     left: box.left + window.pageXOffset
//   };
// }

// Требования:

// Центр мяча должен совпадать с местом нажатия мыши(если это возможно без пересечения краёв поля);
// CSS - анимация желательна, но не обязательна;
// Мяч ни в коем случае не должен пересекать границы поля;
// При прокрутке страницы ничего не должно ломаться;
// Заметки:

// Код должен уметь работать с различными размерами мяча и поля, не привязываться к каким - либо фиксированным значениям.
// Используйте свойства event.clientX / event.clientY для определения координат мыши при клике.

if (window) window.addEventListener('load',()=>{

  
  const field = document.getElementById('field')
  const ball = document.getElementById('ball')
  
  const ballWidth = ball?.clientWidth
  const ballHeight = ball?.clientHeight
  const fieldWidth = field?.clientWidth
  const fieldHeight = field?.clientHeight
  
  let deg = 0

  field?.addEventListener('click', (e)=>{
    if (e.target == field) {
      let x = e.offsetX
      let y = e.offsetY
      console.log(x,y)
      if (ball && ballWidth && ballHeight && fieldWidth && fieldHeight) {
        if (deg == 360) deg = 0
        x = x - (ballWidth/2)
        y = y - (ballHeight/2)
        if (x < 0) x = 0
        if (y < 0) y = 0
        if (x + (ballWidth) > fieldWidth) x = fieldWidth - (ballWidth)
        if (y + (ballHeight) > fieldHeight) y = fieldHeight - (ballHeight)
        ball.style.left = x + 'px'
        ball.style.top = y + 'px'
        console.log(x,y)
        deg += 180
        ball.style.transform = `rotate(${deg}deg)`
      }
    }    
  })
})


console.log([])
console.log({})

class PowerArray extends Array {
  isEmpty() {
    return this.length === 0;
  }
}

new Array(1,2,5,6,7)

// @ts-ignore
let arrRR = new PowerArray(1, 2, 5, 10, 50)
console.log(arrRR.isEmpty()); // false

let filteredArr = arrRR.filter(item => item >= 10) as PowerArray
console.log(filteredArr); // 10, 50
console.log(filteredArr.isEmpty()); // false


// Реализуйте класс ExtendedDate, унаследовав его от стандарт-
// ного класса Date и добавив следующие возможности:
// ■ метод для вывода даты (числа и месяца) текстом;
// ■ метод для проверки – это прошедшая дата или будущая
// (если прошедшая, то метод возвращает false; если будущая или текущая, то true);
// ■ метод для проверки – високосный год или нет;
// ■ метод, возвращающий следующую дату.
// Создайте объект класса ExtendedDate и выведите на экран
// результаты работы новых методов.

class ExtendedDate extends Date {
  getRussianDate() {
    const month = ['январь', 'ф', 'м', 'а', 'м', 'и', 'ил', 'ав', 'с', 'о', 'н', 'д']
    return this.getDate() + ' ' + month[this.getMonth()]
  }
  now() {
    this.now()
  }
  parse(val:string) {
    this.parse(val)
  }
}

console.log((new ExtendedDate('2020-12-26')).getRussianDate())


// При наступлении события – самый глубоко вложенный элемент, на котором оно произошло, помечается как «целевой» (event.target).

// Затем событие сначала двигается вниз от корня документа к event.target, по пути вызывая обработчики, поставленные через addEventListener(...., true), где true – это сокращение для {capture: true}.
// Далее обработчики вызываются на целевом элементе.
// Далее событие двигается от event.target вверх к корню документа, по пути вызывая обработчики, поставленные через on<event> и addEventListener без третьего аргумента или с третьим аргументом равным false.
// Каждый обработчик имеет доступ к свойствам события event:

// event.target – самый глубокий элемент, на котором произошло событие.
// event.currentTarget (=this) – элемент, на котором в данный момент сработал обработчик (тот, на котором «висит» конкретный обработчик)
// event.eventPhase – на какой фазе он сработал (погружение=1, фаза цели=2, всплытие=3).
// Любой обработчик может остановить событие вызовом event.stopPropagation(), но делать это не рекомендуется, так как в дальнейшем это событие может понадобиться, иногда для самых неожиданных вещей.

// Поймайте переход по ссылке
// Сделайте так, чтобы при клике на ссылки внутри элемента id = "contents" пользователю выводился вопрос о том, действительно ли он хочет покинуть страницу, и если он не хочет, то прерывать переход по ссылке.

// Содержимое #contents может быть загружено динамически и присвоено при помощи innerHTML.Так что найти все ссылки и поставить на них обработчики нельзя.Используйте делегирование.
// Содержимое может иметь вложенные теги, в том числе внутри ссылок, например, <a href=".." > <i>...</i></a >.

const contents = document.createElement('div')
contents.id = 'contents'

// Имитация загрузки данных
contents.innerHTML = '<p>Как насчёт того, чтобы прочитать <a href="https://wiki.com"><strong>Википедию</strong></a> или посетить <a href="https://w3.org">W3.org</a> и узнать о современных стандартах?</p>'

contents.addEventListener('click', (event)=>{
  const target = (event.target as HTMLElement|null)?.closest('a')
  if (target && !confirm('Перейти по ссылке ' + target.href + '?')) {
    event.preventDefault()
  }
})

document.body.prepend(contents)

const newsBlock = document.getElementById('news')

newsBlock?.addEventListener('click', (e)=>{
  const target = e.target as HTMLElement
  if (target.className != 'close') return
  const p = newsBlock.querySelectorAll('p')
  const close = newsBlock.querySelectorAll('.close')
  const isHidden = p ? p[0].hidden : false
  if (p && close) {
    for (let i=0; i<p.length; i++) {
      p[i].hidden = !isHidden
      close[i].textContent = !isHidden ? '[v]' : '[x]'
    }
  }
}, {passive:true})

// Всплытие
// Принцип всплытия очень простой.
// Когда на элементе происходит событие, обработчики сначала срабатывают на нём, потом на его родителе, затем выше и так далее, вверх по цепочке предков.

// Чтобы сгенерировать событие из кода, вначале надо создать объект события.

// Базовый конструктор Event(name, options) принимает обязательное имя события и options – объект с двумя свойствами:

// bubbles: true чтобы событие всплывало.
// cancelable: true если мы хотим, чтобы event.preventDefault() работал.
// Особые конструкторы встроенных событий MouseEvent, KeyboardEvent и другие принимают специфичные для каждого конкретного типа событий свойства. Например, clientX для событий мыши.

// Для пользовательских событий стоит применять конструктор CustomEvent. У него есть дополнительная опция detail, с помощью которой можно передавать информацию в объекте события. После чего все обработчики смогут получить к ней доступ через event.detail.

// Несмотря на техническую возможность генерировать встроенные браузерные события типа click или keydown, пользоваться ей стоит с большой осторожностью.

// Весьма часто, когда разработчик хочет сгенерировать встроенное событие – это вызвано «кривой» архитектурой кода.

// Как правило, генерация встроенных событий полезна в следующих случаях:

// Либо как явный и грубый хак, чтобы заставить работать сторонние библиотеки, в которых не предусмотрены другие средства взаимодействия.
// Либо для автоматического тестирования, чтобы скриптом «нажать на кнопку» и посмотреть, произошло ли нужное действие.
// Пользовательские события со своими именами часто создают для улучшения архитектуры, чтобы сообщить о том, что происходит внутри наших меню, слайдеров, каруселей и т.д.

document.body.prepend(login('text', 'текст из другого модуля'))

document.addEventListener('valueChange', (e)=>{
  console.log((e as CustomEvent).detail)
})

arr = [0, 5, 'sfdsdf', 'dd', 8, false]

let val ='dd'
console.log(arr.find((el)=>el==val))
console.log(arr.findIndex(el=>el==8))
console.log(arr.indexOf(4))
console.log(arr.filter(el=>el.length>1))
console.log(arr[4])

// функция, которая возвращает индекс элемента массива, если такой элемент в нём есть, иначе возвращает -1
// аналогична методу массива indexOf
function indexOf(arr: any[], val:any, startIndex=0) {
  for (let i = startIndex;i<arr.length; i++) {
    if (arr[i]==val) return i
  }
  return -1
}

let objArr = [{id: 1, name: "Вася"},
  {id: 2, name: "Петя"},
  {id: 3, name: "Маша"}
]

// функция, которая возвращает индекс первого объекта, если функция fn вернула истину, иначе возвращает -1
// аналогична методу массива findIndex
function findIndex(arr: any[], fn: Function, startIndex=0) {
  for (let i = startIndex;i<arr.length; i++) {
    if (fn(arr[i],i,arr)) return i
  }
  return -1
}

// функция, которая возвращает первый объект, если функция fn вернула истину, иначе возвращает undefined
// аналогична методу массива find
function find(arr: any[], fn:Function) {
  for (let i=0;i<arr.length; i++) {
    if (fn(arr[i], i, arr)) return arr[i]
  }
  return undefined
}

// функция, которая возвращает массив объектов, для которых функция fn вернула истину, иначе возвращает пустой массив
// аналогична методу массива filter
function filter(arr: any[], fn: Function) {
  const newArr = [] as any[]
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i, arr)) newArr.push(arr[i])
  }
  return newArr
}

let isQ = false
let isW = false

function qwFunc(e:KeyboardEvent) {
  if(e.type=='keydown') {
    if (e.code == 'KeyQ') isQ = true
    if (e.code == 'KeyW') isW = true
  }
  if(e.type=='keyup') {
    if (e.code == 'KeyQ') isQ = false
    if (e.code == 'KeyW') isW = false
  }
  if (isQ && isW) {
    alert('Boom!!!')
    isQ = isW = false
  }
}

window.addEventListener('keydown', qwFunc)
window.addEventListener('keyup', qwFunc)

const textareaInput = document.querySelector('textarea')
textareaInput?.addEventListener('keydown', (e)=>{
  if(e.code=='Enter') {
    console.log('value',(e.currentTarget as HTMLInputElement).value)
    console.log('innerHTML', (e.currentTarget as HTMLInputElement).innerHTML)
  }
})

// текущее состояние
console.log(document.readyState)

// вывести изменения состояния
document.addEventListener('readystatechange', () => console.log(document.readyState))

// События загрузки страницы:

// DOMContentLoaded генерируется на document, когда DOM готов.Мы можем применить JavaScript к элементам на данном этапе.
// Скрипты, вроде<script>...</script> или <script src="..."></script > блокируют DOMContentLoaded, браузер ждёт, пока они выполнятся.
// Изображения и другие ресурсы тоже всё ещё могут продолжать загружаться.
// Событие load на window генерируется, когда страница и все ресурсы загружены.Мы редко его используем, потому что обычно нет нужды ждать так долго.
// Событие beforeunload на window генерируется, когда пользователь покидает страницу.Если мы отменим событие, браузер спросит, на самом ли деле пользователь хочет уйти(например, у нас есть несохранённые изменения).
// Событие unload на window генерируется, когда пользователь окончательно уходит, в обработчике мы можем делать только простые вещи, которые ни о чём не спрашивают пользователя и не заставляют его ждать.Из - за этих ограничений оно редко используется.Мы можем послать сетевой запрос с помощью navigator.sendBeacon.
// document.readyState – текущее состояние документа, изменения можно отследить с помощью события readystatechange:
// loading – документ грузится.
// interactive – документ прочитан, происходит примерно в то же время, что и DOMContentLoaded, но до него.
// complete – документ и ресурсы загружены, происходит примерно в то же время, что и window.onload, но до него.

// У async и defer есть кое - что общее: они не блокируют отрисовку страницы.Так что пользователь может просмотреть содержимое страницы и ознакомиться с ней сразу же.

// Но есть и значимые различия:

// Порядок	DOMContentLoaded
// async	Порядок загрузки(кто загрузится первым, тот и сработает).Не имеет значения.Может загрузиться и выполниться до того, как страница полностью загрузится.Такое случается, если скрипты маленькие или хранятся в кеше, а документ достаточно большой.
// defer	Порядок документа(как расположены в документе).Выполняется после того, как документ загружен и обработан(ждёт), непосредственно перед DOMContentLoaded.
// Страница без скриптов должна быть рабочей
// Пожалуйста, помните, что когда вы используете defer, страница видна до того, как скрипт загрузится.

// Пользователь может знакомиться с содержимым страницы, читать её, но графические компоненты пока отключены.

// Поэтому обязательно должна быть индикация загрузки, нерабочие кнопки – отключены с помощью CSS или другим образом.Чтобы пользователь явно видел, что уже готово, а что пока нет.

// На практике defer используется для скриптов, которым требуется доступ ко всему DOM и / или важен их относительный порядок выполнения.

// А async хорош для независимых скриптов, например счётчиков и рекламы, относительный порядок выполнения которых не играет роли.

// let script = document.createElement('script');

// // мы можем загрузить любой скрипт с любого домена
// script.src = "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.3.0/lodash.js"
// document.head.append(script)

// script.onload = function () {
//   // в скрипте создаётся вспомогательная переменная с именем "_"
//   alert(window._.VERSION); // отображает версию библиотеки
// }

// Изображения<img>, внешние стили, скрипты и другие ресурсы предоставляют события load и error для отслеживания загрузки:

// load срабатывает при успешной загрузке,
// error срабатывает при ошибке загрузки.
// Единственное исключение – это<iframe>: по историческим причинам срабатывает всегда load вне зависимости от того, как завершилась загрузка, даже если страница не была найдена.

// Событие readystatechange также работает для ресурсов, но используется редко, потому что события load / error проще в использовании.


// Создайте функцию preloadImages(sources, callback), которая загружает все изображения из массива sources и, когда все они будут загружены, вызывает callback.
// ---------- тест ----------

let sources = [
  "https://en.js.cx/images-load/1.jpg",
  "https://en.js.cx/images-load/2.jpg",
  "https://en.js.cx/images-load/3.jpg"
];

function preloadImages(sources:string[], callback:Function) {
  let num = 0
  for (let i = 0; i < sources.length; i++) {
    let img = document.createElement('img')
    img.src = sources[i]
    img.onload = img.onerror = ()=>{ 
      num++
      if (num == sources.length) {
        callback()
      }
    }
  }
}

// preloadImages(sources, ()=>alert('yes'))

// добавляем случайные символы к ссылкам, чтобы избежать кеширования
for (let i = 0; i < sources.length; i++) {
  sources[i] += '?' + Math.random();
}

// для каждого изображения
// создадим другое изображение с аналогичным src и проверим, есть ли у нас его ширина
function testLoaded() {
  let widthSum = 0;
  for (let i = 0; i < sources.length; i++) {
    let img = document.createElement('img');
    img.src = sources[i];
    widthSum += img.width;
  }
  console.log(widthSum);
}

// каждое изображение в разрешении 100x100, итоговая сумма их ширин должна быть 300
preloadImages(sources, testLoaded);

const mailLabel = document.forms[0].querySelector('label')
const mailInput = document.forms[0].elements[0] as HTMLInputElement
// const mailInput2 = document.querySelector('#mail') as HTMLInputElement
const mailButton = document.forms[0].elements[1] as HTMLButtonElement
const mailInputRect = mailInput.getBoundingClientRect()

// mailInput2.value = 'дыня'
document.forms[0].onsubmit = () => {return false}

mailButton.addEventListener('click', checkMail)
mailInput.addEventListener('keypress',(e:KeyboardEvent) => {
  if (e.key == 'Enter') {
    checkMail()
  }
})

mailInput.addEventListener('click',function() {
  const dinia = document.createElement('img')
  dinia.src = 'https://fikiwiki.com/uploads/posts/2022-02/1645022772_11-fikiwiki-com-p-kartinki-dinya-12.jpg'
})

mailInput.addEventListener('input',function() {
  if (this.value == 'дыня') {
    const form = this.parentElement as HTMLFormElement
    form.innerHTML = ''
    form.style.height = '500px'
    form.style.background = 'url(https://fikiwiki.com/uploads/posts/2022-02/1645022772_11-fikiwiki-com-p-kartinki-dinya-12.jpg)'    
    console.log(mailButton)
  }
})

async function checkMail() {

  // !Проверка на кодовое слово
  if (mailInput.value == 'арбуз') {
    mailInput.style.backgroundColor = 'red'
    mailInput.style.border = '8px solid green'
    mailInput.style.borderRadius = '50%'
    mailInput.style.fontSize = '18px'
    mailInput.style.width = mailInputRect.width/3 + 'px'
    mailInput.style.height = mailInputRect.width/5 + 'px'
    mailInput.value =`':. "; .' :."`
  }

  let checked = true
  let message = 'У почты '
  const messageDetails:string[] = []
  const checkDog = mailInput.value.split('@')
  if (mailInput.value) {
    if (checkDog.length == 2) {
      if (!checkDog[0].length) {
        checked = false
        messageDetails.push('отсутствует имя ящика')
      }
      const host = checkDog[1].split('.')
      if (host.length == 2) {
        if (!host[0].length) {
          checked = false
          messageDetails.push('отсутствует имя домена')
        }
        if (!host[1].length) {
          checked = false
          messageDetails.push('отсутствует имя доменной зоны')
        }
      } else {
        checked = false
        message = 'У почты обязательно должен быть указана доменная зона верхнго уровня'
      }
    } else {
      checked = false
      message = 'У почты обязательно должен быть символ @'
    }
  } else {
    checked = false
    message = 'Вы ничего не ввели'
  }
  if (!checked) {
    if (mailLabel) {
      mailLabel.style.color = 'red'
      mailLabel.textContent = message + messageDetails.join(', ') + '.'
    }
  } else {
    if (mailLabel) {
      mailLabel.style.color = 'green'
      mailLabel.textContent = 'Всё в порядке'
    }

    const resp = await fetch('http://localhost:3002/mail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({ mail: mailInput.value })
    })
    const data = await resp.json()
    alert(data?.mail + data.message)
    // оправляем/сохраняем почту
  }
}

// С помощью блоков {...} мы можем изолировать часть кода, выполняющую свою собственную задачу, с переменными, принадлежащими только ей:
{
  // выполняем некоторые действия с локальной переменной, которые не должны быть видны снаружи
  let message = "Hello" // переменная видна только в этом блоке
  console.log('inner message',message) // Hello
}
console.log('global message',message) // 11

function sayHiBye(firstName: string, lastName: string) {

  // функция-помощник, которую мы используем ниже
  function getFullName() {
    return obr + ' ' + firstName + " " + lastName + " " + message
  }
  
  const obr = 'Mr.'
  
  console.log( "############Hello, " + getFullName() )
  console.log( "############Bye, " + getFullName() )
  
}

sayHiBye('10', '12')

function makeCounter(count:number) {
  const countersDiv = document.getElementById('counters')
  const button = document.createElement('button')
  button.textContent = count.toFixed()
  button.onclick = function () {
    button.textContent = (++count).toFixed()
  }
  countersDiv?.append(button)
}

makeCounter(0)
makeCounter(5)
makeCounter(5)
makeCounter(5)
makeCounter(5)
makeCounter(10)

try {
  console.log('Начало блока try')  // (1) <--
  lalala // ошибка, переменная не определена!
  console.log('Конец блока try (никогда не выполнится)');  // (2)
} catch(err:any) {
  console.log(`Возникла ошибка!`, err) 
  console.log('name', err.name) 
  console.log('message', err.message)
  console.log('stack', err.stack)
}

// Конструкция try..catch позволяет обрабатывать ошибки во время исполнения кода.Она позволяет запустить код и перехватить ошибки, которые могут в нём возникнуть.

//   Синтаксис:
// try {
//   исполняем код
// } catch (err) {
//   если случилась ошибка, прыгаем сюда
//   err - это объект ошибки
// } finally {
//   выполняется всегда после try/catch
// }
// Секций catch или finally может не быть, то есть более короткие конструкции try..catch и try..finally также корректны.

// Объекты ошибок содержат следующие свойства:

// message – понятное человеку сообщение.
// name – строка с именем ошибки(имя конструктора ошибки).
// stack(нестандартное, но хорошо поддерживается) – стек на момент ошибки.
// Если объект ошибки не нужен, мы можем пропустить его, используя catch { вместо catch (err) {.

// Мы можем также генерировать собственные ошибки, используя оператор throw.Аргументом throw может быть что угодно, но обычно это объект ошибки, наследуемый от встроенного класса Error.Подробнее о расширении ошибок см.в следующей главе.

// Проброс исключения – это очень важный приём обработки ошибок: блок catch обычно ожидает и знает, как обработать определённый тип ошибок, поэтому он должен пробрасывать дальше ошибки, о которых он не знает.

// Даже если у нас нет try..catch, большинство сред позволяют настроить «глобальный» обработчик ошибок, чтобы ловить ошибки, которые «выпадают наружу». В браузере это window.onerror.

// !Intersection Observer
// ?https://doka.guide/js/intersection-observer/

const observerOptions = {
  // root: ,
  rootMargin: '15px 0px',
  threshold: [0, 0.5, 0.95],
}

const callback = (entries: IntersectionObserverEntry[]) => {
  entries.forEach((el) => {
    console.log(el.intersectionRatio)
    if (el.isIntersecting) {
      const target = el.target as HTMLDivElement
      if (el.intersectionRatio >= 0 && el.intersectionRatio < 0.45) {
        target.classList.add('green')
        target.classList.remove('blue')
        target.classList.remove('red')
      }
      
      if (el.intersectionRatio >= 0.45 && el.intersectionRatio < 0.75) {
        target.classList.remove('green')
        target.classList.add('blue')
        target.classList.remove('red')
      }
      
      if (el.intersectionRatio > 0.90) {
        target.classList.remove('green')
        target.classList.remove('blue')
        target.classList.add('red')
      }
    }
  })
}

const observer = new IntersectionObserver(callback, observerOptions)

observer.observe((newsBlock as HTMLDivElement))

const dinamicTextDiv = document.getElementById('dinamicText') as HTMLDivElement
// const dinamicTextDiv1 = document.querySelector('#dinamicText')

function dinamicWrite(el:HTMLDivElement, text:string, speed:number) {
  for (let i=0; i<text.length; i++) {
    setTimeout(() => { el.textContent += text[i]}, 1000*i/speed)
  }
}

dinamicWrite(dinamicTextDiv, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, nesciunt! Unde animi repudiandae dolorem eius quidem maxime minima optio ex saepe omnis ab expedita veritatis nisi natus quas, ad nemo?', 100)

const animDiv = document.querySelector('.runJs') as HTMLDivElement
let position = -5
function animation() {
  setInterval(()=>{
    animDiv.style.backgroundPositionX = position + 'px'
    switch (position) {
      case -5: {
        position-=80 // position = position - 77.5
        break
      }
      case -85: {
        position-=77.5 
        break
      }
      case -162.5: {
        position-=76.5
        break
      }
      case -239: {
        position-=67
        break
      }
      case -306: {
        position-=67
        break
      }
      case -373: {
        position=-5
        break
      }
    }
  },100)
}
animation()

class ReadError extends Error {
  constructor(message:string, cause:Error) {
    super(message)
    this.cause = cause;
    this.name = 'ReadError';
  }
}

class ValidationError extends Error {
  constructor(message:string) {
    super(message);
    this.name = "ValidationError";
  }
}

class PropertyRequiredError extends ValidationError {
  property
  constructor(property: string) {
    super("Нет свойства: " + property);
    this.name = "PropertyRequiredError";
    this.property = property;
  }
}

function validateUser(user:any) {
  if (!user.age) {
    throw new PropertyRequiredError("age");
  }

  if (!user.name) {
    throw new PropertyRequiredError("name");
  }
}

function readUser(json:string) {
  let user;

  try {
    user = JSON.parse(json);
  } catch (err) {
    if (err instanceof SyntaxError) {
      throw new ReadError("Синтаксическая ошибка", err);
    } else {
      throw err;
    }
  }

  try {
    validateUser(user);
  } catch (err) {
    if (err instanceof ValidationError) {
      throw new ReadError("Ошибка валидации", err);
    } else {
      throw err;
    }
  }
  return user
}
function getUser(json:string) {
  try {
    readUser(json);
  } catch (e) {
    if (e instanceof ReadError) {
      alert(e);
      // Исходная ошибка: SyntaxError:Unexpected token b in JSON at position 1
      alert("Исходная ошибка: " + e.cause);
    } else {
      throw e;
    }
  }
}

const newUser1 = getUser('{"age":15, "name":"Niko"}')
console.log(newUser1)

// Мы можем наследовать свои классы ошибок от Error и других встроенных классов ошибок, но нужно позаботиться о свойстве name и не забыть вызвать super.
// Мы можем использовать instanceof для проверки типа ошибок.Это также работает с наследованием.Но иногда у нас объект ошибки, возникшей в сторонней библиотеке, и нет простого способа получить класс.Тогда для проверки типа ошибки можно использовать свойство name.
// Обёртывание исключений является распространённой техникой: функция ловит низкоуровневые исключения и создаёт одно «высокоуровневое» исключение вместо разных низкоуровневых.Иногда низкоуровневые исключения становятся свойствами этого объекта, как err.cause в примерах выше, но это не обязательно.

function loadScript(src:string, callback:Function) {
  let script = document.createElement('script');
  script.src = src;
  script.onload = () => callback(script);
  document.head.append(script);
}

loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', (script:any) => {
  console.log(`Здорово, скрипт ${script.src} загрузился`);
  // @ts-ignore
  console.log(window._); // функция, объявленная в загруженном скрипте
});


console.log('before Promise')

let promise = new Promise(function (resolve, reject) {
  // resolve("done!")
  // setTimeout(() => resolve("done!"), 1000);
  setTimeout(() => reject("not done!"), 1000);
});

console.log('before Then')
// resolve запустит первую функцию, переданную в .then
// promise.then(
//   result => console.log(result), // выведет "done!" через одну секунду
//   error => console.log(error) // не будет запущена
// )

// Вызов .catch(f) – это сокращённый, «укороченный» вариант .then(null, f).
promise
  .then(result => console.log(result),) // выведет "done!" через одну секунду
  .catch(e => console.log(e))
  .finally(() => console.log('остановить индикатор загрузки'))

// Вызов .finally(f) похож на .then(f, f), в том смысле, что f выполнится в любом случае, когда промис завершится: успешно или с ошибкой

// Обработчик finally не получает результат предыдущего обработчика (у него нет аргументов). Вместо этого этот результат передается следующему подходящему обработчику.
// Если обработчик finally возвращает что-то, это игнорируется.
// Когда finally выдает ошибку, выполнение переходит к ближайшему обработчику ошибок.

console.log('after Then')

// !Событийный цикл: микрозадачи и макрозадачи
// Более подробный алгоритм событийного цикла(хоть и упрощённый в сравнении со спецификацией):

// Выбрать и исполнить старейшую задачу из очереди макрозадач(например, «script»).
// Исполнить все микрозадачи:
// Пока очередь микрозадач не пуста: - Выбрать из очереди и исполнить старейшую микрозадачу
// Отрисовать изменения страницы, если они есть.
// Если очередь макрозадач пуста – подождать, пока появится макрозадача.
// Перейти к шагу 1.
// Чтобы добавить в очередь новую макрозадачу:

// Используйте setTimeout(f) с нулевой задержкой.
// Этот способ можно использовать для разбиения больших вычислительных задач на части, чтобы браузер мог реагировать на пользовательские события и показывать прогресс выполнения этих частей.

// Также это используется в обработчиках событий для отложенного выполнения действия после того, как событие полностью обработано(всплытие завершено).

// Для добавления в очередь новой микрозадачи:

// Используйте queueMicrotask(f).
// Также обработчики промисов выполняются в рамках очереди микрозадач.
// События пользовательского интерфейса и сетевые события в промежутках между микрозадачами не обрабатываются: микрозадачи исполняются непрерывно одна за другой.

// Поэтому queueMicrotask можно использовать для асинхронного выполнения функции в том же состоянии окружения.

// fetch('https://learn.javascript.ru/article/promise-chaining/user.json')
// fetch('article/promise-chaining/user.json')
fetch('snake.html')
  // .then в коде ниже выполняется, когда удалённый сервер отвечает
  .then(function (response) {
    // response.text() возвращает новый промис,
    // который выполняется и возвращает полный ответ сервера,
    // когда он загрузится
    return response.text()
  })
  .then(function (text) {
    // ...и здесь содержимое полученного файла
    console.log(text) // {"name": "iliakan", isAdmin: true}
  })
  .catch(e => console.log(e))

fetch(`https://api.github.com/users/andreyka101`)
  // Загружаем ответ в формате json
  .then(response => response.json())
  // Показываем аватар (githubUser.avatar_url) в течение 3 секунд (возможно, с анимацией)
  .then(githubUser => {
    // let img = document.createElement('img')
    // img.src = githubUser.avatar_url
    // img.className = "promise-avatar-example"
    // document.body.prepend(img)

    // setTimeout(() => img.remove(), 3000) // (*)
    console.log(githubUser)
    return githubUser
  }).then(user => makeSomethingWithUser(user))

let externalUser = {} as any
console.log('externalUser', externalUser)

function makeSomethingWithUser(user:any) {
  console.log(user)
  externalUser = user
}

const button = document.getElementById('readName') as HTMLButtonElement
button.addEventListener('click', e => console.log('externalUser', externalUser))


//  Promise.all(promises) – ожидает выполнения всех промисов и возвращает массив с результатами.Если любой из указанных промисов вернёт ошибку, то результатом работы Promise.all будет эта ошибка, результаты остальных промисов будут игнорироваться.
//  Promise.allSettled(promises)(добавлен недавно) – ждёт, пока все промисы завершатся и возвращает их результаты в виде массива с объектами, у каждого объекта два свойства:
//  status: "fulfilled", если выполнен успешно или "rejected", если ошибка,
//  value – результат, если успешно или reason – ошибка, если нет.
//  Promise.race(promises) – ожидает первый выполненный промис, который становится его результатом, остальные игнорируются.
//  Promise.any(promises)(добавлен недавно) – ожидает первый успешно выполненный промис, который становится его результатом, остальные игнорируются.Если все переданные промисы отклонены, AggregateError становится ошибкой Promise.any.
//  Promise.resolve(value) – возвращает успешно выполнившийся промис с результатом value.
//  Promise.reject(error) – возвращает промис с ошибкой error.
// Из всех перечисленных методов, самый часто используемый – это, пожалуй, Promise.all.


// Ключевое слово async перед объявлением функции:

// Обязывает её всегда возвращать промис.
// Позволяет использовать await в теле этой функции.
// Ключевое слово await перед промисом заставит JavaScript дождаться его выполнения, после чего:

// Если промис завершается с ошибкой, будет сгенерировано исключение, как если бы на этом месте находилось throw.
// Иначе вернётся результат промиса.
// Вместе они предоставляют отличный каркас для написания асинхронного кода.Такой код легко и писать, и читать.

// Хотя при работе с async / await можно обходиться без promise.then /catch, иногда всё - таки приходится использовать эти методы(на верхнем уровне вложенности, например).Также await отлично работает в сочетании с Promise.all, если необходимо выполнить несколько задач параллельно.



// !Типичный запрос с помощью fetch состоит из двух операторов await:

// let response = await fetch(url, options); // завершается с заголовками ответа
// let result = await response.json(); // читать тело ответа в формате JSON
// Или, без await:

// fetch(url, options)
//   .then(response => response.json())
//   .then(result => /* обрабатываем результат */)
// Параметры ответа:

// response.status – HTTP - код ответа,
// response.ok – true, если статус ответа в диапазоне 200 - 299.
// response.headers – похожий на Map объект с HTTP - заголовками.
// Методы для получения тела ответа:

// response.text() – возвращает ответ как обычный текст,
// response.json() – декодирует ответ в формате JSON,
// response.formData() – возвращает ответ как объект FormData(кодировка form / multipart, см.следующую главу),
// response.blob() – возвращает объект как Blob(бинарные данные с типом),
// response.arrayBuffer() – возвращает ответ как ArrayBuffer(низкоуровневые бинарные данные),
// Опции fetch, которые мы изучили на данный момент:

// method – HTTP - метод,
// headers – объект с запрашиваемыми заголовками(не все заголовки разрешены),
// body – данные для отправки(тело запроса) в виде текста, FormData, BufferSource, Blob или UrlSearchParams.
// В следующих главах мы рассмотрим больше параметров и вариантов использования fetch.

const FDButton = document.getElementById('FD')

FDButton?.addEventListener('click', async (e)=>{
  const fileInput = document.getElementById('file') as HTMLInputElement
  const formData = new FormData()
  // formData.append('name', 'Пётр')
  formData.append('data', JSON.stringify({name:'Пётр'}))
  if (fileInput.files && fileInput.files[0]) formData.append('file', fileInput.files[0], fileInput.files[0].name)
  axios.post('http://localhost:3002/file', formData)
  // await fetch('http://localhost:3002/file', {
  //   method:'POST',
  //   headers: { 'Content-Type': 'multipart/form-data;' },
  //   body: formData
  // })
})

// Объекты FormData используются, чтобы взять данные из HTML-формы и отправить их с помощью fetch или другого метода для работы с сетью.

// Мы можем создать такой объект уже с данными, передав в конструктор HTML-форму – new FormData(form), или же можно создать объект вообще без формы и затем добавить к нему поля с помощью методов:

// formData.append(name, value)
// formData.append(name, blob, fileName)
// formData.set(name, value)
// formData.set(name, blob, fileName)
// Отметим две особенности:

// Метод set удаляет предыдущие поля с таким же именем, а append – нет. В этом их единственное отличие.
// Чтобы послать файл, нужно использовать синтаксис с тремя аргументами, в качестве третьего как раз указывается имя файла, которое обычно, при <input type="file">, берётся из файловой системы.
// Другие методы:

// formData.delete(name)
// formData.get(name)
// formData.has(name)