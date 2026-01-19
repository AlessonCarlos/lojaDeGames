import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { ProdutoService } from "../services/produto.service";
import { Produtos } from "../entities/produto.enity";

@Controller("/produtos")
export class Produtocontroller {
    constructor(private readonly produtoService: ProdutoService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Produtos[]> {
        return this.produtoService.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Produtos>{
        return this.produtoService.findById(id);
    }

    @Get('/titulo/:titulo')
    @HttpCode(HttpStatus.OK)
    findByAllTitutlo(@Param('titulo') titulo: string): Promise<Produtos[]>{
        return this.produtoService.findByTitulo(titulo)
    }

    // metodo create
    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() produto: Produtos): Promise<Produtos>{
        return this.produtoService.create(produto)
    }

    //metodo atualizar
    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() produto: Produtos): Promise<Produtos> {
        return this.produtoService.update(produto)
    }

    //metodo deletar
    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number){
        return this.produtoService.delete(id)
    }
        
}