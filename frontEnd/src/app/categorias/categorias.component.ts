import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiProdutosService } from '../api-produtos.service';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

interface DadosCategorias {
  id: number;
  nome: string;
}

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [RouterLink, CommonModule, NgbModalModule],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent implements OnInit{
  displayedColumns: string[] = ['id', 'nome'];
  dadosCategorias:DadosCategorias[] | undefined;

  constructor(private apiProdutos: ApiProdutosService) {

  }

  ngOnInit(): void {
    this.getCategoria();
  }

  
  getCategoria(){
    this.apiProdutos.getCategoria().subscribe(categoria =>{
      this.dadosCategorias=categoria;
    });
  }


}
