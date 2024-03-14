function hasUniqueChars(str) {
    // (Set) Crea un conjunto para almacenar caracteres únicos
    const uniqueSet = new Set();
  
    // Iterar a través de cada carácter en la cadena
    for (const char of str) {
      // Si el carácter ya está en el conjunto, no es único
      if (uniqueSet.has(char)) {
        return false;
      }
      // Agregar el carácter al conjunto
      uniqueSet.add(char);
    }
  
    // Si llegamos hasta aquí, todos los caracteres son únicos
    return true;
  }
  
  // Ejemplo de uso:
  console.log(hasUniqueChars("hello")); // Debería mostrar false
  console.log(hasUniqueChars("world")); // Debería mostrar true
  