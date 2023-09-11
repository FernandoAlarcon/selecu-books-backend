import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LibrosEntity } from './libros.entity';
import { Repository, Like } from 'typeorm';
import { LibrosModel } from './libros.interfaces';
@Injectable()
export class LibrosService {
  constructor(
    @InjectRepository(LibrosEntity)
    private readonly LibrosRepository: Repository<LibrosEntity>,
  ) {}

  async CreateLibro(LibrosEntity: any) {
    try {
      const newLibros = this.LibrosRepository.create(LibrosEntity);
      const dataSave = await this.LibrosRepository.save(newLibros);  
      if (dataSave) {
        const data = {
          status: true,
        };
        return data;
      } else {
        const data = {
          status: false,
          message: 'error con la base de datos',
        };
        return data;
      } //END IF
    } catch (error) {
      const data = {
        status: false,
        message: error,
      };
      return data;
    }
  }

  async UpdateLibro(id: number, libro: any) {
    try {
      const deleted = await this.LibrosRepository.update(id, libro);
      if (deleted) {
        const data = {
          status: true,
        };
        return data;
      } else {
        const data = {
          status: false,
          message: 'error con la base de datos',
        };
        return data;
      } //END IF
    } catch (error) {
      const data = {
        status: false,
        message: error,
      };
      return data;
    }
  }

  async findAll(data: any) {
    if (data != '') {
      const results = this.LibrosRepository.createQueryBuilder('libros')
        .where(`libros.titulo LIKE '%${data}%'`)
        .orWhere(`libros.descripcion LIKE '%${data}%'`)
        .orWhere(`libros.autor LIKE '%${data}%'`)
        .orWhere(`libros.genero LIKE '%${data}%'`)
        .orWhere(`libros.cantidades LIKE '%${data}%'`)
        .getMany();
      return results;
    } else {
      const resultData = this.LibrosRepository.find();
      return resultData;
    }
  }

  async findOneLibro(id: any) {
    const dataGet = await this.LibrosRepository.findOne(id);
    return dataGet;
  }

  async deleteLibro(id: any) {
    try {
      const deleted = await this.LibrosRepository.delete(id);

      if (deleted) {
        const data = {
          status: true,
        };
        return data;
      }else{
        const data = {
          status: false,
          message: 'error con la base de datos',
        };
        return data;
      }
    } catch (error) {
      const data = {
        status: false,
        message: error,
      };
      return data;
    }
  }
}
