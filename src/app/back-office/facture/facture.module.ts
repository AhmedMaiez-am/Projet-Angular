import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FactureRoutingModule } from './facture-routing.module';
import { FactureComponent } from './facture/facture.component';
import {MatSliderModule} from '@angular/material/slider';



@NgModule({
  declarations: [
    FactureComponent
  ],
  imports: [
    CommonModule,
    FactureRoutingModule,
    MatSliderModule
  ]
})
export class FactureModule { }
