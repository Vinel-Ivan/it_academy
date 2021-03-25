let a = prompt('Введите a');
let b = prompt('Введите b');
let c = (a % b);

if (c != 0) {
    alert(`Число делится с отатком, остаток ${c}`);
} else if (c === 0) {
    alert('Число делится нацело')
}