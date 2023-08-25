//1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

const paridadNumero = (numero) => {
  if (numero % 2 === 0) {
    console.log(`El número ${numero} es par.`);
  } else {
    console.log(`El número ${numero} es impar.`);
  }
};

//paridadNumero(2);

//2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

const numeroMayor = (numero1, numero2) => {
  if (numero1 > numero2) {
    console.log(`El número ${numero1} es mayor que ${numero2}.`);
  } else if (numero1 < numero2) {
    console.log(`El número ${numero2} es mayor que ${numero1}.`);
  } else {
    console.log(`Los números son iguales`);
  }
};

//numeroMayor(10, 15);

//3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

const multiploDe5 = (num) => {
  if (num % 5 === 0) {
    console.log(`El número ${num} es múltiplo de 5.`);
  } else {
    console.log(`El número ${num} no es múltiplo de 5.`);
  }
};

//multiploDe5(12);

//4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.

const contadorHasta = (num) => {
  for (let i = 0; i <= num; i++) {
    console.log(i);
  }
};

//contadorHasta(23);

//5- Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.

const repetirPalabra = (palabra, rep) => {
  for (let i = 1; i <= rep; i++) {
    console.log(palabra);
  }
};

//repetirPalabra(`:D`, 7);

//6- Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

const imprimirArray = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
};

const valoresPrueba = [5, 10, 70, 3, 15, 2];
//imprimirArray(valoresPrueba);

//7- Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".

const saltarElemento5 = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (i === 4) {
      continue;
    }
    console.log(array[i]);
  }
};

//saltarElemento5(valoresPrueba);

//8- Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

const multiplicarArray = (array, factor) => {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i] * factor);
  }
};

//multiplicarArray(valoresPrueba, 2);
