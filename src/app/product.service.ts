import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService  {
  private apiUrl = 'https://fakestoreapi.com/products';
  static products: any[] = [];

  constructor(private http: HttpClient) { }

  
  getProducts(): Observable<any> {                // captura os dados da API
    return this.http.get(this.apiUrl);
  }

  addProduct(product: any): Observable<any> {           // envia dados para a API e atualiza a lista de produtos
    ProductService.products.unshift(product);
    return this.http.post(this.apiUrl, product);
  }

  getLocalProducts(): any[] {    // retorna a lista de produtos
     this.initRepository();
    return ProductService.products;
  }

  initRepository() {               // verifica se a lista de produtos esta vazia, se estiver captura os dados da API
    if (ProductService.products.length == 0) {
      this.getProducts().subscribe(
        (res: any) => {
          ProductService.products = res
        }
      )
    }
  }
}
