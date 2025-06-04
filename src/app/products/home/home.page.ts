import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'], 
  standalone: false
})
export class HomePage {

  
  constructor(private router: Router, private productService: ProductService) { }

  navigateToAddProduct() {
    this.router.navigate(['/products/add-product']); // redireciona para a pagina de adicionar produto
  }

  navigateToList() {               //redirecionar para pagina de listagem 
    this.router.navigate(['/products/list']);
  }



 
}
