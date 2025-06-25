import { Test, TestingModule } from '@nestjs/testing';
import { OperacionesService } from './operaciones.service';

describe('OperacionesService', () => {
  let service: OperacionesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OperacionesService],
    }).compile();

    service = module.get<OperacionesService>(OperacionesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('operacion invalida' ,() => {
    //Operacion no apliccada
    expect(service.operar('hola',1,2)).toBeNaN();
  })
  
  it('operacion deberia sumar', () => {
    //Sumar 2 numeros positivos
    expect(service.operar('sumar', 2, 3)).toBe(5);
    //Sumar 2 numeros negativos
    expect(service.operar('sumar', -3, -2)).toBe(-5);
    //Sumar 1 positivo y 1 negativo
    expect(service.operar('sumar', -2, 1)).toBe(-1);
    //Intentar incluir string
    expect(service.operar('sumar', 'a' as any, 500)).toBeNaN();
    //undefined
    expect(()=> service.operar('sumar', undefined as any, 2345)).toThrow(new Error('No se puede llamar con numeros indefinidos.'));

  });

  it('operacion deberia restar',()=>{
    //Restar 2 numeros positivos
    expect(service.operar('restar', 2, 3)).toBe(-1);
    //Restar 2 numeros negativos
    expect(service.operar('restar', -3, -2)).toBe(-1);
    //Restar 1 positivo y 1 negativo
    expect(service.operar('restar', -2, 1)).toBe(-3);
    //Intentar incluir string
    expect(service.operar('restar', 'a' as any, 500)).toBeNaN();
    //undefined
    expect(()=> service.operar('restar', undefined as any, 2345)).toThrow(new Error('No se puede llamar con numeros indefinidos.'));

  })

  it('operacion deberia multiplicar',()=>{
    //Multiplicar 2 numeros positivos
    expect(service.operar('multiplicar', 2, 3)).toBe(6);
    //Multiplicar 2 numeros negativos
    expect(service.operar('multiplicar', -3, -2)).toBe(6);
    //Multiplicar 1 positivo y 1 negativo
    expect(service.operar('multiplicar', -2, 1)).toBe(-2);
    //Multiplicar por 0
    expect(service.operar('multiplicar', 0, 1)).toBe(0);
    //Intentar incluir string
    expect(service.operar('multiplicar', 'a' as any, 500)).toBeNaN();
    //undefined
    expect(()=> service.operar('multiplicar', undefined as any, 2345)).toThrow(new Error('No se puede llamar con numeros indefinidos.'));

  })

    it('operacion deberia dividir',()=>{
    //Dividir 2 numeros positivos
    expect(service.operar('dividir', 2, 3)).toBeCloseTo(0.6666);
    //Dividir 2 numeros negativos
    expect(service.operar('dividir', -3, -2)).toBe(1.5);
    //Dividir 1 positivo y 1 negativo
    expect(service.operar('dividir', -2, 1)).toBe(-2);
    //Dividir por 0
    expect(service.operar('dividir', 1, 0)).toBeNaN();
    //Intentar incluir string
    expect(service.operar('dividir', 'a' as any, 500)).toBeNaN();
    //undefined
    expect(()=> service.operar('dividir', undefined as any, 2345)).toThrow(new Error('No se puede llamar con numeros indefinidos.'));

  })

    it('operacion deberia realizar potencia',()=>{
    //Dividir 2 numeros positivos
    expect(service.operar('potencia', 2, 3)).toBe(8);
    //Dividir 2 numeros negativos
    expect(service.operar('potencia', -3, -2)).toBeCloseTo(0.1111);
    //Dividir 1 positivo y 1 negativo
    expect(service.operar('potencia', -2, 1)).toBe(-2);
    //Dividir por 0
    expect(service.operar('potencia', 1, 0)).toBe(1);
    //Intentar incluir string
    expect(service.operar('potencia', 'a' as any, 500)).toBeNaN();
    //undefined
    expect(()=> service.operar('potencia', undefined as any, 2345)).toThrow(new Error('No se puede llamar con numeros indefinidos.'));

  })

  it('operacion factorial',()=>{
    //Utiliza los 2 parametros pero solo tomara el primero.
    expect(service.operar('factorial', 10, 3)).toBe(3628800);
    //factorial numeros negativo
    expect(service.operar('factorial', -3, -2)).toBeNaN();
    //Dividir 1 positivo y 1 negativo
    expect(service.operar('factorial', -2, 1)).toBeNaN();
    //Dividir por 0
    expect(service.operar('factorial', 1, 0)).toBe(1);
    //Intentar incluir string
    expect(service.operar('factorial', 'a' as any, 500)).toBeNaN();
    //undefined
    expect(()=> service.operar('factorial', undefined as any, 2345)).toThrow(new Error('No se puede llamar con numeros indefinidos.'));

  })

});
