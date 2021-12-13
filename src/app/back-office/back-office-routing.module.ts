
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { StockProduitComponent } from './stock-produit/stock-produit.component';
import { StockComponent } from './stock/stock.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [{
      path: '', component: BodyComponent
      , children: [{ path: 'product', component: ProductComponent },
      { path: 'stock', component: StockComponent },
      
      { path: 'detailstock/:id', component: StockProduitComponent },
      {
        path: 'rayon',
        loadChildren: () =>
          import('./rayon/rayon.module').then(
            (m) => m.RayonModule
          ),
      },]
    }]

  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackOfficeRoutingModule { }
