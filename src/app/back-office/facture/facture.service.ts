import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Facture } from 'src/app/Models/Facture';

@Injectable({
  providedIn: 'root'
})
export class FactureService {

  constructor(private httpC: HttpClient) {}
  private url = 'http://localhost:8089/SpringMVC/facture/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getAllFacture(): Observable<Facture[]> {
    return this.httpC.get<Facture[]>(this.url + 'retrieve-all-invocies');
  }

  deleteFacture(id: number): Observable<Facture> {
    const url = this.url + 'delete-invoice/' + id;
    return this.httpC.delete<Facture>(url);
  }

}
