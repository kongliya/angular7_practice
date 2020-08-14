import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomerManagementComponent} from './customer-management.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerManagementComponent,
    // data: {
    //   title: '客户管理',
    //   icon: 'icon-layout-sidebar-left',
    //   caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - sample page',
    //   status: true
    // }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerManagementRoutingModule { }
