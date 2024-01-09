import { Component } from "@angular/core";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    showLoginBox: boolean = true
    userName: string = '';
    password: string = '';
    confirmPassword: string = '';
    isRememberMeChecked: boolean = false;

    onLoginClicked() {

    }

    onCreateYoursClicked() {
        this.showLoginBox = !this.showLoginBox
    }


    submitForm(): void {
        // Handle form submission logic (e.g., send data to backend)
        console.log('Form submitted');
      }
}