import { Component, OnInit } from '@angular/core';
import { ICustomer } from '../shared/interfaces';
import { DataService } from '../core/data.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit {
  title: string;
  customers: ICustomer[];
  isVisible: boolean = true;

  constructor(private dataService: DataService) {
    this.title = '';
    this.customers = [];
  }

  ngOnInit() {
    this.title = 'Customers';
    this.customers = [
      {
        id: 1,
        name: 'haolin Xu',
        city: 'Phoenix',
        orderTotal: 9.99,
        customerSince: new Date(2014, 7, 10),
      },
      {
        id: 2,
        name: 'gxm cen',
        city: 'Chandler',
        orderTotal: 19.99,
        customerSince: new Date(2017, 2, 22),
      },
      {
        id: 3,
        name: 'Mihayou fdsa',
        city: 'Seattle',
        orderTotal: 99.99,
        customerSince: new Date(2002, 10, 31),
      },
      {
        id: 4,
        name: 'Jim Thomas',
        city: 'New York',
        orderTotal: 599.99,
        customerSince: new Date(2002, 10, 31),
      },
    ];
  }

  TogglePage() {
    this.isVisible = !this.isVisible;
  }

  loadCustomers() {
    this.dataService.getCustomers().subscribe(
      data => this.customers = data,
      err => console.log(err)
    )
  }
}
