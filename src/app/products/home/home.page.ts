import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'], // Corrigido o nome do arquivo de estilo
  standalone: false
})
export class HomePage implements OnInit {

  products: any[] = [];
  constructor(private router: Router, private productService: ProductService) { }

  navigateToAddProduct() {
    this.router.navigate(['/products/add-product']); // redireciona para a pagina de adicionar produto
  }

  navigateToList() {
    this.router.navigate(['/products/list']);
  }



  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.products = this.productService.getLocalProducts();
  }
}
