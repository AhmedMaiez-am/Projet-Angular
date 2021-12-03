import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Client } from 'src/app/Models/Client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {


  constructor(private serviceClient:ClientService) { }

  formClient:FormGroup;
  formUpdate:FormGroup;
  newClient:Client;
  updatedClient:Client;


  ngOnInit() {
    this.getAllClient()
    this.formClient=new FormGroup({
      nom:new FormControl('',[Validators.required]),
      prenom:new FormControl('',[Validators.required]),
      dateNaissance:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required]),
      categorieClient:new FormControl('',[Validators.required]),
      profession:new FormControl('',[Validators.required])
    })
    this.formUpdate = new FormGroup({
      nom:new FormControl('',[Validators.required]),
      prenom:new FormControl('',[Validators.required]),
      dateNaissance:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required]),
      categorieClient:new FormControl('',[Validators.required]),
      profession:new FormControl('',[Validators.required]),
      idClient:new FormControl()
    })
  }

  listClient : Client[];
  getAllClient(){
    this.serviceClient.getAllClient().subscribe((res)=>{
      this.listClient=res;
      console.log(this.listClient);
    })
  }

  addAllClient(){
    this.newClient= new Client (
      this.formClient.get('nom').value,
      this.formClient.get('prenom').value,
      this.formClient.get('dateNaissance').value,
      this.formClient.get('email').value,
      this.formClient.get('password').value,
      this.formClient.get('categorieClient').value,
      this.formClient.get('profession').value
    )
    this.serviceClient.addClient(this.newClient).subscribe((res) => {
      this.getAllClient()
      console.log(res)
    })
  }

  deleteClient(client:Client){
    this.serviceClient.deleteClient(client).subscribe((res) => {
      this.getAllClient()
    })

  }

  updateClient(client:Client){
    this.formUpdate.setValue({nom: client.nom,
      prenom: client.prenom,
      dateNaissance: client.dateNaissance,
      email: client.email,
      password: client.password,
      categorieClient: client.categorieClient,
      profession: client.profession,
      idClient: client.idClient
    })

  /* this.formUpdate = new FormGroup({
  nom:new FormControl(client.nom),
  prenom:new FormControl(client.prenom),
  dateNaissance:new FormControl(client.dateNaissance),
  email:new FormControl(client.email),
  password:new FormControl(client.password),
  categorieClient:new FormControl(client.categorieClient),
  profession:new FormControl(client.profession),
  idClient:new FormControl(client.idClient)
})*/
  }

  confirmUpdate(){
    this.serviceClient.updateClient(this.formUpdate.getRawValue()).subscribe((res) => {
      this.getAllClient()
      console.log(res)
    })
  }
}
