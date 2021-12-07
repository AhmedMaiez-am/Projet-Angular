import { Produit } from './Product';

export class Stock {
  idStock?: number;
  qte?: number;
  qteMin: number;
  libelleStock: string;
  produitList?: Produit[];
  createdAt:Date;
  updatedAt:Date;
  status:boolean;


  constructor(qteMin, libelleStock, idStock?,createdAt?,updatedAt?,status?) {
    this.qteMin = qteMin;
    this.libelleStock = libelleStock;
    this.idStock = idStock;
    this.createdAt=createdAt;
    this.updatedAt=updatedAt;
    this.status=status;
  }
}
