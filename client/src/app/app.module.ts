import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminModule } from "./admin/admin.module";
import { AdminComponent } from "./admin/admin.component";
import { AuthComponent } from './auth/auth.component';
import { NavComponent } from './nav/nav.component';
import { ProductsComponent } from './products/products.component';
import { BasketComponent } from './basket/basket.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AuthGuard } from "./sevices/auth-guard.service";
import { AuthService } from "./sevices/auth.service";
import { LoginRoutingModule } from "./login/login-routing.module";
import {LoginComponent} from "./login/login.component";


const appRoutes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'basket', component: BasketComponent, data: { roles: []}},
  { path: 'auth', component: AuthComponent },
  { path: 'detail/:id', component: ProductDetailComponent },
  { path: '**', redirectTo: '/products' },
];

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    NavComponent,
    BasketComponent,
    AuthComponent,
    ProductDetailComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AdminModule,
    LoginRoutingModule
  ],
  providers: [
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
