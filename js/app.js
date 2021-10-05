let resultado = document.querySelector('input');
let contador = 0;
let entradas = document.querySelectorAll('button');

entradas.forEach(elemento => {
    elemento.addEventListener('click', () => {
        if (elemento.value === 'c') {
            resultado.value = "";
        } else if (elemento.value === '+' || elemento.value === '-' ||
            elemento.value === '/' || elemento.value === '*') {
            resultado.value += ` ${elemento.value} `;
            contador = 0;
        } else if (elemento.value === '=') {
            try {
                resultado.value = eval(resultado.value);

                contador++;
            } catch {
                resultado.value = "";
            }

        } else {
            if (contador > 0) {
                resultado.value = "";
                resultado.value += elemento.value;
                contador = 0;
            } else {
                resultado.value += elemento.value;
            }

        }
    })
})