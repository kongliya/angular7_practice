import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './layout/admin/admin.component';
import { ContantComponent } from './theme/contant/contant.component';
import { ContantDetailComponent } from './theme/contant-detail/contant-detail.component';
import { CustomerDetailComponent } from './theme/customer-detail/customer-detail.component';
import { LoginComponent } from './theme/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [
      {
        path: '',
        redirectTo: 'simple-page',
        pathMatch: 'full'
      },
      {
        path: 'simple-page',
        loadChildren: './theme/simple-page/simple-page.module#SimplePageModule'
      },
      {
        path: 'customer-management',
        loadChildren: './theme/customer-management/customer-management.module#CustomerManagementModule'
      },
      {
        path: 'contant',
        component: ContantComponent
      },
      {
        path: 'contant-detail',
        component: ContantDetailComponent
      },
      {
        path: 'customer-detail',
        component: CustomerDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
