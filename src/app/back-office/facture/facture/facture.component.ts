import { Component, OnInit } from '@angular/core';
import { detailFacture } from 'src/app/Models/detailFacture';
import { Facture } from 'src/app/Models/Facture';
import { FactureService } from '../facture.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


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

montant: number
searchByMontant(event){
  this.montant=event.value
  this.serviceFacture.searchByMontant(this.montant).subscribe((res)=> {
    this.listFacture=res;
  })
}
formatLabel(value: number) {
  if (value >= 1000) {
    return Math.round(value / 1000) + 'k';
  }

  return value;
}

/* exportPDF(){
  this.serviceFacture.exportPDF().subscribe((res) => {
    this.listFacture=res;
  })
} */
public openPDF():void {
  let DATA = document.getElementById('htmlData');

  html2canvas(DATA).then(canvas => {

      let fileWidth = 208;
      let fileHeight = canvas.height * fileWidth / canvas.width;

      const FILEURI = canvas.toDataURL('image/png')
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)

      PDF.save('liste_des_factures.pdf');
  });
  }
}

