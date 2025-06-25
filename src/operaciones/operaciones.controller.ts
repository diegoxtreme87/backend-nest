import { Controller, Get, Query, Res } from '@nestjs/common';
import { OperacionesService } from './operaciones.service';
import { Response } from 'express';

@Controller('operaciones') // localhost:3000/operaciones
export class OperacionesController {
  constructor(private readonly operService: OperacionesService) {}

  @Get() // localhost:3000/operaciones?operacion=suma&a=10&b=40
  operar(
    @Res() res: Response,
    @Query('operacion') operacion: string,
    @Query('a') a: number,
    @Query('b') b: number,
  ) {

    try{
      const calculo = this.operService.operar(operacion, +a, +b);
      if(!isNaN(calculo)){
        return res. status(200).json({resultado:calculo, mensaje: 'operacion exitosa'});
      }
      else
      {
        return res.status(502).json({resultado:calculo,mensaje:'operacion no pudo ser calculada'});
      }
    }
    catch(error)
    {
      return res.status(502).json({resultado:null,mensaje:'operacion no pudo ser calculada'});
    }

    
  }
}
