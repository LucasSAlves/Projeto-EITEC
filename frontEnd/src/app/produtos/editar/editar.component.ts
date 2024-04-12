import { Component } from '@angular/core';
import { Pordutos } from '../pordutos';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProdutosService } from '../produtos.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CommonModule } from '@angular/common';
import { CategoriaService } from '../../categorias/categoria.service';
import { Categoria } from '../../categorias/categoria';
import { MAT_DATE_LOCALE, provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [CommonModule, 
    RouterModule, 
    MatDatepickerModule, 
    MatInputModule,
    MatRadioModule,
    FormsModule,
    MatCheckboxModule,
    MatCardModule, 
    FormsModule,
    ReactiveFormsModule],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css',
  providers: [provideNativeDateAdapter(), {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'}]
})
export class EditarComponent {
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
      nomeProduto: new FormControl(''),
      valorProduto: new FormControl(''),
      dataVencimento: new FormControl(''),
      quantEstoque: new FormControl(''),
      produtoPerecivel: new FormControl(''),
      categoria_id: new FormControl('')
    });
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
    this.produtoService.editarProduto(this.id, this.form.value).subscribe((res:any) => {
      alert("Produto Atualizado com Sucesso");
      this.router.navigateByUrl('produtos/index');
    })
  }
}
