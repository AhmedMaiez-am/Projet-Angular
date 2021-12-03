import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RayonRoutingModule } from './rayon-routing.module';
import { RayonComponent } from './rayon/rayon.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RayonComponent],
  imports: [
    CommonModule,
    RayonRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class RayonModule { }
