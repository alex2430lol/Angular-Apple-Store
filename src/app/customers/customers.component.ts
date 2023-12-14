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
    this.loadCustomers();
  }

  TogglePage() {
    this.isVisible = !this.isVisible;
  }

  loadCustomers() {
    // Deprecated:
    // this.dataService.getCustomers().subscribe(
    //   data => this.customers = data,
    //   err => console.log(err),
    //   () => console.log('oh yes! customers loaded!')
    // )
    this.dataService.getCustomers().subscribe({
      next: (data) => this.customers = data,
      error: (err) => console.log(err),
      complete: () => console.log('oh yes! customers loaded!')
    })
  }
}
