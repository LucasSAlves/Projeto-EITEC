import { Categoria } from "../categorias/categoria";


export interface Pordutos {
    id:number;
    nomeProduto: string;
    valorProduto: number;
    dataVencimento: Date;
    quantEstoque: number;
    produtoPerecivel: string;
    categoria_id: number;
    categoria?: Categoria;
}
