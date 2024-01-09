import { Component, OnInit } from "@angular/core";
import { ICustomer, IOrder } from "../../shared/interfaces";
import { DataService } from "../../core/data.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-orders',
    templateUrl: './orders.component.html',
    styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

    orders: IOrder[] = [];
    customer?: ICustomer;

    constructor(
        private dataService: DataService,
        private route: ActivatedRoute)
    {

    }

    ngOnInit(): void {
        let id = this.getCustomerId()
        console.log('id: ' + id);
        this.getCustomer(id);
        this.getOrders(id)
    }

    getCustomerId(): number {
        const idParam = this.route.snapshot.paramMap.get('id');
        if (!idParam) {
            return -1;
        }
        return +idParam;
    }

    getCustomer(id: number) {
        this.dataService.getCustomer(id).subscribe({
            next: (customer) => {
                if (customer) {
                    this.customer = customer
                }
            },
            error: (err) => console.log(err),
            complete: () => {
                console.log(`getCustomer done: ${this.customer}`)
            }
        })
    }

    getOrders(id: number) {
        this.dataService.getOrders(id).subscribe({
            next: (orders) => this.orders = orders
        })
    }
}