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
    this.dataService.getCustomers().subscribe({
      next: (data) => this.customers = data,
      error: (err) => console.log(err),
      complete: () => console.log('Oh Yes! Customers are loaded!')
    })
  }
}
