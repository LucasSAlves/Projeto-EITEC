import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Pordutos } from '../pordutos';
import { ProdutosService } from '../produtos.service';
import { CategoriaService } from '../../categorias/categoria.service';
import { Categoria } from '../../categorias/categoria';
import {MatCalendarCellClassFunction, MatDatepickerModule} from '@angular/material/datepicker';
import { MAT_DATE_LOCALE, provideNativeDateAdapter } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-adicionar',
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
  templateUrl: './adicionar.component.html',
  styleUrl: './adicionar.component.css',
  providers: [provideNativeDateAdapter(), {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'}],
})
export class AdicionarComponent {
  formulario!: FormGroup
  produtos:Pordutos[]=[];
  categorias:Categoria[]=[];
nomeProduto: any;
  constructor(public proudutoSerice:ProdutosService, public categoriaService:CategoriaService, private router:Router) {

  }

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    // Only highligh dates inside the month view.
    if (view === 'month') {
      const date = cellDate.getDate();

      // Highlight the 1st and 20th day of each month.
      return date === 1 || date === 20 ? 'example-custom-date-class' : '';
    }

    return '';
  };
  ngOnInit():void {
    this.categoriaService.getCategoria().subscribe((data:Categoria[])=> {
      this.categorias = data;
    });

    this.formulario = new FormGroup({
      nomeProduto: new FormControl(''),
      valorProduto: new FormControl(''),
      dataVencimento: new FormControl(''),
      quantEstoque: new FormControl(''),
      produtoPerecivel: new FormControl(true),
      categoria_id: new FormControl(null)
    });
  }
  
  get f() {
    
    return this.formulario.controls;
  }
  
  submit() {
    console.log(this.formulario.value);
  
    this.proudutoSerice.addProduto(this.formulario.value).subscribe((res:any)=>{
      alert("Produto Creado com Sucesso!");
      this.router.navigateByUrl('produtos/index');
    });
  }

}
