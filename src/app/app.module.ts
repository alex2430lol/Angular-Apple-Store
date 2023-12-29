import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { HomeModule } from './home/home.module';
import { NavigationModule } from './navigation/navigation.module';
import { FooterModule } from './footer/footer.module';


@NgModule({
  declarations: [
    AppComponent,
    NotExistComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    CustomersModule,
    OrdersModule,
    CustomersRoutingModule,
    OrdersRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    SharedModule,
    FormsModule,
    CoreModule,
    HomeModule,
    NavigationModule,
    FooterModule
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
