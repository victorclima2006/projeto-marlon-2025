import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../product.service'; 


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
      this.router.navigate(['/products/list']); 
    });
  }
}
