import { NgModule } from "@angular/core";
import { CustomersComponent } from "./customers.component";
import { CommonModule } from "@angular/common";
import { CustomersListComponent } from "./customers-list/customers-list.component";
import { MatTableModule } from "@angular/material/table";
import { SharedModule } from "../../shared/shared.module";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CustomersRoutingModule } from "./customers-routing.module";

@NgModule({
    imports: [ 
        CommonModule,
        MatTableModule,
        SharedModule,
        FormsModule,
        RouterModule,
        CustomersRoutingModule
    ],
    declarations: [ 
        CustomersComponent, 
        CustomersListComponent
    ],
    exports: [ 
        CustomersComponent
    ]
})
export class CustomersModule {}