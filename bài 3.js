let isFibonacci = function (value) {
    let number1 = 0;
    let number2 = 1;
    for (let i = 0; i < value; i++) {
        let number3 = number1 + number2;
        number1 = number2;
        number2 = number3;
        if (value === number3) {
            return true;
        }
    }
    return false;
}
let value = +prompt("Nhập vào 1 số: ")
console.log(isFibonacci(value))
