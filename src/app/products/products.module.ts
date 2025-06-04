import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { IonContent } from '@ionic/angular/standalone';

import { ProductsPageRoutingModule } from './products-routing.module';

import { ProductsPage } from './products.page';
import { RouterModule } from '@angular/router';
import { MainPageComponent } from '../main-page/main-page.component';
import { AddProductPage, CustomCurrencyMaskConfig } from './add-product/add-product.page';
import { HomePage } from './home/home.page';
import { CURRENCY_MASK_CONFIG } from 'ionicng2-currency-mask/src/currency-mask.config';
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
    { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig }
  ]
})
export class ProductsPageModule { }
