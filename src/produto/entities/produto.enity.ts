import { IsNotEmpty } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Categoria } from "../../categoria/entities/categoria.entity";

@Entity({name: "tb_produtos"})
export class Produtos{
    
    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    titulo: string

    @Column('text')
    descricao: string;

    @Column('text')
    genero: string;

    @Column('text')
    plataforma: string;

    @Column('decimal', { precision: 10, scale: 2 })
    preco: number;

    @Column('int')
    estoque: number;

    @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
        onDelete: "CASCADE"
    })
    categoria: Categoria

    
}