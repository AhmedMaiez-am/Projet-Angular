import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'back-office',
    loadChildren: () => import('./back-office/back-office.module').then(m => m.BackOfficeModule)
    },
    { path: '', redirectTo: 'back-office', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
