import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { ProductsPageRoutingModule } from './products-routing.module';

import { ProductsPage } from './products.page';
import { RouterModule } from '@angular/router';

import { AddProductPage } from './add-product/add-product.page';
import { HomePage } from './home/home.page';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductsPageRoutingModule,
    RouterModule,
    NgxPaginationModule
  ],
  declarations: [
    ProductsPage,
    HomePage,
  AddProductPage],
  exports: [AddProductPage],
  providers:[
    
  ]
})
export class ProductsPageModule { }
