import {Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
        <a [routerLink]="['/']">Home</a>&nbsp;
        <a [routerLink]="['/product', productId]">Product</a>
        <button (click)="navigateToProductDetail()">Product Details</button>
        <router-outlet></router-outlet>
    `
})
export class AppComponent {
  constructor(private _router: Router){}

  productId = 1234;

  navigateToProductDetail(){
    this._router.navigate(["/product"], {skipLocationChange: true});
  }
}
