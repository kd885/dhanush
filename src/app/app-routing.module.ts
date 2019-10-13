import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { ThrowsComponent } from './throws/throws.component';
import { CushionComponent } from './cushion/cushion.component';
import { CurtainsComponent } from './curtains/curtains.component';
import { PillowsComponent } from './pillows/pillows.component';
import { KitchenLinenComponent } from './kitchen-linen/kitchen-linen.component';
import { GrassBegsComponent } from './grass-begs/grass-begs.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'products', component:ProductsComponent},
  {path:'enquiry', component:EnquiryComponent},
  {path:'throws', component:ThrowsComponent},
  {path:'cushion', component:CushionComponent},
  {path:'curtains', component:CurtainsComponent},
  {path:'pillows', component:PillowsComponent},
  {path:'kitchen-linen', component:KitchenLinenComponent},
  {path:'grass-bags', component:GrassBegsComponent},
  {path:'table', component:TableComponent}
  
  
];

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forRoot(routes,{
      scrollPositionRestoration: 'enabled'
    } )],
    CommonModule
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
