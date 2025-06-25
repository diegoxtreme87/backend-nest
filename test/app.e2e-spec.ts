import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!!');
  });

  it('/operaciones (GET)', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'sumar', a: 10, b: 30 })
      .expect(200)
      .expect('Content-type', /application\/json/)
      .then((response) => {
        expect(response.body.resultado).toBe(40);
      });
  });

  it('/operaciones (GET)', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'sumar', a: -3, b: -2 })
      .expect(200)
      .expect('Content-type', /application\/json/)
      .then((response) => {
        expect(response.body.resultado).toBe(-5);
      });
  });

  it('/operaciones (GET)', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'suma', a: "a", b: 100 })
      .expect(502);
  });

  it('/operaciones (GET)', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'restar', a: 10, b: 30 })
      .expect(200)
      .expect('Content-type', /application\/json/)
      .then((response) => {
        expect(response.body.resultado).toBe(-20);
      });
  });

  it('/operaciones (GET)', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'restar', a: -3, b: -2 })
      .expect(200)
      .expect('Content-type', /application\/json/)
      .then((response) => {
        expect(response.body.resultado).toBe(-1);
      });
  });

  it('/operaciones (GET)', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'restar', a: "a", b: 100 })
      .expect(502);
  });

  it('/operaciones (GET)', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'multiplicar', a: 10, b: 30 })
      .expect(200)
      .expect('Content-type', /application\/json/)
      .then((response) => {
        expect(response.body.resultado).toBe(300);
      });
  });

  it('/operaciones (GET)', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'multiplicar', a: -3, b: -2 })
      .expect(200)
      .expect('Content-type', /application\/json/)
      .then((response) => {
        expect(response.body.resultado).toBe(6);
      });
  });

  it('/operaciones (GET)', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'multiplicar', a: 10, b: -1})
      .expect(200)
      .expect('Content-type', /application\/json/)
      .then((response) => {
        expect(response.body.resultado).toBe(-10);
      });
  });

  it('/operaciones (GET)', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'multiplicar', a: "a", b: 0 })
      .expect(502);
  });

  it('/operaciones (GET)', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'dividir', a: 10, b: 30 })
      .expect(200)
      .expect('Content-type', /application\/json/)
      .then((response) => {
        expect(response.body.resultado).toBeCloseTo(0.33333);
      });
  });

  it('/operaciones (GET)', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'dividir', a: -3, b: -1 })
      .expect(200)
      .expect('Content-type', /application\/json/)
      .then((response) => {
        expect(response.body.resultado).toBe(3);
      });
  });

  it('/operaciones (GET)', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'dividir', a: "a", b: 0 })
      .expect(502);
  });
  it('/operaciones (GET)', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'potencia', a: 10, b: 2 })
      .expect(200)
      .expect('Content-type', /application\/json/)
      .then((response) => {
        expect(response.body.resultado).toBe(100);
      });
  });

  it('/operaciones (GET)', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'potencia', a: -3, b: -2 })
      .expect(200)
      .expect('Content-type', /application\/json/)
      .then((response) => {
        expect(response.body.resultado).toBeCloseTo(0.1111);
      });
  });

  it('/operaciones (GET)', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'potencia', a: "a", b: 0 })
      .expect(200);
  });

  it('/operaciones (GET)', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'factorial', a: 3, b: 2 })
      .expect(200)
      .expect('Content-type', /application\/json/)
      .then((response) => {
        expect(response.body.resultado).toBe(6);
      });
  });

  it('/operaciones (GET)', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'factorial', a: 1, b: 1 })
      .expect(200)
      .expect('Content-type', /application\/json/)
      .then((response) => {
        expect(response.body.resultado).toBe(1);
      });
  });

  
});
