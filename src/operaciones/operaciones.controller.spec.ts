
import { Test, TestingModule } from '@nestjs/testing';
import { OperacionesController } from './operaciones.controller';
import { OperacionesService } from './operaciones.service';
import { Response } from 'express'; 
import { HttpStatus } from '@nestjs/common'; 


type MockResponse = {
  status: jest.Mock;
  json: jest.Mock;
} & Response; 

describe('OperacionesController', () => {
  let controller: OperacionesController;
  let service: OperacionesService;


  const mockResponse = (): MockResponse => {
    
    const res: Partial<MockResponse> = {}; 
    res.status = jest.fn().mockReturnThis();
    res.json = jest.fn().mockReturnThis();
    return res as MockResponse; 
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OperacionesController],
      providers: [
        {
          provide: OperacionesService,
          useValue: {
            operar: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<OperacionesController>(OperacionesController);
    service = module.get<OperacionesService>(OperacionesService);
  });

  it('debería estar definido', () => {
    expect(controller).toBeDefined();
  });



  describe('operar', () => {
    let res: MockResponse; 

    beforeEach(() => {
      res = mockResponse();
    });

    it('Resultado exitoso', () => {
      jest.spyOn(service, 'operar').mockReturnValue(80);
      controller.operar(res, 'sumar', 40, 40);
      expect(service.operar).toHaveBeenCalledWith('sumar', 40, 40);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ resultado: 80, mensaje: 'operacion exitosa' });
    });

    it('Resultado Exitoso', () => {
      jest.spyOn(service, 'operar').mockReturnValue(25);
      controller.operar(res, 'restar', 50, 25);
      expect(service.operar).toHaveBeenCalledWith('restar', 50, 25);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ resultado: 25, mensaje: 'operacion exitosa' });
    });

    it('debería retornar 502', () => {
      jest.spyOn(service, 'operar').mockReturnValue(NaN);
      controller.operar(res, 'operacionInvalida', 10, 20);
      expect(service.operar).toHaveBeenCalledWith('operacionInvalida', 10, 20);
      expect(res.status).toHaveBeenCalledWith(502); 
      expect(res.json).toHaveBeenCalledWith({ resultado: NaN, mensaje: 'operacion no pudo ser calculada' });
    });

  });
});