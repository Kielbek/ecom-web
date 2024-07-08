import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderTopComponent } from './components/header-top/header-top.component';
import { HeaderMainComponent } from './components/header-main/header-main.component';
import { DesktopNavigationMenuComponent } from './components/desktop-navigation-menu/desktop-navigation-menu.component';
import { ProductQuickCategoriesComponent } from './components/product-quick-categories/product-quick-categories.component';
import { FooterMainComponent } from './components/footer-main/footer-main.component';
import { ProductGridViewComponent } from './components/product-grid-view/product-grid-view.component';
import { FilterPanelComponent } from './components/filter-panel/filter-panel.component';
import { FormsModule } from '@angular/forms';
import { PaginationComponentComponent } from './components/pagination-component/pagination-component.component';
import { FullPaginationComponentComponent } from './components/full-pagination-component/full-pagination-component.component';
import { ProductListViewComponent } from './components/product-list-view/product-list-view.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ControlBarComponent } from './components/control-bar/control-bar.component';
import { ProductDetailsPageComponent } from './pages/product-details-page/product-details-page.component';
import { ProductInfoComponent } from './components/product/product-info/product-info.component';
import { ProductImagesComponent } from './components/product/product-images/product-images.component';
import { ProductDetailsComponent } from './components/product/product-details/product-details.component';
import { TechnicalSpecificationComponent } from './components/product/technical-specification/technical-specification.component';
import { ProductDescriptionComponent } from './components/product/product-description/product-description.component';
import { SellerInfoComponent } from './components/product/seller-info/seller-info.component';
import { ProductOpinionsComponent } from './components/product/product-opinions/product-opinions.component';
import { ProductOpinionPopUpComponent } from './components/product/product-opinion-pop-up/product-opinion-pop-up.component';
import { TechnicalSpecificationPopUpComponent } from './components/product/technical-specification-pop-up/technical-specification-pop-up.component';
import { ProadctShipInfoComponent } from './components/product/proadct-ship-info/proadct-ship-info.component';

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
    StarRatingComponent,
    ProductDetailsPageComponent,
    ProductInfoComponent,
    ProductImagesComponent,
    ProductDetailsComponent,
    TechnicalSpecificationComponent,
    ProductDescriptionComponent,
    SellerInfoComponent,
    ProductOpinionsComponent,
    ProductOpinionPopUpComponent,
    TechnicalSpecificationPopUpComponent,
    ProadctShipInfoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
