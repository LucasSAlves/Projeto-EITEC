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
import { routes } from '../../app.routes';

@Component({
  selector: 'app-editar-categoria',
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
  templateUrl: './editar-categoria.component.html',
  styleUrl: './editar-categoria.component.css',
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'pt-BR'}],
})
export class EditarCategoriaComponent {
  id!: number;
  categorias!: Categoria;
  formulario!: FormGroup;

  constructor(public categoraService: CategoriaService, private router:Router, private route:ActivatedRoute){
  }
  ngOnInit():void {
    this.id = this.route.snapshot.params['categoriaId'];
    this.categoraService.viCategoria(this.id).subscribe((data:Categoria) => {
      this.categorias = data;
    });
    this.formulario = new FormGroup({
      nome: new FormControl('')
    });

  }

  get f(){
    return this.formulario.controls;
  }
  submit(){
    console.log(this.formulario.value);
    this.categoraService.editarCategoria(this.id, this.formulario.value).subscribe((res:any) => {
      alert('Categoria Atualizado com Sucesso!');
      this.router.navigateByUrl('categorias/index');
    });
  }
}
