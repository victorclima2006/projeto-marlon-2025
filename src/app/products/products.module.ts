import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { IonContent } from '@ionic/angular/standalone';

import { ProductsPageRoutingModule } from './products-routing.module';

import { ProductsPage } from './products.page';
import { RouterModule } from '@angular/router';
import { MainPageComponent } from '../main-page/main-page.component';
import { AddProductPage } from './add-product/add-product.page';
import { HomePage } from './home/home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductsPageRoutingModule,
    RouterModule
  ],
  declarations: [
    ProductsPage,
    HomePage,
  AddProductPage],
  exports: [AddProductPage]
})
export class ProductsPageModule { }
