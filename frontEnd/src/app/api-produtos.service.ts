import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { get } from 'http';

@Injectable({
  providedIn: 'root'
})
export class ApiProdutosService {

  url: string = 'http://localhost:8000';
  constructor(private http: HttpClient) { }

  getCategoria() {
    // Implemente aqui a lógica para fazer a chamada à API, por exemplo:
    return this.http.get<any>(this.url + '/api/categoria');
  }

  httpOptions = {
    Headers: {
      'Content-Type': 'application/json'  
     }
  }

  getCategoriaIncluir(dados: any){
    return this.http.post<any>(this.url + '/api/categoria', dados);
  }
}
