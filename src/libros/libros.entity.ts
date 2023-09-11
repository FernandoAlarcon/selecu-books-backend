import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'libros' })
export class LibrosEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column({ nullable: true })
  descripcion: string;

  @Column({ nullable: true })
  autor: string;

  @Column()
  genero: string;

  @Column({ nullable: true })
  url_foto: string;

  @Column()
  cantidades: string;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
}
