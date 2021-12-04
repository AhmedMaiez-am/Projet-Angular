import { Product } from './../../Models/Product';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productsUrl:string='http://localhost:8089/SpringMVC/product';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private myhttpclient: HttpClient) {}

  getAllProduct(): Observable<Product[]> {
    return this.myhttpclient.get<Product[]>('http://localhost:8089/SpringMVC/product/retrieve-all-products',this.httpOptions);
  }

  addProduct(product: Product,idRayon:number,idStock:number,categorieProduit:string): Observable<Product> {
    return this.myhttpclient.post<Product>(this.productsUrl + `/add-produit/${idRayon}/${idStock}/${categorieProduit}`, product, this.httpOptions);
  }
  deleteProduct(id:number): Observable<Product> {
    const url = this.productsUrl + `/delete-produit/${id}` ;
    return this.myhttpclient.delete<Product>(url);
  }
  updateProduct(product:Product,idRayon:number,idStock:number,cat:string):Observable<Product>{
    return this.myhttpclient.put<Product>(this.productsUrl+`/update/${idRayon}/${idStock}/${cat}`,product);
  }
}
