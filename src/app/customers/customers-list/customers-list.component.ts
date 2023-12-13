import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { ICustomer } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {
  customersDataSource: MatTableDataSource<any> = new MatTableDataSource;
  private _customers: ICustomer[] = [];
  _searchText: string = '';
  filteredCustomers: ICustomer [] = [];
  customersOrderTotal: number = 0;
  currencyCode: string = 'USD';
  displayedColumns: string[] = [
    'id', 
    'name',
    'city',
    'orderTotal',
    'customerSince'
  ];
  
  
  @Input()  get customers(): ICustomer[] {
    return this._customers;
  }
  set customers(value: ICustomer[]) {
    if (value) {
      this.filteredCustomers = this._customers = value;
      this.calculateOrders();
    }
  }

  constructor() {
  }
  
  ngOnInit() {
    this.customersDataSource = new MatTableDataSource(this.customers);
    //this.dataSource.sort = this.sort;
  }

  calculateOrders() {
    this.customersOrderTotal = 0;
    this.filteredCustomers.forEach((cus: ICustomer) => {
      this.customersOrderTotal += cus.orderTotal ?? 0;
    })
  }

  sort(prop: string) {
    // A sorter service will handle the sorting
  }

  filter(text: string) {
    if (text) {
      text = text.toLocaleLowerCase();
      this.filteredCustomers = this.customers.filter(
        (cus: ICustomer) => {
          return cus.name.toLocaleLowerCase().indexOf(text) > -1 ||
            cus.city.toLocaleLowerCase().indexOf(text) > -1 ||
            cus.orderTotal.toString().indexOf(text) > -1 ||
            cus.customerSince.toLocaleDateString().indexOf(text) > -1
        }
      )
    } else {
      this.filteredCustomers = this.customers;
    }
    this.calculateOrders();
  }
}
