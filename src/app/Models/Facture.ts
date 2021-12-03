import { detailFacture } from "./detailFacture";

export class Facture {
  idFacture:number;
  montantFacture:number;
    montantRemise:number;
   dateFacture:Date;
   active:boolean;
   detailFacture:detailFacture;
}
