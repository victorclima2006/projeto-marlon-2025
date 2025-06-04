import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
  standalone: false
})
export class ProductsPage implements OnInit {
  products: any[] = [];

   @Input('data') meals: string[] = [];
    page: number = 1;

  constructor(private productService: ProductService) {}

  

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.products = this.productService.getLocalProducts(); 
  }
}
