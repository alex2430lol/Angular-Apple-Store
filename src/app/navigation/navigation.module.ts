import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { CustomersComponent } from '../customers/customers.component';
import { OrdersComponent } from '../orders/orders.component';
import { NotExistComponent } from '../not-exist/not-exist.component';
import { HomeComponent } from '../home/home.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'Home', component: HomeComponent },
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
    RouterModule
  ],
  exports: [NavigationComponent]
})
export class NavigationModule { }
