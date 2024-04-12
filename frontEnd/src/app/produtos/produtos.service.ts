import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pordutos } from './pordutos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  private apiURL = 'http://localhost:8000/api';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  constructor(private httpClient:HttpClient) { }

  getProdutos():Observable<any> {
    return this.httpClient.get(this.apiURL+'/produto');
  }

  addProduto(produto:Pordutos):Observable<any> {
    return this.httpClient.post(this.apiURL+'/produto/', JSON.stringify(produto), this.httpOptions);
  }

  viProduto(id:number):Observable<any> {
    return this.httpClient.get(this.apiURL+'/produto/'+id);
  }

  editarProduto(id:number, produtos:Pordutos):Observable<any> {
    return this.httpClient.put(this.apiURL+'/produto/'+id, JSON.stringify(produtos), this.httpOptions);
  }

  deleteProduto(id:number){
    return this.httpClient.delete(this.apiURL+'/produto/'+id);
  }
}
