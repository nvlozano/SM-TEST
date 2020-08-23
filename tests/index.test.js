/* eslint-disable no-undef */
const {
  suma,
  multiplica,
  mayorQueTreinta,
  saludo,
  esEntero,
  fizzBuzz,
  obtenerLargoDelArray,
  dePalabrasAFrase,
  promedioResultadosTest,
  esPrimo
} = require('../index.js')



describe('suma(x, y)', function() {
  it('Deberia devolver la suma de los dos argumentos', function() {
    expect(suma(5, 5)).toBe(10);
    expect(suma(-1, 5)).toBe(4);
  });
});

describe('multiplica(x, y)', function() {
  it('Deberia devolver el producto de los dos argumentos', function() {
    expect(multiplica(5, 5)).toBe(25);
    expect(multiplica(10, -5)).toBe(-50);
    expect(multiplica(11, 0)).toBe(0);
  });
});

describe('mayorQueTreinta(num)', function() {
  it('Deberia devolver true si el numero es mayor a cincuenta sino false', function() {
    expect(mayorQueTreinta(15)).toBe(false);
    expect(mayorQueTreinta(50)).toBe(true);
    expect(mayorQueTreinta(60)).toBe(true);
  });
});

describe('saludo(idioma)', function() {
  it('should return \'Guten Tag!\' for aleman', function() {
    expect(saludo('aleman')).toBe('Guten Tag!');
  });
  it('should return \'Hola!\' for ingles', function() {
    expect(saludo('ingles')).toBe('Hello!');
  });
  it('should return \'Ni Hao!\' for mandarin', function() {
    expect(saludo('mandarin')).toBe('Ni Hao!');
  });
  it('should return \'Hola!\' if no argument is passed in or if a idioma beyond ingles, mandarin, and aleman is passed in.', function() {
    expect(saludo('frances')).toBe('Hola!');
    expect(saludo()).toBe('Hola!');
  });
});


describe('esEntero(num)', function() {
  it('should return true if num is 5', function() {
    expect(esEntero(5)).toBe(true);
  });
  it('should return false if num is 0.5', function() {
    expect(esEntero(0.5)).toBe(false);
  });
  it('should return true if num is -20', function() {
    expect(esEntero(-20)).toBe(true);
  });
  it('should return true for 0', function() {
    expect(esEntero(0)).toBe(true);
  });
});

describe('fizzBuzz(num)', function() {
  it('should return fizz if divisible by 3', function() {
    expect(fizzBuzz(9)).toBe('fizz');
  });
  it('should return buzz if divisible by 5', function() {
    expect(fizzBuzz(10)).toBe('buzz');
  });
  it('should return fizzbuzz if divisible by 3 and 5', function() {
    expect(fizzBuzz(15)).toBe('fizzbuzz');
  });
  it('should return num if not divisible by 3 or 5', function() {
    expect(fizzBuzz(4)).toBe(4);
  });
});

describe('obtenerLargoDelArray(arr)', function() {
  it('should return the length of the array', function() {
    expect(obtenerLargoDelArray([10, 10, 16, 12])).toBe(4);
    expect(obtenerLargoDelArray([97, 100, 80, 55, 72, 94])).toBe(6);
    expect(obtenerLargoDelArray(['hi', 'there', 'how', 'are', 'you', 'doing?'])).toBe(6);
  });
});

describe('dePalabrasAFrase(words)', function() {
  it('should return a string that has all of the words from the array separated by spaces', function() {
    expect(dePalabrasAFrase(['Henry', 'JavaScript', 'Class'])).toBe('Henry JavaScript Class');
    expect(dePalabrasAFrase(['Henry'])).toBe('Henry');
  });
});

describe('promedioResultadosTest(testScores)', function() {
  it('should return the average test score', function() {
    expect(promedioResultadosTest([10, 10, 16, 12])).toBe(12);
    expect(promedioResultadosTest([97, 100, 80, 55, 72, 94])).toBe(83);
  });
});

describe('esPrimo(num)', function() {
  it('should return true if num is prime', function() {
    expect(esPrimo(7)).toBe(true);
    expect(esPrimo(97)).toBe(true);
  });
  it('should return false if num is not prime', function() {
    expect(esPrimo(10)).toBe(false);
    expect(esPrimo(100)).toBe(false);
  });
});