import { Component } from '@angular/core';
import { ApiProdutosService } from '../api-produtos.service';
import { Router } from 'express';
import { routes } from '../app.routes';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-add-categoria',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './add-categoria.component.html',
  styleUrl: './add-categoria.component.css'
})
export class AddCategoriaComponent {
  dadosFormulario = {
    nome: '',
    };
  constructor(private produtoService: ApiProdutosService){}

  envirarDados(){
    this.produtoService.getCategoriaIncluir(this.dadosFormulario).subscribe(
      resposta => {
      },
      erro => {
        console.error('Erro ao fazer POST:', erro);
      }
    );
  }
  }
