import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderTopComponent } from './components/header-top/header-top.component';
import { HeaderMainComponent } from './components/header-main/header-main.component';
import { DesktopNavigationMenuComponent } from './components/desktop-navigation-menu/desktop-navigation-menu.component';
import { ProductQuickCategoriesComponent } from './components/product-quick-categories/product-quick-categories.component';
import { FooterMainComponent } from './components/footer-main/footer-main.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ProductGridViewComponent } from './components/product-grid-view/product-grid-view.component';
import { FilterPanelComponent } from './components/filter-panel/filter-panel.component';
import { ControlBarComponent } from './components/control-bar/control-bar.component';
import {FormsModule} from "@angular/forms";
import { PaginationComponentComponent } from './components/pagination-component/pagination-component.component';
import { FullPaginationComponentComponent } from './components/full-pagination-component/full-pagination-component.component';
import { ProductListViewComponent } from './components/product-list-view/product-list-view.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderTopComponent,
    HeaderMainComponent,
    DesktopNavigationMenuComponent,
    ProductQuickCategoriesComponent,
    FooterMainComponent,
    ProductsPageComponent,
    ProductGridViewComponent,
    FilterPanelComponent,
    ControlBarComponent,
    PaginationComponentComponent,
    FullPaginationComponentComponent,
    ProductListViewComponent,
    StarRatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
