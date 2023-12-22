import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersModule } from './customers/customers.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule } from '@angular/material/table';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { NotExistComponent } from './not-exist/not-exist.component';
import { OrdersModule } from './orders/orders.module';
import { RouterModule } from '@angular/router';
import { CustomersRoutingModule } from './customers/customers-routing.module';
import { OrdersRoutingModule } from './orders/orders-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    NotExistComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    CustomersModule,
    OrdersModule,
    CustomersRoutingModule,
    OrdersRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    SharedModule,
    FormsModule,
    CoreModule
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
