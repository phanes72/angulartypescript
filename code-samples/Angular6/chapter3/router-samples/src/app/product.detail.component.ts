import {Component, OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'product',
    template: '<h1 class="product">Product Detail for Product: {{productID}}</h1>',
    styles: ['.product {background: cyan}']
})
export class ProductDetailComponent{
    productID: string;

    constructor(route: ActivatedRoute){
        this.productID = route.snapshot.paramMap.get('id');
    }
}
