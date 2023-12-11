const numbers = [
    16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
    76, -4, 12, -35, 4, 47,
];

let positiveNumbers = [];
let negativeNumbers = [];
let positiveNumbersEven = [];
let positiveNumbersSum = 0;
let productNumbers = 1;
let bigNumber = 0;
let bigNumberIndex = 0;
let positiveNumbersEvenSum = 0;
let positiveNumbersNotEvenSum = 0;

for (let i = 0; i < numbers.length; i++) {
    if (bigNumber < numbers[i]) {
        bigNumber = numbers[i];
        bigNumberIndex = i;
    }
    if (numbers[i] > 0) {
        positiveNumbers.push(numbers[i]);
        positiveNumbersSum += numbers[i];
        productNumbers *= numbers[i];
    }
    if (numbers[i] < 0) {
        negativeNumbers.push(numbers[i]);
    }
}

let positiveNumbersNotEven = positiveNumbers.slice(0);

for (let m = 0; m < positiveNumbersNotEven.length; m++) {
    for (let j = m + 1; j < positiveNumbersNotEven.length; j++) {
        if (positiveNumbersNotEven[m] === positiveNumbersNotEven[j]) {
            positiveNumbersEven.push(
                positiveNumbersNotEven[m],
                positiveNumbersNotEven[j]
            );
            positiveNumbersNotEven[m] = null;
            positiveNumbersNotEven[j] = null;
        }
    }
}

for (let iter = 0; iter < positiveNumbersNotEven.length; iter++) {
    if (positiveNumbersNotEven[iter] === null) {
        positiveNumbersNotEven.splice(iter, 1);
        iter--;
    }
    if (positiveNumbersEven[iter] === null) {
        positiveNumbersEven.splice(iter, 1);
        iter--;
    }
}

for (variable of positiveNumbersEven) {
    positiveNumbersEvenSum += variable;
}
for (variable of positiveNumbersNotEven) {
    positiveNumbersNotEvenSum += variable;
}

alert(`Сума позитивних елементів ${positiveNumbersSum}
Максимальний елемент ${bigNumber} його індекс ${bigNumberIndex} 
Кількість негативних елементів ${negativeNumbers.length}
Кількість непарних позитивних елементів ${positiveNumbersNotEven.length}
Кількість парних позитивних елементів ${positiveNumbersEven.length}
Сума парних позитивних елементів  ${positiveNumbersEvenSum}
Сума непарних позитивних елементів  ${positiveNumbersNotEvenSum}
Добуток позитивних елементів ${productNumbers}`);
