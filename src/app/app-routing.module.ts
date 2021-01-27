import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule)},
  {path: 'products', loadChildren: () => import('./pages/products-page/products-page.module').then(m => m.ProductsPageModule)},
  {path: 'manage', loadChildren: () => import('./pages/manage-page/manage-page.module').then(m => m.ManagePageModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
