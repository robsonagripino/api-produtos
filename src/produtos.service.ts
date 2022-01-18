import { Injectable } from "@nestjs/common";
import { Produto } from "./produto.module";

@Injectable()
export class ProdutoService {
    produtos: Produto [] = [
        // new Produto('liv01', 'livro1', 19.90),
        // new Produto('liv02', 'livro2', 29.90),
        // new Produto('liv03', 'livro3', 39.90),
    ];

    obeterTodos(): Produto[] {
        return this.produtos;
    }
 
    obterUm(id: number): Produto {
        return this.produtos[0];
    }

    criar(produto: Produto) {
        this.produtos.push(produto);
    }

    alterar(produto: Produto): Produto {
        return produto;
    }

    apagar(id: number): object {
        this.produtos.pop();
        return {id: id};
    }
}