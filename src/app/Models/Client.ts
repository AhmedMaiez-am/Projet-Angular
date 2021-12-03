import { categorieClient } from "./categorieClient";
import { Facture } from "./Facture";
import { profession } from "./profession";

export class Client {
  idClient?:number;
    nom:string;
    prenom:string;
   dateNaissance:string;
   email:string;
   password:string;
   categorieClient:categorieClient;
   profession:profession;
   factureList:Facture[];

   constructor (nom, prenom, dateNaissance, email, password, categorieClient, profession, idClient?){
    this.nom = nom;
    this.prenom = prenom;
    this.dateNaissance = dateNaissance;
    this.email = email;
    this.password = password;
    this.categorieClient = categorieClient;
    this.profession = profession;
    this.idClient = idClient;
   }
}
