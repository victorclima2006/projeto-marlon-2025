import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigateByUrl("/products");
  }

  home(){
    this.router.navigate(["/products"]);
  }

}
