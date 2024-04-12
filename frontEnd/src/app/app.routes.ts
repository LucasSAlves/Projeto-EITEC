import { Routes } from '@angular/router';
import { IndexComponent } from './produtos/index/index.component';
import { AdicionarComponent } from './produtos/adicionar/adicionar.component';
import { EditarComponent } from './produtos/editar/editar.component';
import { VisualizarComponent } from './produtos/visualizar/visualizar.component';
import { IndexCategoriaComponent } from './categorias/index-categoria/index-categoria.component';
import { AdicionarCategoriaComponent } from './categorias/adicionar-categoria/adicionar-categoria.component';
import { EditarCategoriaComponent } from './categorias/editar-categoria/editar-categoria.component';
import { VisualizarCategoriaComponent } from './categorias/visualizar-categoria/visualizar-categoria.component';

export const routes: Routes = [
    {path: '', redirectTo:'produtos/index', pathMatch:'full'},
    {path:'produtos/index', component:IndexComponent}, 
    {path:'produtos/adicionar', component:AdicionarComponent},
    {path:'produtos/editar/:produtosId', component:EditarComponent},
    {path:'produtos/visualizar/:produtosId', component:VisualizarComponent},

    {path:'categorias', redirectTo:'categorias/index', pathMatch:'full'},
    {path:'categorias/index', component:IndexCategoriaComponent },
    {path:'categorias/adicionar', component:AdicionarCategoriaComponent},
    {path:'categorias/editar/:categoriaId', component:EditarCategoriaComponent},
    {path:'categorias/visualizar/:categoriaId', component:VisualizarCategoriaComponent}
];
