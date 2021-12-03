import { Component, OnInit } from '@angular/core';
import { detailFacture } from 'src/app/Models/detailFacture';
import { Facture } from 'src/app/Models/Facture';
import { FactureService } from '../facture.service';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent implements OnInit {


  detailFacture: detailFacture;
  id:number;
  constructor(private serviceFacture:FactureService) { }

  ngOnInit() {
    this.getAllFacture()
  }

  listFacture : Facture[];
  getAllFacture(){
    this.serviceFacture.getAllFacture().subscribe((res)=>{
      this.listFacture=res;
      console.log(this.listFacture);
    })
  }

idFacture: number;
deleteFacture(id:number){
  this.idFacture=id;
}
confirmDelete(){
  this.serviceFacture.deleteFacture(this.idFacture).subscribe((res) => {
    this.getAllFacture()
  })
}

setFactureInactive(etat:number){
  this.idFacture=etat;
  this.serviceFacture.setFacInactive(etat).subscribe((res) => {
    this.getAllFacture()
  })
}

}
