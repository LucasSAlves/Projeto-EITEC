import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from './categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private apiURL = 'http://localhost:8000/api';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  getCategoria():Observable<any> {
    return this.httpClient.get(this.apiURL+'/categoria');
  }

  addCategoria(categoria:Categoria):Observable<any> {
    return this.httpClient.post(this.apiURL+'/categoria/', JSON.stringify(categoria), this.httpOptions);
  }

  viCategoria(id:number):Observable<any> {
    return this.httpClient.get(this.apiURL+'/categoria/'+id);
  }

  editarCategoria(id:number, categoria:Categoria):Observable<any> {
    return this.httpClient.put(this.apiURL+'/categoria/'+id, JSON.stringify(categoria), this.httpOptions);
  }

  deleteCategoria(id:number){
    return this.httpClient.delete(this.apiURL+'/categoria/'+id);
  }
}
