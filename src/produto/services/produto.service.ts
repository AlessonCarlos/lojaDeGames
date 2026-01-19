import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Produtos } from "../entities/produto.enity";
import { ILike, Repository } from "typeorm";
import { DeleteResult } from "typeorm/browser";
import { CategoriaService } from "../../categoria/services/categoria.service";

@Injectable()
export class ProdutoService {
    constructor(
        @InjectRepository(Produtos)
        private produtoRepository: Repository<Produtos>,
        private categoriaService:CategoriaService
    ) {}

    async findAll(): Promise<Produtos[]> {
        return await this.produtoRepository.find({
            relations:{
                categoria: true
            }
        })
    }

    async findById(id: number): Promise<Produtos> {

        const produto = await this.produtoRepository.findOne({
            where: {
                id
            },
            relations:{
                categoria: true
            }
            
        });

        if(!produto)
            throw new HttpException('Produto não encontrado!', HttpStatus.NOT_FOUND);

        return produto
    }

    async findByTitulo(titulo: string): Promise<Produtos[]> {

        return await this.produtoRepository.find({
            where:{
                titulo: ILike(`%${titulo}%`)
            },
            relations:{
                categoria: true
            }
        }) 
    
    }

     //metodo create
    async create(produto: Produtos): Promise<Produtos>{

        await this.categoriaService.findById(produto.categoria.id)

        return await this.produtoRepository.save(produto)
    }

    //metodo atualizar
    async update(produto: Produtos): Promise<Produtos>{
        await this.findById(produto.id)

        await this.categoriaService.findById(produto.categoria.id)
        return await this.produtoRepository.save(produto)
    }

    //metodo deletar
    async delete(id: number): Promise<DeleteResult>{
        await this.findById(id)
        return await this.produtoRepository.delete(id)
    }

}