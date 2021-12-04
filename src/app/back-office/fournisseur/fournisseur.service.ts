import { FormGroup } from '@angular/forms';
import { fournisseur } from 'src/app/Models/Fournisseur';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {
fournisseurUrl:string='http://localhost:8089/SpringMVC/fournisseur';
httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};


  constructor(private myhttpclient: HttpClient) { }

  addFournisseur(f:fournisseur): Observable<fournisseur> {
    return this.myhttpclient.post<fournisseur>('http://localhost:8089/SpringMVC/fournisseur/add-fournisseur', f, this.httpOptions);
  }
  getAllfournisseurs(): Observable<fournisseur[]> {
    return this.myhttpclient.get<fournisseur[]>('http://localhost:8089/SpringMVC/fournisseur/retrieve-all-fournisseurs');
  }
  deleteFournisseur(idFounisseur:number) {
    const url = this.fournisseurUrl + `/delete-fournisseur/${idFounisseur}` ;
    console.log(url)
    return this.myhttpclient.delete(url,this.httpOptions);
  }


}

