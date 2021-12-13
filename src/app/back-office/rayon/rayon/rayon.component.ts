import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Rayon } from 'src/app/Models/Rayon';
import { RayonService } from '../rayon.service';

@Component({
  selector: 'app-rayon',
  templateUrl: './rayon.component.html',
  styleUrls: ['./rayon.component.css']
})
export class RayonComponent implements OnInit {

  constructor(private serviceRayon:RayonService , private toastr:ToastrService) { }

  rayon:FormGroup;
  MyRayon:Rayon;
  searchVal:string  
  formUpdate:FormGroup;

  ngOnInit() {
   this.getAllRayon()
   this.rayon=new FormGroup({
    code:new FormControl('',Validators.compose([
      Validators.required])),
    libelle:new FormControl('',Validators.compose([
      Validators.required]))

  })
  this.formUpdate = new FormGroup({
    idRayon:new FormControl(),
    libelle:new FormControl('',[Validators.required]),
    code:new FormControl('',[Validators.required])
   
  })
  }

  ListeRayons: Rayon[];
  getAllRayon() {
    this.serviceRayon.getAllRayon().subscribe((res) => {
      this.ListeRayons = res;
      console.log(this.ListeRayons);
    });
  }

  idRayon : number;
  getId(id: number){
    this.idRayon=id;
  }

  deleteRayon(){
    this.serviceRayon.deleteRayon(this.idRayon).subscribe((res) => {
      this.getAllRayon()
      this.toastr.error('votre rayon a été supprimé avec succès','SUPPRISSION DE RAYON');

      
    })

  }

  addRayon(){
    
    this.MyRayon=new Rayon(this.rayon.get('code').value,this.rayon.get('libelle').value)
    this.serviceRayon.addRayon(this.MyRayon).subscribe((res) =>{
      this.getAllRayon()
      this.toastr.success('votre rayon a été ajouté avec succès','AJOUT DE RAYON');

    })
  }

  search() {
    if (this.searchVal == '') {
      this.getAllRayon();
    } else {
      this.serviceRayon.search(this.searchVal).subscribe((res) => {
        this.ListeRayons = res;
      });
    }
  }

  updateRayon(rayon:Rayon){
    this.formUpdate.setValue({
      idRayon:rayon.idRayon,
      libelle: rayon.libelle,
      code: rayon.code
      
    })
  }

  confirmUpdate(){
    this.serviceRayon.updateRayon(this.formUpdate.getRawValue()).subscribe((res) => {
      this.getAllRayon()
      console.log(res),
      this.toastr.info('votre rayon a été modifié avec succès','MODIFICATION DE RAYON');

    })
  }

  SortDesc(){
  this.serviceRayon.sortDESC().subscribe(
    (R) => {
      this.ListeRayons=R;
   },
    (error) => {
      console.log("erreur desc 🙁")
    }
  )
  }

  SortAsc(){
    this.serviceRayon.sortASC().subscribe(
      (R) => {
        this.ListeRayons=R;
     },
      (error) => {
        console.log("erreur desc 🙁")
      }
    )
    }

}
