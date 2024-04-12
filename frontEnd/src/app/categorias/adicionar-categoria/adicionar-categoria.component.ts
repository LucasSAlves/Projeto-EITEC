import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { Router, RouterModule } from '@angular/router';
import { Categoria } from '../categoria';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-adicionar-categoria',
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
  templateUrl: './adicionar-categoria.component.html',
  styleUrl: './adicionar-categoria.component.css',
  providers: [ {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'}],
})
export class AdicionarCategoriaComponent {
  formulario!: FormGroup;
  categorias:Categoria[]=[];

  constructor(public categoriaService: CategoriaService, private router:Router){} 
  ngOnInit():void{
    this.formulario = new FormGroup({
      nome: new FormControl('')
    });
  }
  get f(){
    return this.formulario.controls;
  }
  submit(){
    console.log(this.formulario.value);

    this.categoriaService.addCategoria(this.formulario.value).subscribe((res:any) =>{
      alert('Categoria Criada com Sucesso!');
      this.router.navigateByUrl('categorias/index');
    });
  }
}


