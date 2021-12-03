import {Produit } from './../../Models/Product';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private httpC: HttpClient) {}
  private url = 'http://localhost:8089/SpringMVC/produit/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  getAllProducts(): Observable<Produit[]> {
    return this.httpC.get<Produit[]>(this.url + 'retrieve-all-produits');
  }


}
