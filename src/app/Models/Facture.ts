import { detailFacture } from "./detailFacture";

export class Facture {
  idFacture?:number;
  montantFacture:number;
    montantRemise:number;
   dateFacture:string;
   active:boolean;
   detailFacture:detailFacture;
}
