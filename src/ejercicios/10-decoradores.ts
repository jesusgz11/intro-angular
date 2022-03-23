function classDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    newProperty = 'new property';
    hello = 'override';
  };
}

@classDecorator
class MiSuperClase {
  public miPropiedad: string = 'ABC123';

  imprimir() {
    console.log('Hola Mundo');
  }
}

// clase con newProperty y hello
// sin miPropiedad y metodo imprimir
console.log(MiSuperClase);

const miClase = new MiSuperClase();
