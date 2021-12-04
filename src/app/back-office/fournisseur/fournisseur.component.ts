import { fournisseur } from 'src/app/Models/Fournisseur';
import { FormGroup, FormControl } from '@angular/forms';
import { FournisseurService } from './fournisseur.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent implements OnInit {
my_fournisseurs: fournisseur[];
addFournisseurForm:FormGroup;
fournisseurToAdd:fournisseur={};
showAdd:boolean=true;
showUpdate:boolean=true;
  constructor(private fournisseurservice:FournisseurService) { }

  ngOnInit() {
    this.addFournisseurForm = new FormGroup({
      code: new FormControl(''),
      libelle: new FormControl(''),
  });
  this.getAllfournisseurs();
}

getAllfournisseurs() {
  this.fournisseurservice.getAllfournisseurs().subscribe((res) => {
    this.my_fournisseurs = res;
    console.log(this.my_fournisseurs)
  });
}
addFournisseur(){
  this.fournisseurToAdd.code=this.addFournisseurForm.get('code').value;
    this.fournisseurToAdd.libelle=this.addFournisseurForm.get('libelle').value;
    console.log(this.fournisseurToAdd);
    this.fournisseurservice.addFournisseur(this.fournisseurToAdd).subscribe(
        (res)=>{
          console.log(res)
        this.getAllfournisseurs();
      }
      )
      this.addFournisseurForm.reset();

}
showAddModal(){
  this.showAdd = true ;
  this.showUpdate = false;
  this.addFournisseurForm = new FormGroup({
    code: new FormControl(''),
    libelle: new FormControl(''),
});
}
delete(id:number) {
  this.fournisseurservice.deleteFournisseur(id).subscribe((res) => {
    alert('fournisseur deleted')
    this.getAllfournisseurs();
  });
}
}
