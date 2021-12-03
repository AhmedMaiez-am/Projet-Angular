import { DetailProduit } from "./DetailProduit";
import { Stock } from "./Stock";
import { Rayon } from "./Rayon";


export class Produit{
    idProduit?:number;
    code:string;
    libelle:string;
    prixUnitaire:number;
    rayon?:Rayon;
    stock?:Stock;
    detailProduit?:DetailProduit;

    constructor(code,libelle,prixunitaire,detailproduit,Image){
                this.code=code
                this.libelle=libelle
                this.prixUnitaire=prixunitaire
                this.detailProduit=detailproduit
            }

        }