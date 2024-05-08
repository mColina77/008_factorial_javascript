function calcularFactorial() {
    const numberInput = document.getElementById('numberInput').value;
    const resultElement = document.getElementById('result');

    // convertimos la entrada a un número entero
    const n = parseInt(numberInput);

    if (isNaN(n) || n < 0) {
        resultElement.textContent = 'Por favor, ingresa un número entero positivo.';
        return;
    }

    // calculamos el factorial
    const factorialResult = factorial(n);

    // mostramos el resultado en un cuadro
    resultElement.textContent = `El factorial de ${n} es: ${factorialResult}`;
}

// función que calcula el factorial utilizando un bucle FOR
function factorial(n) {
    let resp = 1;
    for (let i = 2; i <= n; i++) {
        resp *= i;
    }
    return resp;
}






// función que calcula el factorial utilizando recursión
// function factorial(n) {
//     if (n === 0) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }