import { Component } from '@angular/core';
import { CategoriasModule } from '../categorias.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { Categoria } from '../categoria';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-index-categoria',
  standalone: true,
  imports: [CategoriasModule, CommonModule, RouterModule, MatIconModule],
  templateUrl: './index-categoria.component.html',
  styleUrl: './index-categoria.component.css',
  providers: [ {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'}]
})
export class IndexCategoriaComponent {
  categoria: Categoria[]=[];

  constructor(public categoriaService:CategoriaService){

    }
    ngOnInit(): void {
      this.categoriaService.getCategoria().subscribe((data:Categoria[]) => {
        this.categoria = data;
      });
  }

  delete(id: number) {
    this.categoriaService.deleteCategoria(id).subscribe((res:any) => {
      alert("Excluído com Sucesso!");
      window.location.reload();
    });
  }
}
