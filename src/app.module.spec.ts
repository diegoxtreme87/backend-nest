import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppModule } from './app.module'; // Importa el AppModule real

describe('AppModule', () => {
  let appModule: TestingModule;

  beforeEach(async () => {
    appModule = await Test.createTestingModule({
      imports: [AppModule], // Importa el AppModule real aquí
    }).compile();
  });

  it('Prueba de AppModule', () => {
    expect(appModule).toBeDefined();
  });

  

});