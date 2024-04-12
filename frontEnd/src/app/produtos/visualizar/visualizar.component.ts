import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { provideNativeDateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Categoria } from '../../categorias/categoria';
import { CategoriaService } from '../../categorias/categoria.service';
import { Pordutos } from '../pordutos';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-visualizar',
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
    ReactiveFormsModule],
  templateUrl: './visualizar.component.html',
  styleUrl: './visualizar.component.css',
  providers: [provideNativeDateAdapter(), {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'}]
})
export class VisualizarComponent {
  id!:number;
  produtos!: Pordutos;
  categorias:Categoria[]=[];
  form!:FormGroup;

  constructor(public produtoService: ProdutosService, public categoriaService: CategoriaService , private router:Router, private route:ActivatedRoute) {}

  ngOnInit():void {

    this.categoriaService.getCategoria().subscribe((data:Categoria[])=> {
      this.categorias = data;
    });

    this.id = this.route.snapshot.params['produtosId'];
    this.produtoService.viProduto(this.id).subscribe((data:Pordutos) => {
      this.produtos = data;
    });

    this.form = new FormGroup({
      nomeProduto: new FormControl({value: '', disabled: true}),
      valorProduto: new FormControl({value: '', disabled: true}),
      dataVencimento: new FormControl({value: '', disabled: true}),
      quantEstoque: new FormControl({value: '', disabled: true}),
      produtoPerecivel: new FormControl({value: '', disabled: true}),
      categoria_id: new FormControl({value: '', disabled: true})
    });
  }
}
