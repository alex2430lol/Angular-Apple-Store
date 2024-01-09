import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { CustomersComponent } from '../../../modules/customers/customers.component';
import { OrdersComponent } from '../../../modules/orders/orders.component';
import { NotExistComponent } from '../../components/not-exist/not-exist.component';
import { HomeComponent } from '../../../modules/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../../../modules/login/login.component';
import { LoginModule } from '../../../modules/login/login.module';


const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Login', component: LoginComponent},
  { path: 'Customers', component: CustomersComponent },
  { path: 'Orders/:id', component: OrdersComponent },
  { path: '', pathMatch: 'full', component: HomeComponent},
  { path: '**', component: NotExistComponent}
];

@NgModule({
  declarations: [
    NavigationComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    RouterModule,
    LoginModule
  ],
  exports: [NavigationComponent]
})
export class NavigationModule { }
