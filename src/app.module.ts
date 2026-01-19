import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produtos } from './produto/entities/produto.enity';
import { ProdutoService } from './produto/services/produto.service';
import { ProdutoModule } from './produto/produto.module';
import { Produtocontroller } from './produto/controllers/produto.controller';
import { Categoria } from './categoria/entities/categoria.entity';
import { CategoriaModule } from './categoria/categoria.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'db_lojagames',
        entities: [Produtos, Categoria],
        synchronize: true,
}),
ProdutoModule,
CategoriaModule
],
  controllers: [],
  providers: [],
})
export class AppModule {}
