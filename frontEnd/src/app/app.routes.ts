import { Routes } from '@angular/router';
import { CategoriasComponent } from './categorias/categorias.component';
import { AddCategoriaComponent } from './add-categoria/add-categoria.component';

export const routes: Routes = [
    { path: 'categoria', component: CategoriasComponent },
{path: 'add-categoria', component: AddCategoriaComponent}
];

