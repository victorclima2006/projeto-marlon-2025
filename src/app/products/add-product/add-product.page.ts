import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../product.service';  //importando service que é uma classe que tem lógica, que guarda e organiza as informações  para o app
import { CurrencyMaskConfig } from 'ionicng2-currency-mask/src/currency-mask.config';



export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
    align: "right",
    allowNegative: true,
    decimal: ",",
    precision: 2,
    prefix: "R$ ",
    suffix: "",
    thousands: "."
};

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
  standalone: false
})
export class AddProductPage {
  product = {
    title: '',
    price: null,
    description: '',
    image: ''
  };

  constructor(private productService: ProductService, private router: Router) {}

  addProduct() {
    this.productService.addProduct(this.product).subscribe(() => {
      this.router.navigate(['/products']); 
    });
  }
}
