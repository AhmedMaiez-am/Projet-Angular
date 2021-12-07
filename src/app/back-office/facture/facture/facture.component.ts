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
      console.log(res)
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
}

confirmInactive(){
  this.serviceFacture.setFacInactive(this.idFacture).subscribe((res) => {
    console.log(res);
    this.getAllFacture()
  })
}


setFactureActive(etat:number){
  this.idFacture=etat;
}

confirmActive(){
  this.serviceFacture.setFacActive(this.idFacture).subscribe((res) => {
    console.log(res);
    this.getAllFacture()
  })
}


triFactures(){
  this.serviceFacture.triFacture().subscribe((res)=>{
    this.listFacture=res;
    console.log(res)
  })
}


getActiveFac(){
  this.serviceFacture.getActiveFacture().subscribe((res)=>{
    this.listFacture=res;
    console.log(res)
  })

}

getInactiveFac(){
  this.serviceFacture.getInactiveFacture().subscribe((res)=>{
    this.listFacture=res;
    console.log(res)
  })

}


searchByDate(date:string){
  this.serviceFacture.searchByDate(date).subscribe((res)=> {
    this.listFacture=res;
  })
}

}

