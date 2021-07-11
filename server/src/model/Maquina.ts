import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Maquina {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    tipo: string;

    @Column()
    estado: string;
}