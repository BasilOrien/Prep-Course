// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa
  // un par clave-valor en forma de matriz.
  //Ejemplo:
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let arr = [];
  for (const property in objeto) {
    arr.push([property, objeto[property]]);
  }
  return arr;
}

function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  //Escribe tu código aquí
  let finalObject = {};

  function findInObject(object, find) {
    for (const property in object) {
      if (property === find) return true;
    }
    return false;
  }
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== " ") {
      if (!findInObject(finalObject, string[i])) {
        finalObject[string[i]] = 1;
      } else {
        finalObject[string[i]] += 1;
      }
    }
  }
  return finalObject;
}

function capToFront(string) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let newString = "";
  let A = "";
  let B = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      A += string[i];
    } else {
      B += string[i];
    }
  }
  return newString + A + B;
}

function asAmirror(string) {
  //La función recibe una frase.
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let gnirts = "";
  for (let i = 0; i < string.split(" ").length; i++) {
    let currString = string.split(" ")[i];
    for (let j = currString.length - 1; j >= 0; j--) {
      gnirts += currString[j];
    }
    if (i !== string.split(" ").length - 1) {
      gnirts += " ";
    }
  }

  return gnirts;
}

function capicua(numero) {
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let x = "";
  numero = numero.toString();
  for (let i = numero.length - 1; i >= 0; i--) {
    x += numero[i];
  }
  if (numero === x) {
    return "Es capicua";
  } else {
    return "No es capicua";
  }
}

function deleteAbc(cadena) {
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  return cadena
    .split("")
    .filter((x) => {
      return x !== "a" && x !== "b" && x !== "c";
    })
    .join("");
}

function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  let index = 0;
  while (index < arr.length) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i].length > arr[i + 1].length) {
        aux = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = aux;
      }
    }
    index++;
  }
  return arr;
}

function buscoInterseccion(arreglo1, arreglo2) {
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  return arreglo1.filter((numero1)=>{
    return arreglo2.includes(numero1)
  })
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  deObjetoAmatriz,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
