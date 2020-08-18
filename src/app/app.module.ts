import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AdminComponent } from './layout/admin/admin.component';
import { AuthComponent } from './layout/auth/auth.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module';
import {MenuItems} from './shared/menu-items/menu-items';
import {BreadcrumbsComponent} from './layout/admin/breadcrumbs/breadcrumbs.component';
import {CustomerManagementComponent} from './theme/customer-management/customer-management.component'
import {Service} from './services/service'
import { HttpModule } from '@angular/http';
import { ContantComponent } from './theme/contant/contant.component';
import { ContantDetailComponent } from './theme/contant-detail/contant-detail.component';
import { CustomerDetailComponent } from './theme/customer-detail/customer-detail.component';
import { LoginComponent } from './theme/login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AuthComponent,
    BreadcrumbsComponent,
    ContantComponent,
    ContantDetailComponent,
    CustomerDetailComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    HttpModule,
  ],
  providers: [
    MenuItems,
    CustomerManagementComponent,
    Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
