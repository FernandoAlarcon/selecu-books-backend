import { Module } from '@nestjs/common';
import { LibrosController } from './libros.controller';
import { LibrosService } from './libros.service';
import { LibrosEntity } from './libros.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([LibrosEntity])],
  controllers: [LibrosController],
  providers: [LibrosService, LibrosEntity],
})
export class LibrosModule {

  

}
