import { NgModule } from "@angular/core";
import { LoginComponent } from "./login.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [ LoginComponent ],
    imports: [
        FormsModule,
        CommonModule,
        RouterModule
    ],
    exports: [
    ]
})
export class LoginModule { }