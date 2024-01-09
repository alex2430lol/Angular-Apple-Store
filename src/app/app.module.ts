import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomersModule } from './modules/customers/customers.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule } from '@angular/material/table';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { NotExistComponent } from './shared/components/not-exist/not-exist.component';
import { OrdersModule } from './modules/orders/orders.module';
import { RouterModule } from '@angular/router';
import { CustomersRoutingModule } from './modules/customers/customers-routing.module';
import { OrdersRoutingModule } from './modules/orders/orders-routing.module';
import { HomeModule } from './modules/home/home.module';
import { NavigationModule } from './shared/modules/navigation/navigation.module';
import { FooterModule } from './modules/footer/footer.module';


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
