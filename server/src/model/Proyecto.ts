import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Proyecto {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    leader_name: string;

    @Column()
    email: string;

    @Column()
    resumen_ejecutivo: string;

    @Column()
    integrantes: string;

    @Column()
    tipo_proyecto: string;
}