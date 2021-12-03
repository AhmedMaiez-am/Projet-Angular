import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackOfficeRoutingModule } from './back-office-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { ProductComponent } from './product/product.component';
import { StockComponent } from './stock/stock.component';


@NgModule({
  declarations: [HomeComponent, HeaderComponent, SideBarComponent, FooterComponent, BodyComponent, ProductComponent, StockComponent ],  imports: [
    CommonModule,
    BackOfficeRoutingModule,
    FormsModule,
     ReactiveFormsModule,
  ]
})
export class BackOfficeModule { }
