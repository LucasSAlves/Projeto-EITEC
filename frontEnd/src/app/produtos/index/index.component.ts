import { CommonModule, registerLocaleData } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Pordutos } from '../pordutos';
import { ProdutosService } from '../produtos.service';
import {MatIconModule} from '@angular/material/icon';
import { ProdutosModule } from '../produtos.module';
import { CategoriaService } from '../../categorias/categoria.service';
import { Categoria } from '../../categorias/categoria';
import { MAT_DATE_LOCALE } from '@angular/material/core';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [ProdutosModule, CommonModule, RouterModule, MatIconModule ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css',
  providers: [ {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'}]
})


export class IndexComponent {
  
  produto:Pordutos[]=[];
  constructor(public produtoServce:ProdutosService, public categoriaService:CategoriaService){}

  ngOnInit():void {
    this.produtoServce.getProdutos().subscribe((data:Pordutos[])=>{
      this.produto = data;

      this.produto.forEach(prod => {
        prod.produtoPerecivel = prod.produtoPerecivel ? 'Sim' : 'Não';
      });

      this.produto.forEach(prod => {
        this.categoriaService.viCategoria(prod.categoria_id).subscribe((categoria: Categoria)=> {
          prod.categoria = categoria;
        })
      });
        console.log(this.produto);
    })
  }

  delete(id: number) {
    this.produtoServce.deleteProduto(id).subscribe((res:any) => {
      alert("Excluido com Sucesso");
      window.location.reload();
    })
  }

}
