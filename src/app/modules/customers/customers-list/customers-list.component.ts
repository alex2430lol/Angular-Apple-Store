import { Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SorterService } from 'src/app/core/sorter.service';

import { ICustomer } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit, OnChanges {

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

  showMaterialTable: boolean = false;
  
  @Input()  get customers(): ICustomer[] {
    return this._customers;
  }
  set customers(value: ICustomer[]) {
    if (value) {
      this.filteredCustomers = this._customers = value;
      this.calculateOrders();
    }
  }

  constructor(private sorterService: SorterService) {
  }

  ngOnInit(): void {

  }
  
  ngOnChanges() {
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
    this.sorterService.sort(this.filteredCustomers, prop);
  }

  filter(text: string) {
    if (text) {
      text = text.toLocaleLowerCase();
      this.filteredCustomers = this.customers.filter(
        (cus: ICustomer) => {
          return cus.name.toLocaleLowerCase().indexOf(text) > -1 ||
            cus.city.toLocaleLowerCase().indexOf(text) > -1 ||
            cus.orderTotal.toString().indexOf(text) > -1 ||
            cus.customerSince.indexOf(text) > -1
        }
      )
    } else {
      this.filteredCustomers = this.customers;
    }
    this.calculateOrders();
  }

  toggleTable() {
    this.showMaterialTable = !this.showMaterialTable;
  }
}
