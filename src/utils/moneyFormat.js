
function moneyFormat(number) {
    return "$" + number.toFixed(2);
}

const bew1 = moneyFormat(99.99);
console.log(bew1);