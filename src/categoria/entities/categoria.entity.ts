import { IsNotEmpty } from "class-validator"
import{Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm"
import { Produtos } from "../../produto/entities/produto.enity"

@Entity({name:"tb_categoria"})
export class Categoria {
    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @Column({length:255, nullable: false})
    descricao: string
    
    @OneToMany(() => Produtos, (produto) => produto.categoria)
    produto: Produtos[]
}