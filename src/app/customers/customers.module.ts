import { NgModule } from "@angular/core";
import { CustomersComponent } from "./customers.component";
import { CommonModule } from "@angular/common";
import { CustomersListComponent } from "./customers-list/customers-list.component";
import { MatTableModule } from "@angular/material/table";
import { FilterTextboxComponent } from "./customers-list/filter-textbox.component";

@NgModule({
    imports: [ 
        CommonModule,
        MatTableModule
    ],
    declarations: [ 
        CustomersComponent, 
        CustomersListComponent,
        FilterTextboxComponent
    ],
    exports: [ CustomersComponent ]
})
export class CustomersModule {}