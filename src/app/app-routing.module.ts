import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ProductDetailsPageComponent } from './pages/product-details-page/product-details-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'products-page', component: ProductsPageComponent },
  { path: 'product-page', component: ProductDetailsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
