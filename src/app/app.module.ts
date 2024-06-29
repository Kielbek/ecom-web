import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderTopComponent } from './components/header-top/header-top.component';
import { HeaderMainComponent } from './components/header-main/header-main.component';
import { DesktopNavigationMenuComponent } from './components/desktop-navigation-menu/desktop-navigation-menu.component';
import { ProductQuickCategoriesComponent } from './components/product-quick-categories/product-quick-categories.component';
import { FooterMainComponent } from './components/footer-main/footer-main.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderTopComponent,
    HeaderMainComponent,
    DesktopNavigationMenuComponent,
    ProductQuickCategoriesComponent,
    FooterMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
