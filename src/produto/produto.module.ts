import { TypeOrmModule } from "@nestjs/typeorm";
import { Produtos } from "./entities/produto.enity";
import { Module } from "@nestjs/common";
import { ProdutoService } from "./services/produto.service";
import { Produtocontroller } from "./controllers/produto.controller";
import { CategoriaModule } from "../categoria/categoria.module";

@Module({
    imports: [TypeOrmModule.forFeature([Produtos]), CategoriaModule],
    providers: [ProdutoService],
    controllers: [Produtocontroller],
    exports: [],

})
export class ProdutoModule {}