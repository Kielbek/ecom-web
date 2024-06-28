import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderTopComponent } from './components/header-top/header-top.component';
import { HeaderMainComponent } from './components/header-main/header-main.component';
import { ProductQuickCategoriesComponent } from './components/product-quick-categories/product-quick-categories.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderTopComponent,
    HeaderMainComponent,
    ProductQuickCategoriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
