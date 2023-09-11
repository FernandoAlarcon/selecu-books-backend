import { Controller, Post, Body, Param, Get, Put, Delete, Req  } from '@nestjs/common';
import { LibrosModel } from './libros.interfaces';
import { LibrosService } from './libros.service';
import { get } from 'http';
import { LibrosEntity } from './libros.entity';
import { Request } from 'express';

@Controller('libros')
export class LibrosController {
  constructor(private libroService: LibrosService) {}

  @Post()
  createLibros(@Body() newLibro: any) {
    return this.libroService.CreateLibro(newLibro);
  }

  @Get('')
  //getLibros(@Param('data') data: string): Promise<LibrosEntity[]> {
  getLibros(@Req() request: Request): Promise<LibrosEntity[]> {
    const data = request.query.data;
    return this.libroService.findAll(data);
  }

  @Get(':id')
  getOneLibro(@Param() params): any {
    return this.libroService.findOneLibro(params.id);
  }

  @Put(':id')
  updateLibro(@Body() librosModel: LibrosModel, @Param() params): any {
    return this.libroService.UpdateLibro(params.id, librosModel);
  }

  @Delete(':id')
  deleteLibro(@Param() params): any {
    return this.libroService.deleteLibro(params.id);
  }
}
