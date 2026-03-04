//Parte 1: Imprimir todos los valores
console.log("Parte 1: Todos los valores");
for (let j = 0; j < numbersArray.length; j++) {
  console.log(numbersArray[j]);
}

//Parte 2: Saltar todos los números pares
console.log("\nParte 2: Saltar números pares");
for (let j = 0; j < numbersArray.length; j++) {
  if (numbersArray[j] % 2 === 0) {
    continue; // Salta a la siguiente iteración si es par
  }
  console.log(numbersArray[j]);
}

//Parte 3: Detenerse al llegar al número 10
console.log("\nParte 3: Detenerse en el número 10");
for (let j = 0; j < numbersArray.length; j++) {
  if (numbersArray[j] === 10) {
    break; // Destruye el bucle al encontrar el 10
  }
  console.log(numbersArray[j]);
}