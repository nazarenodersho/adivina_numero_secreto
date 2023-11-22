const generarNumeroAleatorio = () => {
    return Math.floor(Math.random() * 100) + 1;
};

const verificarAdivinanza = (numeroSecreto, numeroAdivinado) => {

    /* Añadí un parseInt a numeroAdivinado ya que éste es una cadena de texto debido al readlineSync.question('Ingresa un número: '), por ende siempre iba a ser desigual que numeroSecreto */
    numeroAdivinado = parseInt(numeroAdivinado, 10);

    if (numeroAdivinado === numeroSecreto) {
    console.log('¡Felicitaciones! ¡Adivinaste el número secreto!');
    } else if (numeroAdivinado > numeroSecreto) {
    console.log('El número secreto es menor. ¡Sigue intentando!');
    } else {
    console.log('El número secreto es mayor. ¡Sigue intentando!');
    }
};
module.exports = {
    generarNumeroAleatorio,
    verificarAdivinanza
};
    