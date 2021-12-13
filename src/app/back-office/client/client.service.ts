import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from 'src/app/Models/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private httpC: HttpClient) {}
  private url = 'http://localhost:8089/SpringMVC/client/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  getAllClient(): Observable<Client[]> {
    return this.httpC.get<Client[]>(this.url + 'retrieve-all-clients');
  }

  addClient(client: Client): Observable<Client> {
    return this.httpC.post<Client>(
      this.url+'add-client',
      client,
      this.httpOptions
    );
  }

  deleteClient(id: number): Observable<Client> {
    const url = this.url + 'remove-client/' + id;
    return this.httpC.delete<Client>(url);
  }


  updateClient(client:Client): Observable<Client>{
    return this.httpC.put<Client>(
      this.url+'modify-client',
      client,
      this.httpOptions
    );
  }

  search(s:string):Observable<Client[]> {
    return this.httpC.get<Client[]>(this.url+'recherche/'+s, this.httpOptions);

  }

  getPremiumClient(): Observable<Client[]> {
    return this.httpC.get<Client[]>(this.url + 'getPremium');
  }

  getNotPremiumClient(): Observable<Client[]> {
    return this.httpC.get<Client[]>(this.url + 'get_non_premium');
  }

  getCountPremium(): Observable<number>{
    return this.httpC.get<number>(this.url+'getCountPremium');
  }

  getCountFidele(): Observable<number>{
    return this.httpC.get<number>(this.url+'getCountFidele');
  }

  getCountOrdinaire(): Observable<number>{
    return this.httpC.get<number>(this.url+'getCountOrdinaire');
  }

}

