import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders.component';
import { CustomersComponent } from '../customers/customers.component';

// orders/2, customer's ID
const routes: Routes = [
  { path: 'orders/:id', component: OrdersComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
