import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

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
  
  data = [
    { id: 1, name: 'john Doe', city: 'Phoenix', orderTotal: 9.99, customerSince: new Date(2014, 7, 10) },
    { id: 2, name: 'Jane Doe', city: 'Chandler', orderTotal: 19.99, customerSince: new Date(2017, 2, 22)},
    { id: 3, name: 'Michelle Thomas', city: 'Seattle', orderTotal: 99.99, customerSince: new Date(2002, 10, 31)},
    { id: 4, name: 'Jim Thomas', city: 'New York', orderTotal: 599.99, customerSince: new Date(2002, 10, 31)},
  ];
  dataSource: MatTableDataSource<any>;

  filteredCustomers: any[] = [];
  customersOrderTotal: number = 0;
  currencyCode: string = 'USD'

  constructor() {
    this.dataSource = new MatTableDataSource(this.data);
    //this.dataSource.sort = this.sort;
  }
  
  ngOnInit() {
    
  }
}
