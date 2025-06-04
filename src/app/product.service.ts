import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements OnInit {
  private apiUrl = 'https://fakestoreapi.com/products';
  static products: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // this.initRepository()
  }

  getProducts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  addProduct(product: any): Observable<any> {
    ProductService.products.unshift(product);
    return this.http.post(this.apiUrl, product);
  }

  getLocalProducts(): any[] {
     this.initRepository();
    return ProductService.products;
  }

  initRepository() {
    if (ProductService.products.length == 0) {
      this.getProducts().subscribe(
        (res: any) => {
          ProductService.products = res
        }
      )
    }
  }
}
