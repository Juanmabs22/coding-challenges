/**
 * Returns the adidas three stripes logo using `@` characters.
 * @param {number} width - Width of a stripe.
 * @returns {string} adidas logo.
 */
module.exports = function (width) {
  // Regla inicial, necesitamos una longitud mínima de 2.
  // Initial requeriment, widht should be at least 2
  if (width < 2) {
    throw "Error, minimun width is 2.";
  }

  // String con las arrobas necesarias en cada linea horizontal para cada tira
  // Strign with all the ats in every horizontal linea for each stripe
  // Cacheado para agilizar - cached better performance
  const stringArrobas = "@".repeat(width);

  // Espacio como constante para estar referenciado solo una vez y no utilizar más memoria de la necesaria
  // Space constant to create and use dynamic memory only one time.
  const espacio = " ";

  // String con espcios del tamaño de una tira para margenes cuando solo hay 1 o 2 tiras
  // String with the width of a stripe, but with space for margin when there is only 1 or 2 columns
  // Cacheado para agilizar - cached better performance
  const espacioWidth = espacio.repeat(width);

  // Parte entera del número que indica el espacio entre tiras y la altura de cada tira diferente
  // Ceil number that match the space between stripes and shows the height of each stripe
  const miniSpacio = Math.ceil(Math.sqrt(width - 1));

  // String con los espacios a poner entre cada tira
  // String with the spaces to add between stripes
  // Cacheado para agilizar - cached better performance
  const espacioMini = espacio.repeat(miniSpacio);
  
  // This will be like - Esto sería algo como:
  //    @@   -->> [espacioWidth][espacioWidth][stringArrobas]\n 
  //  @@ @@  -->> [espacioWidth][stringArrobas][espacioMini][stringArrobas]\n  
  //@@ @@ @@ -->> [stringArrobas][espacioMini][stringArrobas][espacioMini][stringArrobas]\n   

  // Result
  var resultado = "";

  // index of loops, shared to get only one address to use (calloc)
  // índice de bucles, compartido para reservar solo una dirección de memoria entre
  var i;

  // Primer bloque (superior): Solo la linea final a la derecha
  // Firtst part (up): only the stripe on the right
  for (i = 0; i < miniSpacio; i++) {
    resultado += espacio.repeat(i)
      + espacioWidth
      + espacioWidth
      + stringArrobas
      + "\n";
  }

  // Segundo bloque: Las dos líneas de la derecha
  // Second part: the two stripes on the right
  for (i = 0; i < miniSpacio; i++) {
    resultado += espacio.repeat(i)
      + espacioWidth
      + stringArrobas
      + espacioMini
      + stringArrobas
      + "\n";
  }


  // Tercer bloque (abajo): Las tres líneas
  // Last part (bottom): the three stripes
  for (i = 0; i < miniSpacio; i++) {
    resultado += espacio.repeat(i)
      + stringArrobas
      + espacioMini
      + stringArrobas
      + espacioMini
      + stringArrobas
      + "\n"; // this will be a problem, esto será un problema
  }

  // Eliminamos el último salto de línea añadido en el último bucle.
  // Remove the last \n added on the last loop
  return resultado.substring(0, resultado.length - 1);
};