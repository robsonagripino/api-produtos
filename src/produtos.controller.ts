import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { Produto } from "./produto.module";
import { ProdutoService } from "./produtos.service";

@Controller('produtos')
export class ProdutosController {

    constructor(private produtosService: ProdutoService) {

    }

    @Get()
    obterTodos(): Produto [] {
        return this.produtosService.obeterTodos();
    }

    @Get(':id')
    obterUm(@Param() params): Produto {
        return this.produtosService.obterUm(params.id);
    }

    @Post()
    criar(@Body() produto) {
        produto.id = 100;
        this.produtosService.criar(produto);
    }

    @Put()
    alterar(@Body() produto, @Query() p): Produto {
        console.log(produto, p)
        return this.produtosService.alterar(produto);
    }

    @Delete(':id')
    apagar(@Param() params): string {
        this.produtosService.apagar(params.id);
        return `Apaga o produto ${params.id}`;
    }
}