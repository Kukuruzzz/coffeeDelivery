import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminComponent } from './admin.component';
import { ManageProductsComponent } from '../manage-products/manage-products.component';
import { ManageClientsComponent } from '../manage-clients/manage-clients.component';
import { ManageOrdersComponent } from "../manage-orders/manage-orders.component";
import { AdminRoutingModule } from "./admin-routing.module";


@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    ManageClientsComponent,
    ManageProductsComponent,
    ManageOrdersComponent
  ]
})
export class AdminModule { }
