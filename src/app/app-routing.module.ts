import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotExistComponent } from './not-exist/not-exist.component';
import { CustomersComponent } from './customers/customers.component';

const routes: Routes = [
  { path: '', component: CustomersComponent},
  { path: '**', component: NotExistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
