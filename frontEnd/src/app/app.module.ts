import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './categorias/categorias.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';


const routes: Routes = [
  { path: 'categoria', component: CategoriasComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HttpClientModule,
  ],
  imports: [
    BrowserModule,
    [RouterModule.forRoot(routes)],
    AppRoutingModule,
    HttpClientModule,
    NgbModalModule,
    Router,
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
