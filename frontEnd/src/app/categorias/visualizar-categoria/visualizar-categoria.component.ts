import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Categoria } from '../categoria';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-visualizar-categoria',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    MatDatepickerModule, 
    MatInputModule,
    MatRadioModule,
    FormsModule,
    MatCheckboxModule,
    MatCardModule, 
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './visualizar-categoria.component.html',
  styleUrl: './visualizar-categoria.component.css',
  providers: [ {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'}]
})
export class VisualizarCategoriaComponent {
  id!: number;
  categorias!: Categoria;
  formulario!: FormGroup;

  constructor(public categoriasService: CategoriaService, private router:Router, private route: ActivatedRoute) {}

  ngOnInit():void {
    this.id = this.route.snapshot.params['categoriaId'];
    this.categoriasService.viCategoria(this.id).subscribe((data: Categoria) => {
      this.categorias = data;
    });

    this.formulario = new FormGroup({
      nome: new FormControl({value: '', disabled: true})
    });
  }
}