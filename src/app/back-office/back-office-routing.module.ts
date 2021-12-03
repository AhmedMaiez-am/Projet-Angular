
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { StockComponent } from './stock/stock.component';


const routes: Routes = [
  {
    path:'',
  component: HomeComponent,
  children:[{path:'',component:BodyComponent
  ,children:[{path:'product',component:ProductComponent},{path:'stock',component:StockComponent},{
    path: 'rayon',
    loadChildren: () =>
      import('./rayon/rayon.module').then(
        (m) => m.RayonModule
      ),
  },
  {
    path: 'client',
    loadChildren: () =>
    import('./client/client.module').then(
      (m) => m.ClientModule
    )
  },
  {
    path: 'facture',
    loadChildren: () =>
    import('./facture/facture.module').then(
      (m) => m.FactureModule
    )
  }
]}]

  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackOfficeRoutingModule { }
