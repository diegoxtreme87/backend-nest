import { Injectable } from '@nestjs/common';

@Injectable()
export class OperacionesService {
  operar(operacion: string = '', a: number, b: number) {
    switch(operacion)
    {
      case 'sumar':
        return this.#sumar(a,b);
      case 'restar':
        return this.#restar(a,b);
      case 'multiplicar':
        return this.#multiplicar(a,b);
      case 'dividir':
        return this.#dividir(a,b);
      case 'potencia':
        return this.#potencia(a,b);
      case 'factorial':
        return this.#factorial(a,b);
      default:
        return NaN;
    }

  }

  #sumar(a: number, b: number) {
    if (a === undefined || b === undefined) {
      throw new Error('No se puede llamar con numeros indefinidos.');
    }

    if (typeof a !== 'number' || typeof b !== 'number') {
      return NaN;
    }
    return a + b;
  }

  #restar(a: number, b: number) {
    if (a === undefined || b === undefined) {
      throw new Error('No se puede llamar con numeros indefinidos.');
    }

    if (typeof a !== 'number' || typeof b !== 'number') {
      return NaN;
    }
    return a - b;
  }

  #multiplicar(a: number, b: number) {
    if (a === undefined || b === undefined) {
      throw new Error('No se puede llamar con numeros indefinidos.');
    }

    if (typeof a !== 'number' || typeof b !== 'number') {
      return NaN;
    }
    return a * b;
  }

  #dividir(a: number, b: number) {
    if (a === undefined || b === undefined) {
      throw new Error('No se puede llamar con numeros indefinidos.');
    }

    if (typeof a !== 'number' || typeof b !== 'number') {
      return NaN;
    }
    if(b===0)
    {
      return NaN;
    }
    return a / b;
  }

  #potencia(a: number, b: number) {
    if (a === undefined || b === undefined) {
      throw new Error('No se puede llamar con numeros indefinidos.');
    }

    if (typeof a !== 'number' || typeof b !== 'number') {
      return NaN;
    }
    return Math.pow(a,b);
  }

  #factorial(a: number, b: number) {
    if (a === undefined ) {
      throw new Error('No se puede llamar con numeros indefinidos.');
    }

    if (typeof a !== 'number' ) {
      return NaN;
    }

    if(a<=0)
    {
      return NaN;
    }

    let resultado =1;
    for (let i=2;i<=a;i++)
    {
      resultado=resultado*i;
    }
    return resultado;
  }
}
