import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerManagementComponent } from './customer-management.component';
import {CustomerManagementRoutingModule} from './customer-management-routing.module';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CustomerManagementRoutingModule,
    SharedModule
  ],
  declarations: [CustomerManagementComponent]
})
export class CustomerManagementModule { }
