import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Stock } from 'src/app/Models/Stock';
import { StockService } from '../stock/stock.service';

@Component({
  selector: 'app-stock-produit',
  templateUrl: './stock-produit.component.html',
  styleUrls: ['./stock-produit.component.css']
})
export class StockProduitComponent implements OnInit {

  constructor(private s:ActivatedRoute , private stockservice:StockService) { }

  stock: Stock;
  ngOnInit(): void {
    this.s.paramMap.subscribe(
      (next) =>
        this.stockservice
          .retreiveById(Number(next.get('id')))
          .subscribe((res) => {
            this.stock = res;
            console.log(this.stock)
          }),
      (error) => console.log(error)
    );
  }

}
