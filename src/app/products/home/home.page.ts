import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'], // Corrigido o nome do arquivo de estilo
  standalone: false
})
export class HomePage {
  constructor(private router: Router) {}

  navigateToAddProduct() {
    this.router.navigate(['/products/add-product']); // redireciona para a pagina de adicionar produto
  }
}
