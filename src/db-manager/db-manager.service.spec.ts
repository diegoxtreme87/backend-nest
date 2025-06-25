import { Test, TestingModule } from '@nestjs/testing';
import { DbManagerService } from './db-manager.service';

describe('DbManagerService', () => {
  let service: DbManagerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DbManagerService],
    }).compile();

    service = module.get<DbManagerService>(DbManagerService);
  });

  it('el servicio debería estar definido', () => {
    expect(service).toBeDefined();
  });

  describe('getUser', () => {
    it('deberia valer como prueba de funcionamiento de metodo getuser con valor josefa', () => {
      const testId = 123;
      const expectedUser = { id: testId, nombre: 'Josefa' };

      const result = service.getUser(testId);
      expect(result).toEqual(expectedUser);
    });

  });
});