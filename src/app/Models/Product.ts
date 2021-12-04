import { Stock } from './Stock';
import { Rayon } from './Rayon';
import { DetailProduit } from './DetailProduit';
export class Product {
    idProduit?:number;
    code?:string;
    libelle?:string;
    prixUnitaire?:number;
    detailproduit?:DetailProduit;
    rayon?:Rayon;
    stock?:Stock;

    }
