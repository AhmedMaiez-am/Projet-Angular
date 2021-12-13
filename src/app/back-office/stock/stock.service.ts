import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock } from 'src/app/Models/Stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private httpC: HttpClient) {}
  private url = 'http://localhost:8089/SpringMVC/stock/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getAllStock(): Observable<Stock[]> {
    return this.httpC.get<Stock[]>(this.url + 'retrieve-all-stocks');
  }

  deleteStock(id: number): Observable<Stock> {
    const url = this.url + 'remove-stock/' + id;
    return this.httpC.delete<Stock>(url);
  }

  addStock(stock: Stock): Observable<Stock> {
    return this.httpC.post<Stock>(
      this.url+'add-stock',
      stock,
      this.httpOptions
    );
  }

  search(s:string):Observable<Stock[]> {
    return this.httpC.get<Stock[]>(this.url+'recherche/'+s, this.httpOptions);
  
  }

  updateStock(stock:Stock): Observable<Stock>{
    return this.httpC.put<Stock>(
      this.url+'modify-stock', stock,
      this.httpOptions
    );
  }

  sortDESC():Observable<Stock[]> {
    return this.httpC.get<Stock[]>(this.url + 'stock-sortDESC');
  }
  sortASC():Observable<Stock[]> {
    return this.httpC.get<Stock[]>(this.url + 'stock-sortASC');
  }


  StockBesoin(): Observable<Stock[]> {
    return this.httpC.get<Stock[]>(this.url + 'stock-Besoin');
  
  }

  calculS(idStock: number) {
    return this.httpC.put(this.url + 'stockCal/' + idStock, this.httpOptions);
  }

  retreiveById(idStock: number): Observable<Stock> {
    const url = this.url + 'retrieve-stock/' + idStock;
    return this.httpC.get<Stock>(url);
  }
}
