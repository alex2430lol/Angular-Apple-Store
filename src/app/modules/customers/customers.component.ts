import { Component, OnInit } from '@angular/core';
import { ICustomer } from '../../shared/interfaces';
import { DataService } from '../../core/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit {
  title: string;
  customers: ICustomer[];
  isVisible: boolean = true;

  constructor(
    private dataService: DataService,
    private router: Router
  ) {
    this.title = '';
    this.customers = [];
  }

  ngOnInit() {
    this.title = 'Customers';
    this.loadCustomers();
  }

  // ReturnHome() {
  //   this.router.navigate(['/Home'])
  // }

  loadCustomers() {
    this.dataService.getCustomers().subscribe({
      next: (data) => this.customers = data,
      error: (err) => console.log(err),
      complete: () => console.log('Oh Yes! Customers are loaded!')
    })
  }
}
