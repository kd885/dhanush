import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { ProductsComponent } from './products/products.component';
import { ThrowsComponent } from './throws/throws.component';
import { CushionComponent } from './cushion/cushion.component';
import { CurtainsComponent } from './curtains/curtains.component';
import { PillowsComponent } from './pillows/pillows.component';
import { KitchenLinenComponent } from './kitchen-linen/kitchen-linen.component';
import { GrassBegsComponent } from './grass-begs/grass-begs.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    EnquiryComponent,
    ProductsComponent,
    ThrowsComponent,
    CushionComponent,
    CurtainsComponent,
    PillowsComponent,
    KitchenLinenComponent,
    GrassBegsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
