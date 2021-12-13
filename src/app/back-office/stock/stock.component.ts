import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Stock } from 'src/app/Models/Stock';
import { StockService } from './stock.service';


@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  constructor(private serviceStock:StockService , private toastr:ToastrService) { }

  stock:FormGroup;
  MyStock:Stock;
  searchVal:string;
  formUpdate:FormGroup;
  ngOnInit() {
    this.getAllStocks()
    this.stock=new FormGroup({
      qteMin:new FormControl('',Validators.compose([
        Validators.required])),
      libelleStock:new FormControl('',Validators.compose([
        Validators.required]))
    })
    
    
    this.formUpdate = new FormGroup({
      idStock:new FormControl(),
      libelleStock:new FormControl('',[Validators.required]),
      qteMin:new FormControl('',[Validators.required])
     
    })
  }

  ListeStocks: Stock[];
  getAllStocks() {
    this.serviceStock.getAllStock().subscribe((res) => {
      this.ListeStocks = res;
      console.log(this.ListeStocks);
    });
  }

  idStock : number;
  getId(id: number){
    this.idStock=id;
  }

  deleteStocks(){
    this.serviceStock.deleteStock(this.idStock).subscribe((res) => {
      this.getAllStocks()
      this.toastr.error('votre stock a été supprimé avec succès','SUPPRISSION DE STOCK');

    })

  }

  addStock(){
    
    this.MyStock=new Stock(this.stock.get('qteMin').value,this.stock.get('libelleStock').value)
    this.serviceStock.addStock(this.MyStock).subscribe((res) =>{
      this.getAllStocks()
      this.toastr.success('votre stock a été ajouté avec succès','AJOUT DE STOCK');
    })
  }

  search() {
    if (this.searchVal == '') {
      this.getAllStocks();
    } else {
      this.serviceStock.search(this.searchVal).subscribe((res) => {
        this.ListeStocks = res;
      });
    }
  }

  updateStock(stock:Stock){
    this.formUpdate.setValue({
      idStock:stock.idStock,
      libelleStock: stock.libelleStock,
      qteMin: stock.qteMin
      
    })

  }

  confirmUpdate(){
    this.serviceStock.updateStock(this.formUpdate.getRawValue()).subscribe((res) => {
      this.getAllStocks()
      console.log(res),
      this.toastr.info('votre stock a été Modifié avec succès','MODIFICATION DE STOCK');

    })
  }


  
  SortDescStock(){
    this.serviceStock.sortDESC().subscribe(
      (S) => {
        this.ListeStocks=S;
     },
      (error) => {
        console.log("erreur desc 🙁")
      }
    )
    }
  
    SortAscStock(){
      this.serviceStock.sortASC().subscribe(
        (S) => {
          this.ListeStocks=S;
       },
        (error) => {
          console.log("erreur desc 🙁")
        }
      )
      }

      StockBesoin(){
        this.serviceStock.StockBesoin().subscribe(res=>{
          this.ListeStocks=res;
        })
      }

      calculS(idStock:number){

        this.serviceStock.calculS(idStock).subscribe(res=>{
          this.getAllStocks();
        })

      }

      retreieveById(){
        this.serviceStock.retreiveById(this.idStock).subscribe((res) => {
          this.getAllStocks()
    
        })
    
      }


}
