import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotExistComponent } from './not-exist/not-exist.component';
import { CustomersComponent } from './customers/customers.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  { path: 'customers', component: CustomersComponent },
  { path: 'orders/:id', component: OrdersComponent },
  { path: '', pathMatch: 'full', component: CustomersComponent},
  { path: '**', component: NotExistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
