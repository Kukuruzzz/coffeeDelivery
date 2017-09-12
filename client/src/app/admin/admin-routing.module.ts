import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { ManageClientsComponent } from '../manage-clients/manage-clients.component';
import { ManageProductsComponent } from '../manage-products/manage-products.component';
import { ManageOrdersComponent } from '../manage-orders/manage-orders.component';
import { AuthGuard } from '../sevices/auth-guard.service';

const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: '',
        children: [
          { path: 'orders', component: ManageOrdersComponent},
          { path: 'clients', component: ManageClientsComponent },
          { path: 'products', component: ManageProductsComponent },
          { path: '', redirectTo: './orders', pathMatch: 'full'},
        ]
      }
    ]
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {}


