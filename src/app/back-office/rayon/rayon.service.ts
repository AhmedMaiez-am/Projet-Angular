import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rayon } from 'src/app/Models/Rayon';

@Injectable({
  providedIn: 'root'
})
export class RayonService {
  
  constructor(private httpC: HttpClient) {}
  private url = 'http://localhost:8089/SpringMVC/rayon/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  getAllRayon(): Observable<Rayon[]> {
    return this.httpC.get<Rayon[]>(this.url + 'retrieve-all-rayons');
  }

  deleteStock(rayon: Rayon): Observable<Rayon> {
    const url = this.url + 'remove-rayon/' + rayon.idRayon;
    return this.httpC.delete<Rayon>(url);
  }

  addRayon(rayon: Rayon): Observable<Rayon> {
    return this.httpC.post<Rayon>(
      this.url+'add-rayon',
      rayon,
      this.httpOptions
    );
  }

  search(s:string):Observable<Rayon[]> {
    return this.httpC.get<Rayon[]>(this.url+'recherche/'+s, this.httpOptions);
  
  }

  
}
