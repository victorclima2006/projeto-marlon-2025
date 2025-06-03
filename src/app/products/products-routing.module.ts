import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsPage } from './products.page';
import { HomePage } from './home/home.page';
import { AddProductPage } from './add-product/add-product.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'add-product',
    component: AddProductPage
  },
  {
    path: 'list',
    component: ProductsPage
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsPageRoutingModule { }
