import { FournisseurComponent } from './fournisseur/fournisseur.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path:'',
  component: HomeComponent,
  children:[{path:'',component:BodyComponent
  ,children:[{path:'product',component:ProductComponent},{path:'fournisseur',component:FournisseurComponent},]}]
  
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackOfficeRoutingModule { }
