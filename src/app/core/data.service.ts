import { Injectable } from "@angular/core";
import { Observable, catchError, map, throwError } from "rxjs";
import { ICustomer, IOrder } from "../shared/interfaces";
import { HttpClient } from "@angular/common/http";

@Injectable() 
export class DataService {
    baseUrl: string = 'assets/';

    constructor(private http: HttpClient) { }

    getCustomers() : Observable<ICustomer[]> {
        return this.http.get<ICustomer[]>(this.baseUrl + 'customers.json')
            .pipe(
                catchError(this.handleError)
            );
    }

    getCustomer(id: number) : Observable<ICustomer | null> { 
        // The | (pipe) symbol in TypeScript is used to create a union type, 
        // indicating that the variable of type ICustomer | null
        // can hold either an object conforming to the ICustomer interface or the value null.
        return this.http.get<ICustomer[]>(this.baseUrl + 'customers.json')
            .pipe(
                map(customers => {
                    let customer = customers.find((cus: ICustomer) => cus.id === id);
                    return customer || null;
                    // This is a logical OR (||) expression. If customer has a truthy value (meaning it exists and is not null, 
                    // undefined, 0, etc.), then the expression evaluates to the value of customer. 
                    // If customer is falsy (for example, if it is null), the expression evaluates to null.
                }),
                catchError(this.handleError)
            )
    }

    getOrders(id: number) : Observable<IOrder[]> {
        return this.http.get<IOrder[]>(this.baseUrl + 'orders.json')
          .pipe(
            map(orders => {
              let custOrders = orders.filter((order: IOrder) => order.customerId === id);
              return custOrders;
            }),
            catchError(this.handleError)
          );
      }

    private handleError(err: any) {
        console.error('server error: ' + err);
        if (err.error instanceof Error) {
            const errMsg = err.error.message;
            return throwError(() => new Error(errMsg));
        }
        return throwError(() => new Error(err || 'Node.js server error'));
    }
}