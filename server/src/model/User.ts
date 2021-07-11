import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm'

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column("simple-array")
    maquinas: string[];

    @Column()
    carrera: string;

    @Column()
    actividad: string;

    @Column()
    mail: string;

    @Column()
    genero: string;

    @Column()
    campus: string;

    @Column()
    ingreso: number;

    @CreateDateColumn()
    fecha: Date;
}