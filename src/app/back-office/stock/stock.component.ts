import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Stock } from 'src/app/Models/Stock';
import { StockService } from './stock.service';


@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  constructor(private serviceStock:StockService) { }

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
    })

  }

  addStock(){
    
    this.MyStock=new Stock(this.stock.get('qteMin').value,this.stock.get('libelleStock').value)
    this.serviceStock.addStock(this.MyStock).subscribe((res) =>{
      this.getAllStocks()
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
      console.log(res)
    })
  }

}
