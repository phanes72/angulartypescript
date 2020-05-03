import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home.component";
import {ProductDetailComponent} from "./product.detail.component";
import { ProductDescriptionComponent } from '../child/product.description.component';
import { SellerInfoComponent } from '../child/seller.info.component';

const routes: Routes = [
  {path: '',        component: HomeComponent},
  {path: 'product/:id', component: ProductDetailComponent,
    children: [
      {path: '', component: ProductDescriptionComponent},
      {path: 'seller/:id', component: SellerInfoComponent}
    ]}
];

export const routing = RouterModule.forRoot(routes);
