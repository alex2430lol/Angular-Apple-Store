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

  //@ViewChild(MatSort) sort: MatSort | undefined;

  displayedColumns: string[] = [
    'id', 
    'name',
    'city',
    'orderTotal',
    'customerSince'
  ];
  
  @Input() Customers: ICustomer[] = [];
  customersDataSource: MatTableDataSource<any> = new MatTableDataSource;

  filteredCustomers: ICustomer [] = [];
  customersOrderTotal: number = 0;
  currencyCode: string = 'USD'

  constructor() {
  }
  
  ngOnInit() {
    this.customersDataSource = new MatTableDataSource(this.Customers);
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
}
