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

  deleteStock(stock: Stock): Observable<Stock> {
    const url = this.url + 'remove-stock/' + stock.idStock;
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

}
