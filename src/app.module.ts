import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LibrosModule } from './libros/libros.module';

import { TypeOrmModule } from '@nestjs/typeorm';
import { LibrosEntity } from './libros/libros.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '6s5sijfbmaga',
      database: 'prueba_selecu',
      entities: [__dirname + '/**/*.entity{.ts.js}', LibrosEntity],
      synchronize: true, }),
    LibrosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
